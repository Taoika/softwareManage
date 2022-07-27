import './index.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
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
    getItem(<Link to='softwaremsg-m'>软件简介</Link>, 'sub1', <MailOutlined />),
    getItem(<Link to='versionimf-m'>版本信息</Link>, 'sub2', <AppstoreOutlined />),
    getItem(<Link to='authorization-m'>授权许可</Link>, 'sub4', <SettingOutlined />)
];

const Repairsoftware = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div><div className='Repairsoftware'>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
            <div className='Repairsoftware-main'><Outlet /></div>

        </div>

    );
};

export default Repairsoftware;