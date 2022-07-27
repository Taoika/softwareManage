import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import React from 'react';
import './index.css'
import axios from 'axios'
const Namel = () => {
    const [error, setError] = React.useState(0);
    const onFinish = (values) => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            url: 'http://106.13.18.48/users',
            data: JSON.stringify({
                username: values.username,
                password: values.password
            })
        }).then(
            response => {
                const { data } = response;
                if (data.code === 60001) {
                    alert('注册成功！');
                    console.log(response);
                }
                else {
                    alert(data.msg);
                }
            },
            error => {
                setError(1)
            }
        )
        // console.log('Received values of form: ', values);
    };
    return (

        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        {
                            pattern: "^[\\u4e00-\\u9fa5a-zA-Z0-9]{6,12}$",
                            message: '用户名必须为6-12位字母/数字/中文'
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        {
                            pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
                            message: '密码必须为6-20个字母、数字'

                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="javascript">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or
                </Form.Item>
            </Form>
            <div>{error ? <Alert closable
                className='namel-alert' message="连接服务器失败！" type="error" showIcon /> : ''}</div>

        </div>

    );
};

export default Namel;