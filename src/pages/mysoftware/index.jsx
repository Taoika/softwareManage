import React from 'react'
import img from "./images/CATIA.jpg"
import { useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios'

//读Cookie
function getCookie(cookieName) {
  const strCookie = document.cookie
  const cookieList = strCookie.split(';')

  for (let i = 0; i < cookieList.length; i++) {
    const arr = cookieList[i].split('=')
    if (cookieName === arr[0].trim()) {
      return arr[1]
    }
  }

  return ''
}
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
        'Authorization': getCookie('header')
      },
      method: 'GET',
      url: `http:///106.13.18.48/licenses?user_id=${Number.parseInt(getCookie('user'))}`,
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
              'Authorization': getCookie('header')
            },
            method: 'POST',
            url: `http:///106.13.18.48/softwares/ids`,
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
