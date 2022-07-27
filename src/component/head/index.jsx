import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
// import routes from './routes'
import './index.css'
import logo from './logo192.png'
const { Header } = Layout;
const items1 = [
    { key: 1, label: <Link to='/news'>消息</Link> },
    { key: 2, label: <Link to='/home'>产品</Link> },
    { key: 3, label: <Link to='/management'>管理端</Link> },
    { key: 4, label: <Link to='/personalcen'>个人中心</Link> },
    { key: 5, label: <Link to='/dlzc'><UserOutlined style={{ fontSize: '20px' }} /></Link> }

    // { key: 1, label: <Link to='/home'>产品</Link> },
    // { key: 2, label: <Link to='/white'>购买授权</Link> },
    // { key: 3, label: <Link to='/mysoftware'><UserOutlined style={{ fontSize: '20px' }} /></Link> }

];

export default function Head() {
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/home')
    }
    return (
        <Layout>
            <Header className="header">
                <div onClick={backHome} className="logo"><img src={logo} alt="hehe" /></div>
                <div className="TopNav_Name">软件管理平台</div>
                <Menu theme="dark" mode="horizontal" items={items1} />
            </Header>
        </Layout>
    )
}