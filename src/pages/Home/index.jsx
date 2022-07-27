import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css'
import { Button } from 'antd';
import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default class Home extends Component {

  render() {

    return (
      <div className="home">
        <div className="home-subnav">
          <ul className="home-subnav-left">
            <li key='001'><NavLink to='all'>全部</NavLink></li>
            <li key='002'><NavLink to='infoMange'>信息管理</NavLink></li>
            <li key='003'><NavLink to='rdDesign'>研发设计</NavLink></li>
            <li key='004'><NavLink to='productControl'>生产控制</NavLink></li>
            <li key='005'><NavLink to='firmware'>嵌入式软件</NavLink></li>
          </ul>
          <div className="home-subnav-right">
            <input type="text" placeholder='搜索' />
            <Button shape="circle" icon={<SearchOutlined />} />
          </div>
        </div>
        {/* 注册路由 */}
        <Outlet />
      </div>
    )
  }
}
