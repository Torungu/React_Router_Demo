import React from "react";
import { Space, Table, Tag } from "antd";
import ButtonCustom from "./ButtonCustom";
// const table ({data,handelS})
const TableNV = ({ data, handleDeleteNV }) => {
  const columns = [
    //   {
    //     title: "MSNV",
    //     dataIndex: "msnv",
    //     key: "msnv",
    //     render: (text, record, index) => (
    //       <button className="bg-red-500">{text}</button>
    //     ),
    //   },
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
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Date of Birth",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Sex",
      key: "sex",
      dataIndex: "sex",
      render: (text, record, index) => {
        return (
          <Tag color={text == "Male" ? "magenta" : "geekblue"}>{text}</Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return (
          <>
            <ButtonCustom
              content={"Delete"}
              bgColor="bg-red-500"
              onClick={() => handleDeleteNV(record.msnv)}
            />
            <ButtonCustom content={"Update"} bgColor="bg-purple-500" />
          </>
        );
      },
    },
  ];
  return (
    <div className="mt-10">
      <Table
        columns={columns}
        dataSource={data}
        handleDeleteNV={handleDeleteNV}
      />
    </div>
  );
};

export default TableNV;
