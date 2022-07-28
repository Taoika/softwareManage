import React from 'react'
import img from './images/CATIA.jpg'
import { useNavigate } from 'react-router-dom'

export default function PermissionContents() {
  const navigate = useNavigate();
  const turn = () => {
    navigate('/repairsoftware')
  }
  return (
    // 管理员主页内容部分
    <div className="permissionHome-content">
      <div className="permissionHome-content-head">信息管理</div>
      <div className="permissionHome-content-body">
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
      </div>
      <div className="permissionHome-content-head">信息管理</div>
      <div className="permissionHome-content-body">
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
      </div>
      <div className="permissionHome-content-head">信息管理</div>
      <div className="permissionHome-content-body">
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
            <img src={img} alt="CATIA" width={100} />
            <div className="text">
              <h2>CATIA</h2>
              <p>{'\u00A0'}研发设计<br /><br />这是最好的研发工具了 快快来加入我们吧！！！</p>
            </div>
          </div>
        </div>
        <div onClick={turn}>
          <div className="permissionHome-info">
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


