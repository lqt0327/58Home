import React, { useState, useEffect,useRef } from 'react';
import Swiper from '../../../assets/js/utils/swiper.js'
import '../../../assets/js/utils/swiper.css'
import '../../../assets/css/home/serve/detail.css'
function Detail() {
  const swiper = useRef(null);
  useEffect(()=>{
    // document.getElementsByClassName('.swiper-container').length
    new Swiper('.swiper-container', {
      // autoplay: true,//可选选项，自动滑动
      speed:300,
    })
  },[])
  return (
    <div>
   
       <div className="swiper-container" ref={swiper}>
        <div className="swiper-wrapper" >
            <div className="swiper-slide"><img src={require("../../../assets/images/home/serve/swiper/clear1.jpg")} alt="" className="slide-img"/></div>
            <div className="swiper-slide"><img src={require("../../../assets/images/home/serve/swiper/clear2.jpg")} alt="" className="slide-img"/></div>
            <div className="swiper-slide"><img src={require("../../../assets/images/home/serve/swiper/clear3.jpg")} alt="" className="slide-img"/></div>
            <div className="swiper-slide"><img src={require("../../../assets/images/home/serve/swiper/clear4.jpg")} alt="" className="slide-img"/></div>
            <div className="swiper-slide"><img src={require("../../../assets/images/home/serve/swiper/clear5.jpg")} alt="" className="slide-img"/></div>
        </div>
    </div>
    
    </div>
  )
}

export default Detail