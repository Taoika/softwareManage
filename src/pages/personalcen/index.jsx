import './index.css'
import { AppstoreOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import React from 'react'; function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem(<Link to='mysoftware'>我的软件</Link>, 'sub1', <MailOutlined />),
    getItem(<Link to='myauthorization'>我的授权</Link>, 'sub2', <AppstoreOutlined />),
    getItem('账户信息', 'sub4', <SettingOutlined />, [
        getItem(<Link to='personalinf'>个人信息</Link>, 'personalinf'),
        getItem(<Link to='fingerprint'>指纹管理</Link>, 'fingerprint'),
    ]),
];

const Personalcen = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div><div className='Personalcen'>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>

            <div className='Personalcen-main'><Outlet /></div>

        </div>

    );
};

export default Personalcen;