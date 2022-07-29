import {
  Form,
  Input,
  Button,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
const data = [
  {
    fingername: '指纹1'
  },
  {
    fingername: '指纹2'

  },
]
export default function Finger() {
  const location = useLocation()
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
    // console.log('Received values of form: ', values);
    console.log(location);
  };
  return (
    <div className='finger-mask'>
      <div className='finger-register'>
        <div className='finger-registerName'>指纹
          <button className='finger-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='finger-fix'>
          <Form
            name="register"
            onFinish={onFinish}>
            {/* 机主名 */}
            <Form.Item
              name="who"
              label="机主名"
              rules={[
                {
                  required: true,
                  message: 'Please input your 机主名',
                },
                {
                  // pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  // message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            {/* mac码 */}
            <Form.Item
              name="mac"
              label="mac码"
              rules={[
                {
                  required: true,
                  message: 'Please input your mac码!',
                },
                {
                  // pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  // message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            {/* cpu序列 */}
            <Form.Item
              name="cpu"
              label="cpu序列"
              rules={[
                {
                  required: true,
                  message: 'Please input your cpu!',
                },
                {
                  // pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  // message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            {/* 硬盘序列 */}
            <Form.Item
              name="hard"
              label="硬盘序列"
              rules={[
                {
                  required: true,
                  message: 'Please input your 硬盘序列!',
                },
                {
                  // pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  // message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item >
              <Button type="primary" style={{ position: 'absolute', width: '200px', left: '52%', top: '10%', transform: 'translateX(-50%)' }} htmlType="submit">
                确认
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

  )
}