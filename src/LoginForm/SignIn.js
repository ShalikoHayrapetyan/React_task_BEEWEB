import "./LoginForm.css";
import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import { auth } from "../App";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignIn = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {})
      .catch((error) => {
        alert("Wrong Email or password");
        console.log(error);
      });
  };

  return (
    <div className="form">
      <p className="closeBtn" onClick={() => props.setSign(null)}> X </p>
      <Form
        {...layout}
        name="basic"
        size="large"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            className="button"
            type="primary"
            htmlType="submit"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
