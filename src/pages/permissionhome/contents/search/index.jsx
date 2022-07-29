import React from 'react'
import img from "../images/CATIA.jpg"
import { useNavigate, useLocation } from 'react-router-dom'
import './index.css'
import axios from 'axios'


export default function All() {
  const state = useLocation().state
  const [softwares, setSoftwares] = React.useState([]);
  const [change, setChange] = React.useState([state.softwarename]);

  const navigate = useNavigate()
  function showDetail(element) {
    navigate('/repairsoftware', {
      state: {
        element
      }
    })
  }
  //发请求
  if (change !== state.softwarename) {
    setChange(state.softwarename)
  }


  React.useEffect(() => {

    axios({
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      url: `http://106.13.18.48/softwares/search?name=${state.softwarename}&isVague=true`,
    }).then(
      response => {
        setSoftwares(response.data.data)
      },
      error => {
        console.log(error);
      }
    )
  }, [change])
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
