import React from 'react';
import './header.css'
import imgURL from '../../assets/images/common/back.png'


function Header(props) {
  let {title, share} = props.headerData
  return (
    <div className='header' >
    <div className="left-wrap" onClick={()=>window.history.back()} >
        <img src={imgURL} alt="" className="left-icon icon"/>
    </div>
    <div className="title-wrap">
  <div className="title">{title}</div>
    </div>
    <div className="right-wrap">
        <img src={require('../../assets/images/common/share.png')} alt="" className="right-icon icon" style={{display:`${share===1?'':'none'}`}} />
    </div>
 </div>
  )
}

export default Header
