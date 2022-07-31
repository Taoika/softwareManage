// 引入Home组件
import 'antd/dist/antd.min.css'
import React from 'react';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Head from './component/head';
import axios from 'axios'
axios.defaults.withCredentials = true

export default function App() {
    const element = useRoutes(routes)
    return (
        <div>
            <Head />
            {element}
        </div>
    )
}

