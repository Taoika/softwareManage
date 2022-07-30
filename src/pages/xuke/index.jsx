import {
  Form,
  Input,
  Button,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
export default function Xuke() {
  const location = useLocation()

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const add = () => {
    navigate('addshouquan')
  }
  const onFinish = (values) => {
    console.log(location);
    // const { username, password, email, phone_number } = values;
    // axios({
    //   method: 'POST',
    //   url: 'http://39.98.41.126:31104/users/register',
    //   data: JSON.stringify({ username, password, email, phone_number })
    // }).then(
    //   response => { alert('注册成功！'); console.log(response); back(); },
    // )
    // console.log('Received values of form: ', values);
  };
  return (
    <div> <Outlet />
      <div className='Xuke-mask'>
        <div className='Xuke-register'>
          <div className='Xuke-registerName'>许可证
            <button className='Xuke-cancelBtn' onClick={back} style={{ background: 'rgba(255,255,255,0)', color: '#606060', border: 'none' }}>X</button>
          </div>
          <div className='Xuke-fix'>
            <ul>
              <li>软件名：CAWAFWAWFWAFAF</li>
              <li>版本号：xxxxxxxxxxxxxxxx</li>
              <li>有效期： 一年</li>
              <li>可用功能： 社区</li>
              <li>生效日期： 2022-7-29</li>
              <li>截止日期： 2023-7-29</li>
              <li>可用授权数量：1/2</li>
            </ul>
            <Button type="primary" onClick={add} style={{ position: 'absolute', width: '200px', left: '52%', top: '85%', transform: 'translateX(-50%)' }}>
              添加授权
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
