import { Layout, Menu } from 'antd';
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
// import routes from './routes'
import './index.css'
import logo from '../logo3.png'
const { Header } = Layout;
const items1 = [
    {
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
    { key: 2, label: <Link to='/home'>产品</Link> },
    { key: 3, label: <Link to='/management'>管理端</Link> },
    { key: 4, label: <Link to='/personalcen'>个人中心</Link> },
    { key: 5, label: <Link to='/dlzc'><UserOutlined style={{ fontSize: '20px' }} /></Link> }
]


export default function Head() {
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/home')
    }
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