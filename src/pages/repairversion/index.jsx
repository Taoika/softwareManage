import {
  Form,
  Input,
  Button,
  Upload
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
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
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};
export default function Repairverson() {
  const location = useLocation().state;
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const onFinish = (values) => {
    const { versionInf,
      desc,
      url } = values;
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
      },
      method: 'PUT',
      url: 'http://106.13.18.48/versions',
      data: JSON.stringify({
        version_id: location.version_id,
        versionInf,
        desc,
        url
      })
    }).then(
      response => {
        if (response.data.code === 80201) {
          alert('修改成功！')
        }
        else {
          alert(response.data.msg)
        }
        console.log(response);
        back();
      },
    )
    console.log('Received values of form: ', values);
  };
  return (
    <div className='Repairverson-mask'>
      <div className='Repairverson-register'>
        <div className='Repairverson-registerName'>修改版本信息
          <button className='Repairverson-cancelBtn' onClick={back} style={{ background: '#3D6DB5', border: 'none' }}>X</button>
        </div>
        <div className='Repairverson-fix'>
          <Form
            name="register"
            onFinish={onFinish}>
            {/* 版本号 */}
            <Form.Item
              className='Repairverson-groupid'
              name='versionInf'
              label="版本编号"
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
            {/* 版本描述 */}
            <Form.Item className='Repairverson-verdesc' name='desc' label="版本描述"
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
              <Input.TextArea style={{ width: '480px', height: '150px' }} />
            </Form.Item>
            {/* 提交 */}
            <Form.Item className='Repairverson-submit' >
              <Button style={{ width: '150px' }} type="primary" htmlType="submit">
                确认
              </Button>
            </Form.Item>
            {/* 安装包 */}
            <Form.Item
              className='Repairverson-upload'
              name="url"
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
    </div >

  )
}
