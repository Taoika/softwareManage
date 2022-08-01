import {
  Form,
  Button,
  Select,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
const { Option } = Select;
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
export default function Addshouquan() {
  const id = Number.parseInt(getCookie('user'))
  const [zhiwen, setZhiwen] = React.useState([])
  const location = useLocation().state
  console.log(location, '看看穿了啥到addshouquan');
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  //请求获取硬件信息
  React.useEffect(() => {
    if (location) {
      axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getCookie('header')
        },
        method: 'GET',
        url: `http://106.13.18.48/hardInfos?user_id=${id}`,
      }).then(
        res => {
          if (res.data.code === 92201 && res.data.data) {
            setZhiwen(res.data.data)
            navigate(-1)
          }
          else {
            alert(res.data.msg)
          }
          console.log(res, '获取指纹id啊');
        }
      )
    }


  }, [])
  //增加授权 需要用户id（id），指纹id 许可证id{location.id}

  const onFinish = (values) => {

    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
      },
      method: 'POST',
      url: `http://106.13.18.48/codes`,
      data: JSON.stringify({
        license_id: location.id,
        user_id: id,
        info_id: values.number
      })
    }).then(res => {
      if (res.data.code === 94101) {
        alert(res.data.msg)
      }
      else {
        alert(res.data.msg)
      }
      console.log(res, '看看能不能修改成功')
    })
    console.log('Received values of form: ', values, '看看提交了啥');
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
                {
                  zhiwen.map((x, i) => {
                    return (<Option value={x.info_id}>指纹{i + 1}</Option>)
                  })
                }
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
