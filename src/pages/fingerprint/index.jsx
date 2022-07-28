import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import {
    RightOutlined
} from '@ant-design/icons';
export default function Fingerprint() {
    const navigate = useNavigate();
    const finger = () => {
        navigate('/personalcen/finger')
    }
    const addfinger = () => {
        navigate('/personalcen/addfinger')
    }
    return (
        <div className='Fingerprint'>
            <div className='Fingerprint-title'>指纹管理</div>
            <div className='Fingerprint-main'>
                <ul>
                    <li>指纹1<RightOutlined onClick={() => finger()} /></li>
                    <li>指纹2<RightOutlined /></li>
                    <li>指纹3<RightOutlined /></li>
                    <li>指纹4<RightOutlined /></li>
                </ul>
                <button className='Fingerprint-save'>保存</button ><button onClick={() => addfinger()} className='Fingerprint-add'>新增指纹</button>
            </div>

        </div>
    )
}
