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



const Softwaredetail = () => {

    const [msg, setMsg] = React.useState()
    const location = useLocation();
    const items = [
        getItem(<Link to='softwaremsg' state={msg}>软件简介</Link>, 'sub1', <FileSearchOutlined />),
        getItem(<Link to='versioninfo' state={msg}>版本信息</Link>, 'sub2', <QrcodeOutlined />),
        getItem(<Link to='licensing' state={msg}>授权许可</Link>, 'sub4', <KeyOutlined />)
    ];
    React.useEffect(() => {
        // console.log('location', location.state);
        const name = location.state.element && location.state.element.software_name;
        const desc = location.state.element && location.state.element.desc;
        const type = location.state.element && location.state.element.group_id;
        const id = location.state.element && location.state.element.software_id;
        setMsg({ name, desc, type,id })
    }, [])



    return (
        <div><div className='Softwaredetail'>
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
            <div className='Softwaredetail-main'><Outlet /></div>
        </div>

    );
};

export default Softwaredetail;