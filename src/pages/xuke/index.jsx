import {
  Form,
  Input,
  Button,
} from 'antd';
import React from 'react';
import './index.css'
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function Xuke() {
  const location = useLocation().state
  const [version, setVersion] = React.useState('')
  const type = location.funciton_type
  const Function = type === 1 ? '社区' : type === 2 ? '公司' : '专业'
  console.log(location, '看看许可证穿了啥');
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  const add = () => {
    navigate('addshouquan')
  }
  //请求获取版本
  React.useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': document.cookie.split(';')[0].split('=')[1]
      },
      method: 'GET',
      url: `http://39.98.41.126:31104/versions/${location.xuke.version_id}`,
    }).then(
      res => {
        if (res.data.code === 80401 && res.data.data) {
          setVersion(res.data.data.versionInf)
        }
        else {
          alert(res.data.msg)
        }
        console.log(res, '获取版本信息啊');
      }
    )

  }, [])


  return (
    <div> <Outlet />
      <div className='Xuke-mask'>
        <div className='Xuke-register'>
          <div className='Xuke-registerName'>许可证
            <button className='Xuke-cancelBtn' onClick={back} style={{ background: 'rgba(255,255,255,0)', color: '#606060', border: 'none' }}>X</button>
          </div>
          <div className='Xuke-fix'>
            <ul>
              <li>软件名：{location.softwarename}</li>
              <li>版本号：{version}</li>
              <li>有效期： {location.xuke.validity_time}月</li>
              <li>可用功能： {Function}</li>
              <li>生效日期： {moment(location.xuke.begin_date).format('YYYY-MM-DD HH:mm:ss')}</li>
              <li>截止日期：  {moment(location.xuke.end_date).format('YYYY-MM-DD HH:mm:ss')}</li>
              <li>可用授权数量：{location.xuke.license_num}</li>
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
