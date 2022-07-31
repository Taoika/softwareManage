import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
// import routes from './routes'
import './index.css'
import axios from 'axios';
import logo from '../logo3.png'
import { useLocation } from 'react-router-dom';
const { Header } = Layout;


export default function Head() {

    const [state1, setState] = React.useState({ id: -1 });
    // console.log(state1, 'state1');

    //消去登录注册
    if (document.cookie && state1.id === -1) {
        const permission = Number.parseInt(document.cookie.split(';')[1].split('=')[1]);
        // console.log(permission, '消去登录注册permission');
        setState({ id: permission })
        // console.log(state1, '!!!!');
    }
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/home')
    }

    // React.useEffect({
    //     axios({
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         method: 'POST',
    //         url: 'http://106.13.18.48/users/register',
    //       }).then(
    //         response => {
    //           const { data } = response;
    //           if (data.code === 60101) {
    //             console.log(response);
    //             alert('注册成功！');
    //             back();

    //           }
    //           else {
    //             alert(data.msg);
    //           }

    //         },
    //       )
    // })




    //数据
    const items1 = [
        state1.id === -1 ? '' : {
            key: 1, label: <Link className='head-news' to='/news'>消息</Link>,
            children: [
                {
                    label: <Link className='head-newsli' to='/softwaredetail'><img style={{ width: '120px', height: '120px' }} className='head-newsliimg' src="https://img0.baidu.com/it/u=1015829973,3648298464&fm=253&fmt=auto&app=120&f=JPG?w=500&h=501" alt="" />
                        <div className='head-newslititle'>idea发布了1.0.0.1</div>
                        <div className='head-newsliclick'>发布了全新版本点击跳转~</div>
                        <div className='head-newslitime'>2022-07-26 &nbsp;&nbsp; 11:31:31</div>
                    </Link>, key: 'submenu-item-1'
                },
                {
                    label: <Link className='head-newsli' to='/no'><img style={{ width: '120px', height: '120px' }} className='head-newsliimg' src="https://img0.baidu.com/it/u=1015829973,3648298464&fm=253&fmt=auto&app=120&f=JPG?w=500&h=501" alt="" />
                        <div className='head-newslititle'>idea发布了1.0.0.1</div>
                        <div className='head-newsliclick'>发布了全新版本点击跳转~</div>
                        <div className='head-newslitime'>2022-07-26 &nbsp;&nbsp; 11:31:31</div>
                    </Link>, key: 'submenu-item-2'
                },
                {
                    label: <Link className='head-newsli' to='/no'><img style={{ width: '120px', height: '120px' }} className='head-newsliimg' src="https://img0.baidu.com/it/u=1015829973,3648298464&fm=253&fmt=auto&app=120&f=JPG?w=500&h=501" alt="" />
                        <div className='head-newslititle'>idea发布了1.0.0.1</div>
                        <div className='head-newsliclick'>发布了全新版本点击跳转~</div>
                        <div className='head-newslitime'>2022-07-26 &nbsp;&nbsp; 11:31:31</div>
                    </Link>, key: 'submenu-item-3'
                },
                {
                    label: <Link className='head-newsli' to='/no'><img style={{ width: '120px', height: '120px' }} className='head-newsliimg' src="https://img0.baidu.com/it/u=1015829973,3648298464&fm=253&fmt=auto&app=120&f=JPG?w=500&h=501" alt="" />
                        <div className='head-newslititle'>idea发布了1.0.0.1</div>
                        <div className='head-newsliclick'>发布了全新版本点击跳转~</div>
                        <div className='head-newslitime'>2022-07-26 &nbsp;&nbsp; 11:31:31</div>
                    </Link>, key: 'submenu-item-4'
                },
                {
                    label: <Link className='head-newsli' to='/no'><img style={{ width: '120px', height: '120px' }} className='head-newsliimg' src="https://img0.baidu.com/it/u=1015829973,3648298464&fm=253&fmt=auto&app=120&f=JPG?w=500&h=501" alt="" />
                        <div className='head-newslititle'>idea发布了1.0.0.1</div>
                        <div className='head-newsliclick'>发布了全新版本点击跳转~</div>
                        <div className='head-newslitime'>2022-07-26 &nbsp;&nbsp; 11:31:31</div>
                    </Link>, key: 'submenu-item-5'
                },
            ],
        },
        state1.id === -1 ? '' : { key: 2, label: <Link to='/home'>产品</Link> },
        state1.id === -1 ? { key: 5, label: <Link to='dlzc'><UserOutlined style={{ fontSize: '20px' }} /></Link> } :
            state1.id === 0 ? { key: 4, label: <Link to='personalcen'>个人中心</Link> } : { key: 3, label: <Link to='management'>管理端</Link> }
    ]








    return (
        <Layout>
            <Header className="header">
                <div onClick={backHome} className="logo"><img src={logo} alt="hehe" /></div>
                <div className="TopNav_Name"></div>
                <Menu style={{ background: '#3D6DB5' }} theme="dark" mode="horizontal" items={items1} />
            </Header>
        </Layout>
    )
}