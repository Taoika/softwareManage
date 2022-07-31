import React from 'react'
import img from "../images/CATIA.jpg"
import { useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios'


export default function All() {
  const navigate = useNavigate()
  function showDetail(element) {
    navigate('/softwaredetail', {
      state: {
        element
      }
    })
  }
  //发请求
  const [softwares, setSoftwares] = React.useState([]);
  React.useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': document.cookie.split(';')[0].split('=')[1]
      },
      method: 'GET',
      url: 'http://39.98.41.126:31104/softwares/group_2',
    }).then(
      response => {
        setSoftwares(response.data.data)
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
        {softwares.map((element) => {
          return (<div key={element.software_id} onClick={() => showDetail(element)}>
            <div className="home-info">
              <img src={img} alt="CATIA" width={100} />
              <div className="text">
                <h2>{element.software_name}</h2>
                <p>{'\u00A0'}{element.group_id}<br /><br />{element.desc} 快快来加入我们吧！！！</p>
              </div>
            </div>
          </div>)

        })}
      </div>
    </div>


  )




}
