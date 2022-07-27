import {
  Form,
  Input,
  Button,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Repairpsw() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const onFinish = (values) => {
    const { username, password, email, phone_number } = values;
    axios({
      method: 'POST',
      url: 'http://39.98.41.126:31104/users/register',
      data: JSON.stringify({ username, password, email, phone_number })
    }).then(
      response => { alert('注册成功！'); console.log(response); back(); },
    )
    console.log('Received values of form: ', values);
  };
  return (
    <div className='repairpsw-mask'>
      <div className='repairpsw-register'>
        <div className='repairpsw-registerName'>修改密码
          <button className='repairpsw-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='repairpsw-fix'>
          <Form
            name="register"
            onFinish={onFinish}>
            <Form.Item
              name="initpassword"
              label="原始密码"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="newpassword"
              label="新密码"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                  message: '密码必须为6-20个字母、数字'

                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item >
              <Button type="primary" style={{ position: 'absolute', left: '50%', top: '10%', transform: 'translateX(-50%)' }} htmlType="submit">
                确认修改
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

  )
}
