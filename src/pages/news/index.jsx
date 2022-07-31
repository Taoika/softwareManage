import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './index.css'
import { List } from 'antd';
import axios from 'axios'
import moment from 'moment'


// const data = [
//     {
//         title: <div className='News-name'>idea发布了1.0.0.1</div>,
//     },
//     {
//         title: <div className='News-name'>idea发布了1.0.0.1</div>,

//     },
//     {
//         title: <div className='News-name'>idea发布了1.0.0.1</div>,

//     },
//     {
//         title: <div className='News-name'>idea发布了1.0.0.1</div>,

//     },
// ];

export default function News() {

    const navigate = useNavigate()

    // 设置状态保存数据 向后台获取数据
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': document.cookie.split(';')[0].split('=')[1]
        },
        method: 'GET',
        url: 'http://39.98.41.126:31104/notices',

      }).then(
        response => {
          if (response.data.code === 93401) {
            setData(response.data.data)
          }
          else {
            alert(response.data.msg)
            navigate('/dlzc');
          }
        },
        error => {
          console.log(error);
        }
      )
    }, [])

    // 将数据保存在element参数中 作为状态传送给softwaredetail
    function showDetail(element) {
      console.log(element);
      navigate('/softwaredetail', {
        state: {
          element
        }
      })
    }

    return (
        <div><strong className='News-title'>消息列表</strong>
            <List
                className='News'
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item className='News-item'>                 
                        <List.Item.Meta         
                            avatar={<img alt='' style={{ width: '100px', height: '100px' }} src="https://img1.baidu.com/it/u=1279714539,3632980328&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500" />}
                            description={
                            <div onClick={()=>showDetail(item)}>
                                <div>{item.content}</div>
                                <div className='News-time'>{moment(item.time).format('YYYY-MM-DD HH:mm:ss')}</div>
                            </div>
                        }
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
