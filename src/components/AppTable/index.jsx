import { Table } from "antd";
import React from "react";

function AppTable({ data }) {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <Table columns={columns} dataSource={data} rowKey="id" pagination={false} />
  );
}

export default AppTable;
