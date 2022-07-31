import React from 'react'
import './index.css'
import { List } from 'antd';
const data = [
    {
        title: <div className='News-name'>idea发布了1.0.0.1</div>,
    },
    {
        title: <div className='News-name'>idea发布了1.0.0.1</div>,

    },
    {
        title: <div className='News-name'>idea发布了1.0.0.1</div>,

    },
    {
        title: <div className='News-name'>idea发布了1.0.0.1</div>,

    },
];
export default function News() {
    return (
        <div><strong className='News-title'>消息列表</strong>
            <List
                className='News'
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item className='News-item'>
                        <List.Item.Meta
                            avatar={<img alt='' style={{ width: '100px', height: '100px' }} src="https://img1.baidu.com/it/u=1279714539,3632980328&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500" />}
                            title={<a href="javascript:;">{item.title}</a>}
                            description={<div>发布了最新版本<div className='News-time'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:31:31 2022-07-23</div></div>}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
