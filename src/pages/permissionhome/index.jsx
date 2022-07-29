import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css'
import { Button } from 'antd';
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './index.css'

export default function PermissionHome() {
  const myref = React.useRef();
  const navigate = useNavigate();
  const Search = () => {
    navigate('/management/manageimf/search', {
      state: {
        softwarename: myref.current.value
      }
    })
  }
  return (
    <div className="permissionHome">
      <h1 className="permissionHome-title">管理信息</h1>
      <div className="permissionHome-subnav">
        <ul className="permissionHome-subnav-left">
          <li key='001'><NavLink to='all'>全部</NavLink></li>
          <li key='002'><NavLink to='infoMange'>信息管理</NavLink></li>
          <li key='003'><NavLink to='rdDesign'>研发设计</NavLink></li>
          <li key='004'><NavLink to='productControl'>生产控制</NavLink></li>
          <li key='005'><NavLink to='firmware'>嵌入式软件</NavLink></li>
        </ul>
        <div className="permissionHome-subnav-right">
          <input type="text" ref={myref} placeholder='搜索' />
          <Button shape="circle" onClick={Search} icon={<SearchOutlined />} />
        </div>
      </div>
      {/* 注册路由 */}
      <div className='M'> <Outlet /></div>

    </div>
  )
}

