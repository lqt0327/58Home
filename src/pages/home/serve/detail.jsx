import React, { useState, useEffect } from 'react';
import Swiper from '../../../assets/js/utils/swiper.js'
import '../../../assets/js/utils/swiper.css'
import '../../../assets/css/home/serve/detail.css'
import Header from '../../../components/header/header'
import datas from './detail.json'
import { useRef } from 'react';
let standardsData = [
  {title:'油烟机免拆洗',
   price:'￥149/台'},
  {title:'油烟机拆洗',
   price:'￥180/台'},
  {title:'油烟机+灶台拆洗',
   price:'￥220/台'},
]
function Detail() {
  // 是否选择伪类
  let [isSelected,setSelected] = useState(1)
  // 三个锚链接
  let goodsBegin = useRef(null)
  let goodsDetail = useRef(null)
  let goodsRecommend = useRef(null)

  // swiper 必备
  useEffect(()=>{
   let s =  new Swiper('.swiper-container', {
      autoplay:1000,
      pagination: '.swiper-pagination',
      loop : true,
    })
    // function Scroll(){
    //   console.log(goodsBegin.current.getBoundingClientRect().top)
    // }
    // goodsBegin.current.addEventListener('touchmove',Scroll)
  },[])
  let scrollToAnchor = (anchorName) => {
    if (anchorName) {
        window.scrollTo({
          top: anchorName.current.offsetTop-20,
          behavior: 'smooth'
        });
    }
}
  return (
   <div className='bigwrap'>
     <div className="wrap"></div>
      <Header />
   <div className='toscroll'> 
   <div className='content' ref={goodsBegin}>
     <div className="nav">
       <div className={`goods nav-bar ${isSelected===1?'selected':''}`} onTouchStart={()=>{setSelected(isSelected=1); scrollToAnchor(goodsBegin)}}>商品</div>
       <div className={`details nav-bar ${isSelected===2?'selected':''}`} onTouchStart={()=>  {setSelected(isSelected=2); scrollToAnchor(goodsDetail)}}>详情</div>
       <div className={`recommend nav-bar ${isSelected===3?'selected':''}`} onTouchStart={()=>{setSelected(isSelected=3);scrollToAnchor(goodsRecommend)}}>推荐</div>
     </div>
      <div className="swiper-container" >
       <div className="swiper-wrapper" >
           <div className="swiper-slide"><img alt='swiper1' src={require("../../../assets/images/home/serve/swiper/clear1.jpg")}  className="slide-img"/></div>
           <div className="swiper-slide"><img alt='swiper2' src={require("../../../assets/images/home/serve/swiper/clear2.jpg")}  className="slide-img"/></div>
           <div className="swiper-slide"><img alt='swiper3' src={require("../../../assets/images/home/serve/swiper/clear3.jpg")}  className="slide-img"/></div>
           <div className="swiper-slide"><img alt='swiper4' src={require("../../../assets/images/home/serve/swiper/clear4.jpg")}  className="slide-img"/></div>
           <div className="swiper-slide"><img alt='swiper5' src={require("../../../assets/images/home/serve/swiper/clear5.jpg")}  className="slide-img"/></div>
       </div>
       <div className="swiper-pagination"></div>
   </div>
   <div className="center-price" >
   <div className="price-wrap">
     ￥<span className='price'>149.00</span>/台起
   </div>
   <div className="title-wrap">
     <p className='title'>油烟机清洗</p>
     <p className='title-func'>深度去油污 140摄氏度高温蒸汽消毒杀菌</p>
     <p className='title-time'>
       <span className='title-time-item'><img src={require("../../../assets/images/common/right.png")} className="title-right-icon"/>随时预约</span>
       <span className='title-time-item'><img src={require("../../../assets/images/common/right.png")} className="title-right-icon"/>专业清洗</span>
       <span className='title-time-item'><img src={require("../../../assets/images/common/right.png")} className="title-right-icon"/>阿姨专业培训</span></p>
   </div>
   </div>
   <div className="discount-wrap" >
     <div className="discount" >优惠</div>
     <div className="discount-title">8.8折无门槛优惠券</div>
     <div className="discount-input-wrap"><input type="button" className="discount-input"/>立即领取</div>
   </div>
   <div className="adress-wrap">
     <div className="adress-item">
       <div className='adress-item-title'>地址</div>
       <div className='adress-item-input-wrap'><input type="text" placeholder='请选择服务地址' className='adress-item-input' /></div>
       <div className='adress-item-logo'><img src={require("../../../assets/images/common/goto.png")} className="adress-img"/></div>
     </div>
     <div className="adress-item">
       <div className='adress-item-title'>规格</div>
       <div className='adress-item-input-wrap'><input type="text" placeholder='请选择服务规格' className='adress-item-input' /></div>
       <div className='adress-item-logo'><img src={require("../../../assets/images/common/goto.png")} className="adress-img"/></div>
     </div>
     <div className="adress-item">
       <div className='adress-item-title'>时间</div>
       <div className='adress-item-input-wrap'><input type="text" placeholder='请选择服务时间' className='adress-item-input' /></div>
       <div className='adress-item-logo'><img src={require("../../../assets/images/common/goto.png")} className="adress-img"/></div>
     </div>
   </div>
   <div className="detail" id='abc' ref={goodsDetail}>
     <div className="detail-header"  >
     <div className="detail-header-text"   >详情</div>
       <div className="detail-header-line"></div>
     </div>
     <div className="detail-img-wrap" >
        <img className='detail-img' src={require("../../../assets/images/home/serve/recommend/re1.jpg")} alt=""/>
        <img className='detail-img' src={require("../../../assets/images/home/serve/recommend/re2.jpg")} alt=""/>
        <img className='detail-img' src={require("../../../assets/images/home/serve/recommend/re3.jpg")} alt=""/>
      </div>
   </div>
   <div className="recommends" ref={goodsRecommend}>
   <div className="detail-header">
     <div className="detail-header-text">推荐</div>
       <div className="detail-header-line"></div>
     </div>
    <div className="recommends-content">
      <ul className='recommends-item-wrap'>
        {datas.map((item,i)=>{
        return (<li className='recommends-item' key={i}>
        <img className='recommends-item-img' src={require('../../../assets/images/home/serve/recommend/wash3.jpg')} alt=""/>
      <div className='recommends-item-title'>{item.title}</div>
      <div className='recommends-item-serve'>{item.serve}</div>
      <div className='recommends-item-price'>{item.price}</div>
      </li>)
        })}

      </ul>
    </div>
   </div>
   </div>
  
    <div className="bottom">
      <div className="bottom-left">
        <img src={require('../../../assets/images/home/serve/recommend/cstSv.png')} alt="" className="bottom-left-img"/>
        <div className="bottom-left-text">客服</div>
      </div>
      <div className="bottom-right">
        <input type="button" className="bottom-right-btn" value='立即购买'/>
      </div>
    </div>

  </div>
  <div className="standards-wrap">
    <div className="standards-header">
      <div className="standards-header-title">请选择服务规格</div>
      <div className="standards-header-logo">
        <img className='standards-header-pic' src={require('../../../assets/images/common/cancel.png')} alt=""/>
      </div>
    </div>
    <div className="standards-body-wrap">
      <p>清洗数量</p>
      <ul>
        {standardsData.map((item,i)=>{
         return <li key={i}>
          <img src={require('../../../assets/images/common/cancel.png')} alt="" className="standards-body-left-logo"/>
          <div className="standards-content">
          <h4>{item.title}</h4>
          <p>{item.price}</p>
          </div>
          <div className="standards-count-wrap">
            <div><img className='standards-minus' src={require('../../../assets/images/common/minus.png')} alt=""/></div>
            <p className="standards-count">0</p>
            <div><img className='standards-add' src={require('../../../assets/images/common/add.png')} alt=""/></div>
          </div>
        </li>
        })}
      </ul>
    </div>
    <div className="standards-bottom-wrap">
        <input type="button" className="standards-button" value='确定'/>
    </div>
  </div>
   </div>
  )
}

export default Detail