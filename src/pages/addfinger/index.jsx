import {
  Form,
  Input,
  Button,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, } from 'react-router-dom';
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
export default function Addfinger() {

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const onFinish = (values) => {
    console.log(values, 'values');
    const user_id = Number.parseInt(getCookie('user'))
    const { owner_name, mac, cpu, hard } = values
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
      },
      method: 'POST',
      url: `http://106.13.18.48/hardInfos`,
      data: JSON.stringify({
        user_id, owner_name, mac, cpu, hard
      })
    }).then(
      response => {
        if (response.data.code === 92001) {
          alert('添加指纹成功！')
          navigate(-1)
        }
        else {
          alert(response.data.msg)
        }
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  };
  return (
    <div className='Addfinger-mask'>
      <div className='Addfinger-register'>
        <div className='Addfinger-registerName'>新增指纹
          <button className='Addfinger-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='Addfinger-fix'>
          <Form
            name="addfinger"
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
              <Input />
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
              <Input />
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
              <Input />
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
              <Input />
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
