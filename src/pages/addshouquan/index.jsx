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

export default function Addshouquan() {
  const id = Number.parseInt(document.cookie.split(';')[2].split('=')[1])
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
          'Authorization': document.cookie.split(';')[0].split('=')[1]
        },
        method: 'GET',
        url: `http://39.98.41.126:31104/hardInfos?user_id=${id}`,
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
        'Authorization': document.cookie.split(';')[0].split('=')[1]
      },
      method: 'POST',
      url: `http://39.98.41.126:31104/codes`,
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
