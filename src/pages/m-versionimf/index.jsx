import { useNavigate, useLocation } from 'react-router-dom'
import img1 from './images/删除.png'
import img2 from './images/编辑.png'
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
const EditableContext = React.createContext(null);

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


const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};


const MVersionImf = () => {
  const navigate = useNavigate();
  //获取版本信息
  const state = useLocation().state;
  const { software_id } = state
  console.log(state, 'sstatestatestate');
  const [dataSource, setDataSource] = React.useState([])
  React.useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
      },
      method: 'GET',
      url: `http://106.13.18.48/versions/software_${Number.parseInt(software_id)}`,
    }).then(
      response => {
        if (response.data.code === 80401 && response.data.data) {
          setDataSource(response.data.data.map((x, i) => {
            return ({
              key: x.software_id,
              versionInf: x.versionInf,
              msg: x.url,
              desc: <div>{x.desc}
                <div className='Mversionimf'>
                  <a onClick={() => repairversion(x.version_id)}><img src={img2} alt="edit" width='20px' /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Popconfirm title="确认删除吗？" onConfirm={() => handleDelete(x.version_id)}>
                    <a><img src={img1} alt="delete" width='20px' /></a>
                  </Popconfirm>
                </div>
              </div>,
            })
          }))
        }
        else {
          alert(response.data.msg)
        }
        console.log(response, '看看传了什么');
      },
      error => {
        console.log(error);
      }
    )
  }, [])



  const pushnewversion = () => {
    navigate('/repairsoftware/pushnewversion', {
      state: {
        software_id: Number.parseInt(software_id)
      }
    })
  }
  const repairversion = (e) => {
    navigate('/repairsoftware/repairversion', {
      state: {
        version_id: e
      }
    })
  }


  // ([
  //   {
  //     key: {msg.software_id},
  //     versionInf: {msg.software_id},
  //     msg: '阿库娅阿库娅阿库娅阿库娅阿库娅',
  //     desc: '1111111sgrnsetntffffffffsss1111111sgrnsetntffffffffs及地方很',
  //   },
  //   {
  //     key: '1',
  //     versionInf: '22222',
  //     msg: '哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷哇酷',
  //     desc: '1111111sgrnsetntOEhhiperf',
  //   },
  // ]);

  const handleDelete = (id) => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('header')
      },
      method: 'DELETE',
      url: `http://106.13.18.48/versions/${id}`,
    }).then(
      res => {
        if (res.data.code === 80301) {
          console.log(res);
          alert('删除成功！')
        }
        else {
          alert(res.data.msg)
        }
        console.log(res);
      }
    )
  };

  const defaultColumns = [
    {
      title: '版本号',
      dataIndex: 'versionInf',
      width: 300,
      editable: true,
      align: 'center',
    },
    {
      title: '下载地址',
      dataIndex: 'msg',
      width: 600,
      textWrap: 'word-break',
      //   ellipsis: true,
      align: 'center',
    },
    {
      title: '版本描述',
      dataIndex: 'desc',
      width: 600,
      textWrap: 'word-break',
      //   ellipsis: true,
      align: 'center',
    },
    {
      title: <div>
        <br />
        {/* 发布新版本 */}
        <Button onClick={pushnewversion} type="primary" style={{ marginBottom: 16, }}>+发布新版本</Button>
      </div>,
      dataIndex: 'add',
      width: 250,
      align: 'center',
      // render: (_, record) =>
      //   dataSource.length >= 1 ? (

      //   ) : null,
    },
  ];

  const handleSave = (row) => {
    // const newData = [...dataSource];
    // const index = newData.findIndex((item) => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, { ...item, ...row });
    // setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default MVersionImf;
