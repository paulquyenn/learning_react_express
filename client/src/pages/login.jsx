import React, { useContext } from "react";
import { Button, Form, Input, notification } from "antd";
import { login } from "../utils/authApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/auth.context";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const onFinish = async (values) => {
    const { email, password } = values;

    const res = await login(email, password);

    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.accessToken);
      notification.success({
        message: "login user",
        description: "successfully",
      });
      setAuth({
        isAuthenticated: true,
        user: {
          name: res?.user?.name ?? "",
          email: res?.user?.email ?? "",
        },
      });
      navigate("/");
    } else {
      notification.error({
        message: "login user",
        description: res?.EM ?? "failed",
      });
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
