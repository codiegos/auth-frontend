import React from "react";
import "./index.less";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { onLogin } from "../../services/api/auth";

function AppForm() {

  const onFinish = async (values) => {
    await onLogin(values);
    
  };


  return (
    <Card title="Login">

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
              message: "Por favor ingrese su contraseña",
            },
            {
              validator(_, value = "") {
                switch (value !== undefined) {
                  case value.length > 6:
                    return Promise.resolve();
                  default:
                    return Promise.reject(
                      new Error("Su contraseña debe tener 7 o más caracteres")
                    );
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
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Iniciar Sesión
          </Button>
          O <a href="/">Registrate ahora!</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default AppForm;
