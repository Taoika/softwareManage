import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    RightOutlined
} from '@ant-design/icons';
export default function Fingerprint() {
    const [msg, setMsg] = React.useState([]);
    const navigate = useNavigate();
    const finger = (x) => {
        navigate('/personalcen/finger', {
            state: {
                x
            }
        })
    }
    const addfinger = () => {
        navigate('/personalcen/addfinger', {
            state: {

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
            url: `http://39.98.41.126:31104/hardInfos?user_id=${id}`,
        }).then(
            response => {
                if (response.data.code === 92201 && response.data.data) {
                    setMsg(response.data.data)
                }
                else {
                    alert(response.data.msg)
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
                    {
                        msg.map((x, i) => {
                            return (<li>指纹{i + 1}<RightOutlined onClick={() => finger(x)} /></li>)
                        })
                    }
                </ul>
                <button onClick={() => addfinger()} className='Fingerprint-add'>新增指纹</button>
            </div>

        </div>
    )
}
