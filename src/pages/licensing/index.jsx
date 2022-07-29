
import React from 'react';
import './index.css'
import { Button, Form, Select } from 'antd';
const { Option } = Select;
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

export default function Licensing() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className='Licensing'>
            <div className='Licensing-title'>许可证</div>
            <div className='Licensing-name'>软件名: <strong>CATIA P3 V5R21</strong> </div>
            <div className='Licensing-version'>版本号:<strong>XXXXXXXXXX</strong></div>
            <Form
                {...layout} form={form}
                onFinish={onFinish}
                name='licensing'
            >
                {/* 有效期 */}
                <Form.Item
                    className='Licensing-time'
                    name="time"
                    label="有效期"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="选择许可有效期"
                        allowClear
                    >
                        <Option value="1">1年</Option>
                        <Option value="2">2年</Option>
                        <Option value="3">3年</Option>
                    </Select>
                </Form.Item>
                {/* 可用功能 */}
                <Form.Item
                    className='Licensing-function'
                    name="function"
                    label="可用功能"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="选择许可类型"
                        allowClear
                    >
                        <Option value="社区">社区</Option>
                        <Option value="公司">公司</Option>
                        <Option value="专业">专业</Option>
                    </Select>
                </Form.Item>
                {/* 激活数量 */}
                <Form.Item
                    className='Licensing-number'
                    name="number"
                    label="激活数量"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="选择激活数量"
                        allowClear
                    >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                    </Select>
                </Form.Item>
                {/* 提交 */}
                <Form.Item
                    className='Licensing-submit'>
                    <Button style={{ width: '200px' }} type="primary" htmlType="submit">
                        确认购买
                    </Button>
                </Form.Item>
            </Form>
            {/* 价格 */}
            <div className='Licensing-price' >价格：<div className='Licensing-yuan'>88</div>元</div>

        </div>
    )
}
