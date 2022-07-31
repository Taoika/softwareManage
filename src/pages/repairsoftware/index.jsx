import './index.css'
import { FileSearchOutlined, QrcodeOutlined, KeyOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import React from 'react';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}



const Repairsoftware = () => {
    const [msg, setMsg] = React.useState()
    const location = useLocation();
    const items = [
        getItem(<Link to='softwaremsg-m' state={msg}>软件简介</Link>, 'sub1', <FileSearchOutlined />),
        getItem(<Link to='versionimf-m' state={msg}>版本信息</Link>, 'sub2', <QrcodeOutlined />),
        getItem(<Link to='authorization-m' state={{}}>授权方案</Link>, 'sub4', <KeyOutlined />)
    ];
    React.useEffect(() => {
        const software_id = location.state.element && location.state.element.software_id;
        const name = location.state.element && location.state.element.software_name;
        const desc = location.state.element && location.state.element.desc;
        const type = location.state.element && location.state.element.group_id;
        setMsg({ name, desc, type, software_id })
    }, [])
    return (
        <div><div className='Repairsoftware'>
            <Menu
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