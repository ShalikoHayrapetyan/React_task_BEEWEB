
import './LoginForm.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { auth } from '../App';
import { useState } from 'react';
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

const SignUp = (props) => {
    let [email ,setEmail]=useState("")
    let [password ,setPassword]=useState("")

    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email, password )
        .then((userCredential) => {
            console.log("Succes")
        })
        .catch((err) => {
          console.log(err)
        });
    };
    

    

  return (
      <div   className="form">
        <p className="closeBtn" onClick={()=>props.setSign(null)}>X</p>

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
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      </Form.Item>
      {/* <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="Password"  value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>

        <Button className="button" type="primary" htmlType="submit" onClick={handleSignUp}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


export default SignUp;
