import React from 'react'
import { Image } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css'

export default function Softwaremsg() {

    const navigate = useNavigate()

    // 点击下载
    const handle = () => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            url: 'http://39.98.41.126:31104/files/download',
            data: JSON.stringify({ user_id: 8 })
            //  responseType: 'blob'  // 设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
        }).then(
            res => {
                console.log(res);
            }
        )
    }
    const state = useLocation().state;
    // console.log('msg', state);
    const size = 'large';

    // if(state.id!==undefined){
    //   localStorage.setItem('softwareManage-software_id',state.id);
    // }
    // let software_id = localStorage.getItem('softwareManage-software_id');

    // 版本id 版本信息 软件id
    const [versionId, setVersionId] = React.useState([]);
    const [versionInf, setVersionInf] = React.useState([]);
    const [softwareId, setSoftwareId] = React.useState([]);
    const [desc, setDesc] = React.useState([]);
    const [groupId, setGroupId] = React.useState([]);
    const [name, setName] = React.useState([]);

    // 获取软件版本信息
    React.useEffect(() => {
    axios({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': document.cookie.split(';')[0].split('=')[1]
        },
        method: 'GET',
        url: `http://39.98.41.126:31104/versions/latest_${state.id}`,
        
      }).then(
        response => {
          if (response.data.code === 80401) {
            // console.log(response.data.data);
            setVersionInf(response.data.data.versionInf)
            setVersionId(response.data.data.version_id);
            setSoftwareId(response.data.data.software_id);

          }
          else {
            alert(response.data.msg)
          }
        },
        error => {
          console.log(error);
        }
      )
    }, [])


    // 获取软件信息
    React.useEffect(() => {
      console.log(document.cookie.split(';')[0].split('=')[1]);
      axios({
          headers: {
            'Content-Type': 'application/json',
            'Authorization': document.cookie.split(';')[0].split('=')[1]
          },
          method: 'GET',
          url: `http://39.98.41.126:31104/softwares/${state.id}`,
          
        }).then(
          response => {
            if (response.data.code === 70401&&response.data.data) {
              // console.log(response.data.data);
              setDesc(response.data.data.desc)
              setGroupId(response.data.data.group_id)
              setName(response.data.data.software_name)
            }
            else {
              alert(response.data.msg)
            }
            // console.log(response.data);
          },
          error => {
            console.log(error);
          }
        )
      }, [])

    // 点击下载
    function downloadFile(){
        console.log(softwareId);
        console.log(versionId);
        // axios({
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     method:'GET',
        //     url:'http://39.98.41.126:31104/files/downloadFile',
        //     params: {
        //         software_id:7,
        //         version_id:8,
        //         //type:"user",
        //         //id:8
        //     },
        //     responseType: 'blob'  // 设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
        // })
        // .then(
        //     (response)=>{
        //         console.log(response.data);
        //         const blob = new Blob([response.data]);
        //         const fileName = 'try';
        //         const linkNode = document.createElement('a');
        //         linkNode.download = fileName; //a标签的download属性规定下载文件的名称
        //         linkNode.style.display = 'none';
        //         linkNode.href = URL.createObjectURL(blob); //生成一个Blob URL
        //         document.body.appendChild(linkNode);
        //         linkNode.click();  //模拟在按钮上的一次鼠标单击
        //         URL.revokeObjectURL(linkNode.href); // 释放URL 对象
        //         document.body.removeChild(linkNode);
        //     },
        //     (error)=>{
        //         console.log(error);
        //     })
        axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': document.cookie.split(';')[0].split('=')[1]
            },
            method: 'GET',
            url: 'http://39.98.41.126:31104/files/download',
            params: {
                software_id:softwareId,
                version_id:versionId,
                },
            responseType: 'blob'  // 设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
          }).then(
            response => {
            //   if (response.data.code === 70401) {
            //     setSoftwares(response.data.data)
            //   }
            //   else {
            //     alert(response.data.msg)
            //     navigate('/dlzc');
            //   }
                console.log(response.data);
                const blob = new Blob([response.data]);
                const fileName = 'try';
                const linkNode = document.createElement('a');
                linkNode.download = fileName; //a标签的download属性规定下载文件的名称
                linkNode.style.display = 'none';
                linkNode.href = URL.createObjectURL(blob); //生成一个Blob URL
                document.body.appendChild(linkNode);
                linkNode.click();  //模拟在按钮上的一次鼠标单击
                URL.revokeObjectURL(linkNode.href); // 释放URL 对象
                document.body.removeChild(linkNode);
            },
            error => {
              console.log(error);
            }
          )
        }

    return (
        <div>
            <div className='Softwaremsg-card'>
                <Image
                    width='18%'
                    height='93%'
                    src="https://img2.baidu.com/it/u=509743012,3188823692&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
                    fallback="data:image/png;base64,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"
                />
                <div className='Softwaremsg-name'>{name}</div>
                <div className='Softwaremsg-type'>{groupId}</div>
                <div className='Softwaremsg-size'>大小 : 3.12GB</div>
                <div className='Softwaremsg-version'>版本 : {versionInf}</div>
                <Button className='Softwaremsg-download' onClick={downloadFile} type="primary" icon={<DownloadOutlined />} size={size}>
                    Download
                </Button>
                <div className='Softwaremsg-summary'>概述</div>
                <div className='Softwaremsg-content'>{desc}</div>

            </div>
        </div>
    )
}

