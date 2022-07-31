import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Option } = Select;

export default function Repairfangan() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const onFinish = (values) => {
    // const { username, password, email, phone_number } = values;
    // axios({
    //   method: 'POST',
    //   url: 'http://39.98.41.126:31104/users/register',
    //   data: JSON.stringify({ username, password, email, phone_number })
    // }).then(
    //   response => { alert('注册成功！'); console.log(response); back(); },
    // )
    console.log('Received values of form: ', values);
  };
  return (
    <div className='Repairfangan-mask'>
      <div className='Repairfangan-register'>
        <div className='Repairfangan-registerName'>修改方案
          <button className='Repairfangan-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='Repairfangan-fix'>
          <Form
            className='Repairfangan'
            name="Repairfangan"
            onFinish={onFinish}>
            {/* 版本号 */}
            <Form.Item
              className='Repairfangan-groupid'
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
              <Input max={5} style={{ width: '350px' }} />
            </Form.Item>
            {/* 有效期 */}
            <Form.Item
              className='Repairfangan-yue'
              name='time'
              label="有效期"
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
              <Input max={5} style={{ width: '350px' }} />
            </Form.Item>
            {/* 可激活数量 */}
            <Form.Item
              className='Repairfangan-groupid'
              name='number'
              label="可激活数量"
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
              <Input max={5} style={{ width: '350px' }} />
            </Form.Item>
            {/* 可用功能 */}
            <Form.Item
              name="function"
              label="可用功能"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '350px' }}
                placeholder="选择许可类型"
                allowClear
              >
                <Option value="社区">社区</Option>
                <Option value="公司">公司</Option>
                <Option value="专业">专业</Option>
              </Select>
            </Form.Item>
            {/* 价格 */}
            <Form.Item
              className='Repairfangan-yuan'
              name='price'
              label="价格"
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
              <Input max={5} style={{ width: '350px' }} />
            </Form.Item>
            {/* 提交 */}
            <Form.Item className='Repairfangan-submit' >
              <Button style={{ width: '150px' }} type="primary" htmlType="submit">
                确认
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div >

  )
}
