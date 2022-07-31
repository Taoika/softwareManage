import React from 'react'
import img from "../images/CATIA.jpg"
import { useNavigate } from 'react-router-dom'
import '../all/index.css'
import axios from 'axios'
axios.defaults.withCredentials = true


export default function All() {

  const navigate = useNavigate()

  function showDetail(element) {
    // console.log(element);
    navigate('/softwaredetail', {
      state: {
        element
      }
    })
  }
  // 发送请求 请求软件信息
  const [softwares, setSoftwares] = React.useState([]);
  React.useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': document.cookie.split(';')[0].split('=')[1]
      },
      method: 'GET',
      url: 'http://39.98.41.126:31104/softwares',
      
    }).then(
      response => {
        if (response.data.code === 70401) {
          setSoftwares(response.data.data)
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

  return (
    // 主页内容部分
    <div className="home-content">
      <div className="home-content-head"></div>
      <div className="home-content-body">
        {
          softwares.map((element) => {
            return (<div key={element.software_id} onClick={() => showDetail(element)}>
              <div className="home-info">
                <img src={img} alt="CATIA" width={100} />
                <div className="text">
                  <h2>{element.software_name}</h2>
                  <p>{'\u00A0'}{element.group_id}<br /><br />{element.desc} 快快来加入我们吧！！！</p>
                </div>
              </div>
            </div>)

          })
        }
      </div>
    </div>


  )




}
