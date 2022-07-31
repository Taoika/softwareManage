import React, { useState } from 'react'
import { Button, Form, Input, Select, Upload, message } from 'antd';
import './index.css'
import { UploadOutlined, LoadingOutlined, PlusOutlined, } from '@ant-design/icons';
import axios from "axios";

//定位
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */
//提示信息
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
//上传图片
const normFile = (e) => {
    console.log('Upload event:', e);
    console.log(e.file);
    // const formData=new FormData();
    // formData.append('file',e);
    // console.log(formData);
    axios({ //axios
        method: 'post',
        url: 'http://106.13.18.48/files/uploadImg',
        file1: e,
        type:'software',
        id:1,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    // console.log(formData);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
//上传图片
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};

export default function Addsoftware() {
    //上海图片
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                上传图片
            </div>
        </div>
    );
    const beforeUpload = ({fileList}) => {
        return  false;
    }

    //上传图片
    const onFinish = (values) => {
        const { software_name, desc, group_id, versionInf, version_desc } = values
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            url: 'http://106.13.18.48/softwares',
            data: JSON.stringify({
                software: {
                    software_name,
                    desc,
                    group_id
                },
                version: {
                    versionInf,
                    desc: version_desc
                }

            })
        }).then(

            response => {
                if (response.data.code === 70101) {
                    alert('发布成功！');
                }
                else {
                    alert(response.data.msg);
                }
                console.log(response);
            },
            error => {
                alert('异常错误！');
            }


        )
        console.dir('Received values of form: ', values);
    };
    
    return (
        <div>
            <div className='Addsoftware-title'>发布软件</div>
            <div className='Addsoftware-box'>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    {/* 版本号 */}
                    <Form.Item
                        className='Addsoftware-groupid'
                        name='version_id'
                        label="版本号"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                                max: 11
                            }
                        ]}
                    >
                        <Input max={5} style={{ width: '300px' }} />
                    </Form.Item>
                    {/* 版本信息 */}
                    <Form.Item
                        className='Addsoftware-versionInf'
                        name='versionInf'
                        label="版本信息"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                                max: 20
                            },
                        ]}
                    >
                        <Input style={{ width: '300px' }} />
                    </Form.Item>
                    {/* 软件名 */}
                    <Form.Item
                        className='Addsoftware-name'
                        name='software_name'
                        label="软件名"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                                max: 12
                            },
                        ]}
                    >
                        <Input style={{ width: '300px' }} />
                    </Form.Item>
                    {/* 简介 */}
                    <Form.Item 
                        className='Addsoftware-desc' name='desc' label="简介"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                                max: 200
                            },
                        ]}
                    >
                        <Input.TextArea style={{ width: '857px', height: '150px' }} />
                    </Form.Item>
                    {/* 软件类别 */}
                    <Form.Item 
                        className='Addsoftware-type' label="软件种类" name='group_id'
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select style={{ width: '200px' }}>
                            <Select.Option key='Demo1' value={1}>信息管理</Select.Option>
                            <Select.Option key='Demo2' value={2}>研发设计</Select.Option>
                            <Select.Option key='Demo3' value={3}>生产控制</Select.Option>
                            <Select.Option key='Demo4' value={4}>嵌入式软件</Select.Option>
                        </Select>
                    </Form.Item>
                    {/* 版本描述 */}
                    <Form.Item
                        className='Addsoftware-verdesc' name='version_desc' label="版本描述"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                                max: 100
                            },
                        ]}
                    >
                        <Input.TextArea style={{ width: '1400px', height: '150px' }} />
                    </Form.Item>
                    {/* 提交 */}
                    <Form.Item
                        className='Addsoftware-submit' 
                        wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button style={{ width: '150px' }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    {/* 安装包 */}
                    <Form.Item
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        className='Addsoftware-upload'
                        name="upload"
                        label="安装包"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    {/* 图片 */}
                    <Form.Item
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        className='Addsoftware-uploadpic'
                        name="pic"
                        label=""
                        valuePropName="fileList"
                        getValueFromEvent={normFile}                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',

                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </Form.Item>

                </Form>

            </div>

        </div>
    )
}


