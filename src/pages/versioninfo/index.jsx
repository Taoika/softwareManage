import { Table } from 'antd';
import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import './index.css'

export default function VersionInfo() {

    // 在这里向后台发送请求获取某个软件的版本数据 并放入data中 data是一个存放着对象的数据
    let data = [
      {
        version_id: '1',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '2',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '3',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '4',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '5',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '6',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '7',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '12',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '8',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '9',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '10',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '11',
        versionInf: '1234567',
        desc: 'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      }
    ];

    const state = useLocation().state;
    // console.log(state);

    const [versionInfs,setVersionInfs]=React.useState([]);
    React.useEffect(()=>{
      axios({
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
        url: `http://106.13.18.48/versions/software_${state.id}`,
      }).then(
        response => {
          // console.log(response.data.data);
            setVersionInfs(response.data.data);
        },
        error => {
          console.log(error);
        }
      )
    },[]);

    

    for (const x of versionInfs) {
      const key = x.version_id;
      x.key = key
    }

    // console.log(versionInfs);

    const columns = [
      {
        title: '版本号',
        dataIndex: 'versionInf',
        key: 'versionInf',
        responsive: ['lg'],
      },
      {
        title: '版本描述',
        dataIndex: 'desc',
        key: 'desc',
        responsive: ['lg'],
      },
      {
        title: '下载地址',
        dataIndex: 'url',
        key: 'url',
        responsive: ['lg'],
      },
    ];

    return (
      <div className="versionInfo">
        <h1 className="versionInfo-softwareName">{state.name}</h1>
        <div className="versionInfo-body">
          <Table columns={columns} dataSource={versionInfs} />
        </div>
      </div>
    )
  }