import { Table } from 'antd';
import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import './index.css'

export default function VersionInfo() {

    const state = useLocation().state;
    // console.log(state);

    const [versionInfs,setVersionInfs]=React.useState([]);
    React.useEffect(()=>{
      axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': document.cookie.split(';')[0].split('=')[1]
        },
        method: 'GET',
        url: `http://39.98.41.126:31104/versions/software_${state.id}`,
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