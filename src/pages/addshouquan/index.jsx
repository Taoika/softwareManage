import {
  Form,
  Button,
  Select,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const { Option } = Select;

export default function Addshouquan() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const onFinish = (values) => {
    const { username, password, email, phone_number } = values;
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
    <div className='Addshouquan-mask'>
      <div className='Addshouquan-register'>
        <div className='Addshouquan-registerName'>添加授权
          <button className='Addshouquan-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='Addshouquan-fix'>
          <Form
            name="register"
            onFinish={onFinish}>
            {/* 激活数量 */}
            <Form.Item
              className='Addshouquan-number'
              name="number"
              label="选择使用者"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                style={{ width: '280px' }}
                placeholder="选择您的指纹"
                allowClear
              >
                <Option value="1">指纹1</Option>
                <Option value="2">指纹2</Option>
                <Option value="3">指纹3</Option>
              </Select>
            </Form.Item>
            <Form.Item >
              <Button type="primary" style={{ position: 'absolute', left: '115px', top: '70px', width: '110px' }} htmlType="submit">
                确认
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

  )
}
