import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

function AppForm() {
  const onFinish = (values) => {
    console.log("Recibiendo valores del formulario ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      size="large"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Por favor ingrese un Correo",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Correo Electrónico"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor ingrese Contraseña!",
          },
          {
            validator(_, value = "") {
              switch (!isNaN(value)) {
                case value.length <= 6:
                  return Promise.resolve();
                default:
                  return Promise.reject(new Error("Ingrese clave con 7 o más caracteres"));
              }
            },
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Olvidé mi contraseña
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Iniciar Sesión
        </Button>
        O <a href="/">Registrate ahora!</a>
      </Form.Item>
    </Form>
  );
}

export default AppForm;
