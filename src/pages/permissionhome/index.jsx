import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css'
import { Button} from 'antd';
import React,{Component} from 'react'
import { NavLink ,Outlet } from 'react-router-dom';
import './index.css'

export default class PermissionHome extends Component {
  render() {
    return (
      <div className="permissionHome">
        <h1 className="permissionHome-title">管理信息</h1>
        <div className="permissionHome-subnav">
            <ul className="permissionHome-subnav-left">
                <li key='001'><NavLink to='Contents/all'>全部</NavLink></li>
                <li key='002'><NavLink to='Contents/infoMange'>信息管理</NavLink></li>
                <li key='003'><NavLink to='Contents/rdDesign'>研发设计</NavLink></li>
                <li key='004'><NavLink to='Contents/productControl'>生产控制</NavLink></li>
                <li key='005'><NavLink to='Contents/firmware'>嵌入式软件</NavLink></li>
            </ul>
            <div className="permissionHome-subnav-right">
              <input type="text" placeholder='搜索'/>
              <Button shape="circle" icon={<SearchOutlined />} />
            </div>
        </div>
        {/* 注册路由 */}
        <Outlet/>
      </div>
    )
  }
}
