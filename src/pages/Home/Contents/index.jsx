import React from 'react'
import img from "./images/CATIA.jpg"
import { useNavigate } from 'react-router-dom'

export default function Contents() {
  const navigate = useNavigate()

  function showDetail() {
    navigate('/softwaredetail')
  }
  return (
    // 主页内容部分
    <div className="home-content">
      <div className="home-content-head"></div>
      <div className="home-content-body">
        <div onClick={() => showDetail()}>
          <div className="home-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={() => showDetail()}>
          <div className="home-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={() => showDetail()}>
          <div className="home-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={() => showDetail()}>
          <div className="home-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
