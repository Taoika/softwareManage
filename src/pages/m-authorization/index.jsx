import { useNavigate, Outlet } from 'react-router-dom'
import img1 from './images/删除.png'
import img2 from './images/编辑.png'
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
const EditableContext = React.createContext(null);



const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <Outlet />
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};


const MVersionImf = () => {
  const navigate = useNavigate();
  const pushnewversion = () => {
    navigate('pushnewfangan')
  }
  const repairversion = () => {
    navigate('repairfangan')
  }
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      versionInf: '111111',
      time: '1年',
      function: '摆烂',
      number: '1个',
      price: '你猜',
      desc: '1111111sgrnsetntffffffffsss1111111sgrnsetntffffffffs及地方很',
    },
    {
      key: '1',
      versionInf: '22222',
      time: '2年',
      function: '摆烂',
      number: '3个',
      price: '呵呵',
      desc: '1111111sgrnsetntOEhhiperf',
    },
  ]);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
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
      title: '有效期',
      dataIndex: 'time',
      width: 300,
      textWrap: 'word-break',
      //   ellipsis: true,
      align: 'center',
    },
    {
      title: '可用功能',
      dataIndex: 'function',
      width: 300,
      textWrap: 'word-break',
      //   ellipsis: true,
      align: 'center',
    },
    {
      title: '可激活数量',
      dataIndex: 'number',
      width: 300,
      textWrap: 'word-break',
      //   ellipsis: true,
      align: 'center',
    },
    {
      title: '价格',
      dataIndex: 'price',
      width: 300,
      textWrap: 'word-break',
      //   ellipsis: true,
      align: 'center',
    },
    {
      title: <div>
        <br />
        {/* 发布新版本 */}
        <Button onClick={pushnewversion} type="primary" style={{ marginBottom: 16, }}>+发布新方案</Button>
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
