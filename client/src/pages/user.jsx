import { notification, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllUserApi } from "../utils/userApi";

export default function User() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchAllUser = async () => {
      const res = await getAllUserApi();

      if (!res.message) {
        setDataSource(res);
      } else {
        notification.error({
          message: "Unauthorized",
          description: res.message,
        });
      }
    };
    fetchAllUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <>
      <div style={{ padding: 30 }}>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          rowKey={"_id"}
        />
      </div>
    </>
  );
}
