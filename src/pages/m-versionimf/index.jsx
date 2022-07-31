import moment from 'moment'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import img1 from './images/删除.png'
import img2 from './images/编辑.png'
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
const EditableContext = React.createContext(null);



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

  const pushnewversion = () => {
    navigate('/repairsoftware/pushnewversion')
  }

  const repairversion = () => {
    navigate('/repairsoftware/repairversion')
  }

  const state = useLocation().state;
  
  // 发送请求 请求软件版本信息
  const [versionInf, setVersionInf] = React.useState([]);
    React.useEffect(() => {
      axios({
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
        url: `http://39.98.41.126:31104/versions/latest_${state.id}`,
      }).then(
        response => {
          console.log(response.data.data.versionInf);
            setVersionInf(response.data.data.versionInf);
        },
        error => {
          console.log(error);
        }
      )
    }, [])

  // 发送请求获取版本信息
  const [dataSource, setDataSource]=React.useState([]);
    React.useEffect(()=>{
      axios({
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
        url: `http://39.98.41.126:31104/versions/software_${state.software_id}`,
      }).then(
        response => {
          console.log(response.data.data);
          setDataSource(response.data.data);
        },
        error => {
          console.log(error);
        }
      )
    },[]);

    // 将返回数据进行整理 以便存入列表中
  for(const v of dataSource){
      const key=v.version_id;
      const versionInf=v.versionInf;
      const msg=moment(v.release_date).format('YYYY-MM-DD');
      const desc=v.desc;
      v.key=key;
      v.versionInf=versionInf;
      v.msg=msg;
      v.desc=desc;
    }


    // 处理删除请求
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  // 列表配置
  const defaultColumns = [
    {
      title: '版本号',
      dataIndex: 'versionInf',
      width: 300,
      editable: true,
      align: 'center',
    },
    {
      title: '发行时间',
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
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <div>
            {/* 编辑 */}
            <a onClick={() => repairversion()}><img src={img2} alt="edit" width='20px' /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Popconfirm title="确认删除吗？" onConfirm={() => handleDelete(record.key)}>
              <a><img src={img1} alt="delete" width='20px' /></a>
            </Popconfirm>
          </div>
        ) : null,
    },
  ];

  // 处理保存请求
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
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

    // 在这里返回列表
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
