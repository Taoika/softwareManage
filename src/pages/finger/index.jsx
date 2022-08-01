import {
  Form,
  Input,
  Button,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
//读Cookie
function getCookie(cookieName) {
  const strCookie = document.cookie
  const cookieList = strCookie.split(';')

  for (let i = 0; i < cookieList.length; i++) {
    const arr = cookieList[i].split('=')
    if (cookieName === arr[0].trim()) {
      return arr[1]
    }
  }

  return ''
}
export default function Finger() {
  const location = useLocation().state.x
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  console.log(location, '指纹详情');
  const onFinish = (values) => {
    //修改指纹

    const { info_id, user_id } = location
    const { owner_name, mac, cpu, hard } = values
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
      },
      method: 'PUT',
      url: 'http://106.13.18.48/hardInfos',
      data: JSON.stringify({
        info_id, user_id, owner_name, mac, cpu, hard
      })
    }).then(
      res => {
        if (res.data.code === 92101) {
          console.log('修改指纹成功！');
        }
        else {
          alert(res.data.msg);
          navigate(-1);
        }
      }
    )
    console.log('Received values of form: ', values);
  };
  return (
    <div className='finger-mask'>
      <div className='finger-register'>
        <div className='finger-registerName'>修改指纹
          <button className='finger-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='finger-fix'>
          <Form
            name="register"
            onFinish={onFinish}>
            {/* 机主名 */}
            <Form.Item
              name="owner_name"
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
              <Input placeholder={location.owner_name} />
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
              <Input placeholder={location.mac} />
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
              <Input placeholder={location.cpu} />
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
              <Input placeholder={location.hard} />
            </Form.Item>
            <Form.Item >
              <Button type="primary" style={{ position: 'absolute', width: '200px', left: '52%', top: '10%', transform: 'translateX(-50%)' }} htmlType="submit">
                确认修改
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

  )
}
