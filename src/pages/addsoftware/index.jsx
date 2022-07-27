import React from 'react'
import { Button, Form, Input, Select, Upload } from 'antd';
import './index.css'
import { UploadOutlined } from '@ant-design/icons';



const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

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
const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e?.fileList;
};
export default function Addsoftware() {
    const onFinish = (values) => {
        console.log(values);
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
                    <Form.Item className='Addsoftware-desc' name='desc' label="简介"
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
                        <Input.TextArea style={{ width: '1400px', height: '150px' }} />
                    </Form.Item>
                    {/* 软件类别 */}
                    <Form.Item className='Addsoftware-type' label="软件种类" name='group_id'
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select style={{ width: '200px' }}>
                            <Select.Option key='Demo1' value="demo">Demo1</Select.Option>
                            <Select.Option key='Demo2' value="demo">Demo2</Select.Option>
                            <Select.Option key='Demo3' value="demo">Demo3</Select.Option>
                            <Select.Option key='Demo4' value="demo">Demo4</Select.Option>
                        </Select>
                    </Form.Item>
                    {/* 版本描述 */}
                    <Form.Item className='Addsoftware-verdesc' name='version_desc' label="版本描述"
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
                    <Form.Item className='Addsoftware-submit' wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button style={{ width: '150px' }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    {/* 安装包 */}
                    <Form.Item
                        className='Addsoftware-upload'
                        name="upload"
                        label="安装包"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>

            </div>

        </div>
    )
}
