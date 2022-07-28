import './index.css'
import { FileDoneOutlined, ControlOutlined, SettingOutlined, FileAddOutlined } from '@ant-design/icons';
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
    getItem(<Link to='addsoftware'>发布软件</Link>, 'sub1', <FileAddOutlined />),
    getItem(<Link to='manageimf'>管理信息</Link>, 'sub2', <ControlOutlined />),
    getItem(<Link to='authorizationmethod'>授权方案</Link>, 'sub4', <FileDoneOutlined />)
];

const Management = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div><div className='Management'>
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
            <div className='Management-main'><Outlet /></div>

        </div>

    );
};

export default Management;