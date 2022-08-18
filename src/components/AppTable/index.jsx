import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'branca.jesus@example.com',
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'branca.jesus@example.com',

  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'branca.jesus@example.com',

  },
];

function AppTable() {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default AppTable