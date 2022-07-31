import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    RightOutlined
} from '@ant-design/icons';
export default function Fingerprint() {
    const navigate = useNavigate();
    const finger = () => {
        navigate('/personalcen/finger', {
            state: {

            }
        })
    }
    const addfinger = (e) => {
        navigate('/personalcen/addfinger', {
            state: {
                e
            }
        })
    }
    //发请求
    const id = document.cookie.split(';')[2].split('=')[1]
    React.useEffect(() => {
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': document.cookie.split(';')[0].split('=')[1]
            },
            method: 'GET',
            url: `http://106.13.18.48/hardInfos?user_id=${13}`,
        }).then(
            response => {
                if (response.data.code === 60201) {
                    alert('修改成功！')
                }
                else {
                    alert(response.data.data.msg)
                }
                // setSoftwares(response.data.data)
                console.log(response);
            },
            error => {
                console.log(error);
            }
        )
    }, [])





    return (
        <div className='Fingerprint'>
            <div className='Fingerprint-title'>指纹管理</div>
            <div className='Fingerprint-main'>
                <ul>
                    <li>指纹1<RightOutlined onClick={(e) => finger(e)} /></li>
                    <li>指纹2<RightOutlined onClick={() => finger()} /></li>
                    <li>指纹3<RightOutlined onClick={() => finger()} /></li>
                    <li>指纹4<RightOutlined onClick={() => finger()} /></li>
                </ul>
                <button className='Fingerprint-save'>保存</button ><button onClick={() => addfinger()} className='Fingerprint-add'>新增指纹</button>
            </div>

        </div>
    )
}
