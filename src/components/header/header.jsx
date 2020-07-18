import React, { useState } from 'react';
import './header.css'
function Header() {
  
  return (
    <div className='header'>
    <div className="left-wrap">
        <img src={require('../../assets/images/common/back.png')} alt="" className="left-icon icon"/>
    </div>
    <div className="title-wrap">
<div className="title">油烟机清洗</div>
    </div>
    <div className="right-wrap">
        <img src={require('../../assets/images/common/share.png')} alt="" className="right-icon icon"/>
    </div>
 </div>
  )
}

export default Header