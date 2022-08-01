import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
// import routes from './routes'
import './index.css'
import axios from 'axios';
import logo from '../logo3.png'
import { useLocation } from 'react-router-dom';
import moment from 'moment';
const { Header } = Layout;

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
export default function Head() {

    const [state1, setState] = React.useState({ id: -1 });
    const [news, setNews] = React.useState([]);

    // console.log(state1, 'state1');

    //消去登录注册
    if (document.cookie && state1.id === -1) {
        const permission = Number.parseInt(getCookie('permission'));
        // console.log(permission, '消去登录注册permission');
        setState({ id: permission })
        // console.log(state1, '!!!!');
    }
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/home')
    }
    //获取消息
    React.useEffect(() => {
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('header')
            },
            method: 'GET',
            url: `http://106.13.18.48/notices_user/${Number.parseInt(getCookie('user'))}`,
        }).then(
            res => {
                if (res.data.code === 60611 && res.data.data) {
                    setNews(res.data.data, 'data')
                }
                else {
                    alert(res.data.msg)
                }
                // console.log(res);
            }
        )
    }, [])
    function showDetail(e) {
        console.log(e, 'eeeeee');
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie("header")
            },
            method: 'GET',
            url: `http://106.13.18.48/softwares/${e}`,
        }).then(
            res => {
                if (res.data.code === 70401 && res.data.data) {
                    navigate('/softwaredetail', {
                        state: {
                            element: res.data.data
                        }
                    })
                }
                else {
                    alert(res.data.msg)
                }
                console.log(res);
            }
        )

    }



    //数据
    const items1 = [
        state1.id === -1 || state1.id === 1 ? '' : {
            key: 1, label: <Link className='head-news' to='/news'>消息</Link>,
            children:
                news.map((x, i) => {
                    console.log(x);
                    return ({
                        label:
                            <div onClick={() => showDetail(x.software_id)} className='head-newsli'><img style={{ width: '120px', height: '120px' }} className='head-newsliimg' src="https://img0.baidu.com/it/u=1015829973,3648298464&fm=253&fmt=auto&app=120&f=JPG?w=500&h=501" alt="" />
                                <div className='head-newslititle'>{x.content}</div>
                                <div className='head-newsliclick'>{x.content}</div>
                                <div className='head-newslitime'>{moment(x.time).format('YYYY-MM-DD HH:mm:ss')}</div>
                            </div>,
                        key: `submenu-item-${i}`
                    })
                })
        },
        state1.id === -1 || state1.id === 1 ? '' : { key: 2, label: <Link to='/home'>产品</Link> },
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