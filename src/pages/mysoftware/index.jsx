import React from 'react'
import img from "./images/CATIA.jpg"
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
  const id = document.cookie.split(';')[2].split('=')[1]
  React.useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': document.cookie.split(';')[0].split('=')[1]
      },
      method: 'GET',
      url: `http://39.98.41.126:31104/licenses?user_id=${id}`,
    }).then(
      response => {

        if (response.data.code === 91101 && response.data.data) {
          const ids = [];
          response.data.data.map((x) => {
            ids.push(x.software_id);
          })
          axios({
            headers: {
              'Content-Type': 'application/json',
              'Authorization': document.cookie.split(';')[0].split('=')[1]
            },
            method: 'POST',
            url: `http://39.98.41.126:31104/softwares/ids`,
            data: JSON.stringify({
              ids
            })
          }).then(
            response => {
              if (response.data.code === 70401 && response.data.data) {
                setSoftwares(response.data.data)
              }
              else {
                alert(response.data.msg)
              }
              console.log(response)
            }
          )
        }
        else {
          alert(response.data.msg)
        }
        // setSoftwares(response.data.data)
        console.log(response, '许可证');
      },
    )
  }, [])
  return (
    // 主页内容部分
    <div className="mySoftware-content">
      <div className="mySoftware-content-head">我的软件</div>
      <div className="mySoftware-content-body">
        {softwares.map((element) => {
          return (<div key={element.software_id} onClick={() => showDetail(element)}>
            <div className="mySoftware-info">
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
