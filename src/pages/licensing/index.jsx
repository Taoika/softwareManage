import React, { useState } from 'react';
import './index.css'
import { Button, Form, Select } from 'antd';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default function Licensing() {

    // f保存功能
    let f;
    // v保存values
    let v=null;

    const id =Number.parseInt(document.cookie.split(';')[2].split('=')[1]) 

    const [form] = Form.useForm();
    const onFinish = (values) => {
        v=values;
        f=values.function==='社区'?0:values.function==='教育'?1:2;
        // console.log(f);
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': document.cookie.split(';')[0].split('=')[1]
            },
            method: 'POST',
            url: `http://106.13.18.48/licenses`,
            data:{
                user_id:id,
                software_id:softwareId,
                function_type:f,
                version_id:versionId,
                validity_time:values.number,
                license_num:values.number,
            }
          }).then(
            response => {
              if (response.data.code === 91001) {
                // console.log(response.data.data);
                alert('授权许可成功!!!')
              }
              else {
                alert(response.data.msg)
              }
            },
            error => {
              console.log(error);
            }
          )
    };

    const [time,setTime]=useState();
    const [fn,setFn]=useState();
    const [num,setNum]=useState();
    const [price,setPrice]=useState();
    function handleTime(time){
        setTime(time);
        setPrice(time*20+fn*23+num*21);
    }

    function handleFunction(func){
        f=func==='社区'?0:func==='教育'?1:2;
        setFn(f);
        setPrice(time*20+fn*23+num*21);
    }

    function handleNumber(num){
        setNum(num);
        setPrice(time*20+fn*23+num*21);
    }

    const navigate = useNavigate()
    const state = useLocation().state;
    // console.log(state.id);

        // 版本id 版本信息 软件id
        const [versionId, setVersionId] = React.useState([]);
        const [versionInf, setVersionInf] = React.useState([]);
        const [softwareId, setSoftwareId] = React.useState([]);
        const [desc, setDesc] = React.useState([]);
        const [groupId, setGroupId] = React.useState([]);
        const [name, setName] = React.useState([]);
    
        // 获取软件版本信息
        React.useEffect(() => {
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': document.cookie.split(';')[0].split('=')[1]
            },
            method: 'GET',
            url: `http://39.98.41.126:31104/versions/latest_${state.id}`,
            
          }).then(
            response => {
              if (response.data.code === 80401) {
                // console.log(response.data.data);
                setVersionInf(response.data.data.versionInf)
                setVersionId(response.data.data.version_id);
                setSoftwareId(response.data.data.software_id);
    
              }
              else {
                alert(response.data.msg)
              }
            },
            error => {
              console.log(error);
            }
          )
        }, [])
    
        // 获取软件信息
        React.useEffect(() => {
        //   console.log(document.cookie.split(';')[0].split('=')[1]);
          axios({
              headers: {
                'Content-Type': 'application/json',
                'Authorization': document.cookie.split(';')[0].split('=')[1]
              },
              method: 'GET',
              url: `http://39.98.41.126:31104/softwares/${state.id}`,
              
            }).then(
              response => {
                if (response.data.code === 70401&&response.data.data) {
                  // console.log(response.data.data);
                  setDesc(response.data.data.desc)
                  setGroupId(response.data.data.group_id)
                  setName(response.data.data.software_name)
                }
                else {
                  alert(response.data.msg)
                }
                // console.log(response.data);
              },
              error => {
                console.log(error);
              }
            )
          }, [])

    return (
        <div className='Licensing'>
            <div className='Licensing-title'>许可证</div>
            <div className='Licensing-name'>软件名: <strong>{name}</strong> </div>
            <div className='Licensing-version'>版本号:<strong>{versionInf}</strong></div>
            <Form
                {...layout} form={form}
                onFinish={onFinish}
                name='licensing'
            >
                {/* 有效期 */}
                <Form.Item
                    className='Licensing-time'
                    name="time"
                    label="有效期"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        onChange={(value)=>handleTime(value)}
                        placeholder="选择许可有效期"
                        allowClear
                    >
                        <Option value="1">1年</Option>
                        <Option value="2">2年</Option>
                        <Option value="3">3年</Option>
                    </Select>
                </Form.Item>
                {/* 可用功能 */}
                <Form.Item
                    className='Licensing-function'
                    name="function"
                    label="可用功能"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        onChange={(value)=>handleFunction(value)}
                        placeholder="选择许可类型"
                        allowClear
                    >
                        <Option value="社区">社区</Option>
                        <Option value="教育">教育</Option>
                        <Option value="企业">企业</Option>
                    </Select>
                </Form.Item>
                {/* 激活数量 */}
                <Form.Item
                    className='Licensing-number'
                    name="number"
                    label="激活数量"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        onChange={(value)=>handleNumber(value)}
                        placeholder="选择激活数量"
                        allowClear
                    >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </Form.Item>
                {/* 提交 */}
                <Form.Item
                    className='Licensing-submit'>
                    <Button style={{ width: '200px' }} type="primary" htmlType="submit">
                        确认购买
                    </Button>
                </Form.Item>
            </Form>
            {/* 价格 */}
            <div className='Licensing-price' >价格：<div className='Licensing-yuan'>{price}</div>元</div>

        </div>
    )
}
