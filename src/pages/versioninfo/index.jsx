import { Table } from 'antd';
import React, { Component } from 'react'
import './index.css'

export default class VersionInfo extends Component {

  render() {
    // 在这里向后台发送请求获取某个软件的版本数据 并放入data中 data是一个存放着对象的数据
    let data = [
      {
        version_id: '1',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '2',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '3',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '4',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '5',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '6',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '7',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '12',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '8',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '9',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '10',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      },
      {
        version_id: '11',
        versionInf: '1234567',
        desc:'great',
        url: <a href='https://www.baidu.com/'>https://www.baidu.com/</a>,
      }
    ];

    for (const x of data){
      const key=x.version_id;
      x.key=key
    }

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
          <h1 className="versionInfo-softwareName">CAYIA P3 V5R21</h1>
          <div className="versionInfo-body">
              <Table columns={columns} dataSource={data} />
          </div>
      </div>
    )
  }
}
