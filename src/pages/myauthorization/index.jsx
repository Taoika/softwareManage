import { Table } from 'antd';
import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//读Cookie
function getCookie(cookieName) {
    const strCookie = document.cookie
    const cookieList = strCookie.split(';')

    for (let i = 0; i < cookieList.length; i++) {
        const arr = cookieList[i].split('=')
        if (cookieName === arr[0].trim()) {
            return arr[1]
        }
    }

    return ''
}
const data = [
    {
        key: 1,
        name: 'John Brown',
        description: <div>你好<div>你好</div><div>你好</div></div>,
    },
    {
        key: 2,
        name: 'Jim Green',

        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
];

export default function Myauthorization() {

    const navigate = useNavigate();
    const [xuke, setXuke] = React.useState([]);
    const id = Number.parseInt(getCookie('user'))
    React.useEffect(() => {
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('header')
            },
            method: 'GET',
            url: `http://106.13.18.48/licenses?user_id=${id}`,
        }).then(
            response => {
                if (response.data.code === 91101 && response.data.data) {
                    const xukeArr = response.data.data;
                    const ids = [];
                    const myxuke = [];
                    response.data.data.map((x, i) => {
                        axios({
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': getCookie('header')
                            },
                            method: 'GET',
                            url: `http://106.13.18.48/codes/${x.license_id}`,
                        }).then(
                            res => {
                                if (res.data.code === 94201) {
                                    myxuke.push({
                                        key: i,
                                        description:
                                            <div className='Myauthorization-limit'>{
                                                res.data.data.map((x, i) => { return (<div>授权码{i + 1}：{x.code}</div>) })
                                            }
                                            </div>
                                    })
                                }
                                console.log(res, '每个许可的授权信息');
                            }
                        )
                        ids.push(x.software_id);
                    })
                    axios({
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': getCookie('header')
                        },
                        method: 'POST',
                        url: `http://106.13.18.48/softwares/ids`,
                        data: JSON.stringify({
                            ids
                        })
                    }).then(
                        response => {
                            if (response.data.code === 70401 && response.data.data) {
                                response.data.data.map((x, i) => {
                                    if (myxuke[i]) {
                                        myxuke[i].name = <div>{x.software_name}<div onClick={() => Add(xukeArr[i], x.software_name)} className='Myauthorization-addshoquuan'>添加授权</div></div>;

                                    }
                                })
                                setXuke(myxuke)
                                console.log(myxuke, 'myxuke');
                            }
                            else {
                                alert(response.data.msg)
                            }
                            console.log(response, '软件详情能传啥')
                        }
                    )
                }
                else {
                    alert(response.data.msg)
                }
                console.log(response, '许可证');
            },
        )
    }, [])




    const Add = (e, softwarename) => {
        navigate('/personalcen/xuke', {
            state: {
                xuke: e,
                softwarename
            }
        })
    }
    const columns = [
        {
            title: '许可证（软件名）',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '添加授权',
            dataIndex: '',
            key: 'x',
            // render: () => <a onClick={(e) => Add(e)}>Add</a>,
        },
    ]

    return (
        <div className='Myauthorization'>
            <div className='Myauthorization-title'>我的授权</div>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <p
                            style={{
                                margin: 0,
                            }}
                        >
                            {record.description}
                        </p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={xuke}
            /></div>
    )
}
