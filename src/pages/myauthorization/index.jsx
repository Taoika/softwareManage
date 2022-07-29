import { Table } from 'antd';
import React from 'react';
import './index.css'
const columns = [
    {
        title: '主机名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];
const data = [
    {
        key: 1,
        name: 'John Brown',
        description: <div>你好<div>你好</div></div>,
    },
    {
        key: 2,
        name: 'Jim Green',

        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',

        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
];

const Myauthorization = () => (
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
            dataSource={data}
        /></div>

);

export default Myauthorization;
