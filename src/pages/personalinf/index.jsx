import React from 'react'
import { Button, Form, Input, Space, Tooltip, Typography } from 'antd';
import './index.css'
import { useNavigate } from 'react-router-dom'
import { Avatar } from 'antd';
export default function Personalinf() {
    const navigate = useNavigate();
    const repairpsw = () => {
        navigate('/personalcen/repairpsw')
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <div className='Personalinf-title'>个人信息</div>
            <div className='Personalinf-box'></div>
            <div className='Personalinf-avatar'> <Avatar
                src='https://img2.baidu.com/it/u=624516229,3817923780&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1659027600&t=60b7efb0db118457bb5645b0e7f8e816'
                size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 140,
                    xxl: 200,
                }}
            /></div>
            <div className='Personalinf-line'></div>
            <div className='Peosonalinf-main'>
                <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="Username">
                        <Space>
                            <Form.Item
                                name="username"
                                noStyle
                                rules={[
                                    {
                                        pattern: "^[\\u4e00-\\u9fa5a-zA-Z0-9]{6,12}$",
                                        message: '用户名必须为6-12位字母/数字/中文'
                                    },
                                    { required: true, message: 'Username is required' }]}
                            >
                                <Input style={{ width: 360 }} placeholder="Please input" />
                            </Form.Item>
                            <Tooltip title="可以修改您的用户名">
                                <Typography.Link href="#API">Need Help?</Typography.Link>
                            </Tooltip>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Space>
                            <Form.Item
                                name="phone_number"
                                noStyle
                                rules={[
                                    {
                                        pattern: "^((13[0-9])|(14[0|5|6|7|9])|(15[0-3])|(15[5-9])|(16[6|7])|(17[2|3|5|6|7|8])|(18[0-9])|(19[1|8|9]))\\d{8}$",
                                        message: '手机号应为11位数字'
                                    },
                                    { required: true, message: 'phone is required' }]}
                            >
                                <Input style={{ width: 360 }} placeholder="Please input" />
                            </Form.Item>
                            <Tooltip title="可以修改您的手机号">
                                <Typography.Link href="#API">Need Help?</Typography.Link>
                            </Tooltip>
                        </Space>
                    </Form.Item>
                    <Form.Item label="E-mail">
                        <Space>
                            <Form.Item
                                name="email"
                                noStyle
                                rules={[
                                    {
                                        pattern: "^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$",
                                        message: '邮箱格式错误,应为：-xxx@xxx'
                                    },
                                    { required: true, message: 'email is required' }
                                ]
                                }
                            >
                                <Input style={{ width: 360 }} placeholder="Please input" />
                            </Form.Item>
                            <Tooltip title="可以修改您的邮箱地址">
                                <Typography.Link href="#API">Need Help?</Typography.Link>
                            </Tooltip>
                        </Space>
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button style={{ width: '140px' }} type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
                <Button onClick={repairpsw} style={{ width: '140px' }} className='Peosonalinf-repairpsg' type="primary">修改密码</Button>
            </div>
        </div>
    )
}
