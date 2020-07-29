import React, { useState, useEffect } from 'react';
import Swiper from '../../../assets/js/utils/swiper.js'
import '../../../assets/js/utils/swiper.css'
import '../../../assets/css/home/serve/detail.css'
import Header from '../../../components/header/header'
import datas from './detail.json'
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import action from '../../../store/actions/'
let standardsData = [
  {title:'油烟机免拆洗',
   price:149,
   count:0,
  },
  {title:'油烟机拆洗',
   price:180,
   count:0,},
  {title:'油烟机+灶台拆洗',
   price:220,
   count:0,},
]
let headerData = {
  title:'油烟机清洗',
  share: 1
}
function Detail(props) {
  let adressData = JSON.parse(localStorage.getItem('adressData')) || []
  console.log(2222222, props)
  let {adress,number,name,tel} = adressData
  let [countdata,setcountdata] = useState(standardsData)
  // let {detaildata} = props
  // 判断是否有点击服务
  let [sumCount,setSumCount] = useState(0)
  let [isCount,setCount] = useState(false)
  useEffect(() => {
    // 如果有购买服务，则传入reducer
    // console.log(countdata,'1111111111111')
    if(sumCount>0){
      // console.log(sumCount,'bbbbbbbbbbbbbbbbbbb')
      localStorage.setItem('sumCount',JSON.stringify(countdata))
    }
    let countdatas = JSON.parse(localStorage.getItem('sumCount'))
      console.log(countdatas,'2222222222')
      props.dispatch(action.detail.addDetailInfo(countdatas))
    
  }, [countdata]) 
//  console.log(countdata)
  // 是否选择伪类
  let [isSelected,setSelected] = useState(1)
  // 三个锚链接
  let goodsBegin = useRef(null)
  let goodsDetail = useRef(null)
  let goodsRecommend = useRef(null)
  let [standards_wrap,setStandards_wrap]=useState(0)
  let [navShow,setnavShow] = useState(0)
  let [serveInfoshow,setServeInfoshow] = useState(0)
  // swiper 必备
  useEffect(()=>{
   let s =  new Swiper('.swiper-container', {
      autoplay:1000,
      pagination: '.swiper-pagination',
      loop : true,
    })
    function Scroll(){
      if(goodsBegin.current){
        goodsBegin.current.getBoundingClientRect().top<42?setnavShow(navShow=1):setnavShow(navShow=0)
      let detailTop = goodsBegin.current.getBoundingClientRect().top
      if(detailTop>-551){
        setSelected(isSelected=1)
      }
      else if(detailTop> -1970){
        setSelected(isSelected=2)
      }
      else{
        setSelected(isSelected=3)
      }
      }
    }
    // 监听滚动，如果有滚动，则隐藏nav
    window.addEventListener('scroll',Scroll)
  },[])
  let scrollToAnchor = (anchorName) => {
    if (anchorName) {
        window.scrollTo({
          top: anchorName.current.offsetTop-20,
          behavior: 'smooth'
        });
    }
}
let handleShow = () =>{
setStandards_wrap(standards_wrap=1)
}
let handleHidden = () => {
  setStandards_wrap(standards_wrap=0)
  setServeInfoshow(serveInfoshow=0)
}
let handleisCount = () =>{
  if(sumCount>0){
    setCount(isCount=true)
  }
}
// 点击立即购买时应该选择展示什么
let handleSelectToShow =() => {
  if(props.state.adress===''){
    props.history.push('/user/newadress')
  }
  else if(sumCount===0){
    setStandards_wrap(standards_wrap=1)
  }
  else{
    setServeInfoshow(serveInfoshow=1)
    props.history.push('/order/details')
  }
}
// nav
let NavWrap = () =>{
  return (    <div className={navShow===1?'nav':'nav-hidden'}>
  {/* setSelected(isSelected=3); */}
  <div className={`goods nav-bar ${isSelected===1?'selected':''}`} onTouchStart={()=>{ scrollToAnchor(goodsBegin)}}>商品</div>
  <div className={`details nav-bar ${isSelected===2?'selected':''}`} onTouchStart={()=>  {scrollToAnchor(goodsDetail)}}>详情</div>
  <div className={`recommend nav-bar ${isSelected===3?'selected':''}`} onTouchStart={()=>{scrollToAnchor(goodsRecommend)}}>推荐</div>
</div>)
}
// Swiper
let SwiperWrap = () =>{
  return (<div className="swiper-container" >
  <div className="swiper-wrapper" >
      <div className="swiper-slide"><img alt='swiper1' src={require("../../../assets/images/home/serve/swiper/clear1.jpg")}  className="slide-img"/></div>
      <div className="swiper-slide"><img alt='swiper2' src={require("../../../assets/images/home/serve/swiper/clear2.jpg")}  className="slide-img"/></div>
      <div className="swiper-slide"><img alt='swiper3' src={require("../../../assets/images/home/serve/swiper/clear3.jpg")}  className="slide-img"/></div>
      <div className="swiper-slide"><img alt='swiper4' src={require("../../../assets/images/home/serve/swiper/clear4.jpg")}  className="slide-img"/></div>
      <div className="swiper-slide"><img alt='swiper5' src={require("../../../assets/images/home/serve/swiper/clear5.jpg")}  className="slide-img"/></div>
  </div>
  <div className="swiper-pagination"></div></div>)
  }
// 价格 title
 let TitleWrap = ()=>{
  return (    <div className="center-price" >
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

  </div>)
 }
//  优惠按钮
 let DiscountWrap = () =>{
   return (  <div className="discount-wrap" >
   <div className="discount" >优惠</div>
   <div className="discount-title">8.8折无门槛优惠券</div>
   <div className="discount-input-wrap"><input type="button" className="discount-input"/>立即领取</div>
 </div>)
 }
//  地址
let AdressWrap = () =>{
  return (     <div className="adress-item">
  <div className='adress-item-title'>地址</div>
  <Link to='/user/newadress' style={{textDecoration:'none', color:'#000'}} className="linkToNewAdress">
  {adress===''?<input type="text" placeholder='请选择服务地址' className='adress-item-input' value={props.state.name} readOnly />
 :<div style={{fontSize:'12px'}}><span>{adress}</span>&nbsp;<span>{number}</span><br/>
 <span>{name}</span>&nbsp;<span>{tel}</span></div>}
  </Link>
  <div className='adress-item-logo'><img src={require("../../../assets/images/common/goto.png")} className="adress-img"/></div>
  
</div>)
}
// 规格
let StandardWrap = () =>{
  return (     <div className="adress-item" onClick={handleShow}>
  <div className='adress-item-title'>规格</div>
  <div className='adress-item-input-wrap'>
    
    {!isCount?<input type="text" placeholder='请选择服务规格' className='adress-item-input'  readOnly/>:
    standardsData.map((item,i)=>{
     return item.count===0?'':<div key={i}>{`${countdata[i].title} (${countdata[i].count}台)`}</div>
    })}

    </div>
  <div className='adress-item-logo'><img src={require("../../../assets/images/common/goto.png")} className="adress-img"/></div>
</div>)
}
// 时间
let TimeWrap = () =>{
  return (   <div className="adress-item">
  <div className='adress-item-title'>时间</div>
  <div className='adress-item-input-wrap'><input type="text" placeholder='请选择服务时间' className='adress-item-input' readOnly /></div>
  <div className='adress-item-logo'><img src={require("../../../assets/images/common/goto.png")} className="adress-img"/></div>
</div>)
}
// 详情页
 let DetailWrap = () => {
   return (  <div className="detail" id='abc' ref={goodsDetail}>
   <div className="detail-header"  >
   <div className="detail-header-text">详情</div>
     <div className="detail-header-line"></div>
   </div>
   <div className="detail-img-wrap" >
      <img className='detail-img' src={require("../../../assets/images/home/serve/recommend/re1.jpg")} alt=""/>
      <img className='detail-img' src={require("../../../assets/images/home/serve/recommend/re2.jpg")} alt=""/>
      <img className='detail-img' src={require("../../../assets/images/home/serve/recommend/re3.jpg")} alt=""/>
    </div>
 </div>)
 }
//  推荐页
 let RecommendWrap = () =>{
   return (
    <div className="recommends" ref={goodsRecommend}>
    <div className="detail-header">
      <div className="detail-header-text">推荐</div>
        <div className="detail-header-line"></div>
      </div>
     <div className="recommends-content">
       <ul className='recommends-item-wrap'>
         {/* 弹出框 */}
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
   )
 }
//  底部按钮bottom
let BottomWrap = () =>{
  return (
    <div className="bottom">
    <div className="bottom-left">
      <img src={require('../../../assets/images/home/serve/recommend/cstSv.png')} alt="" className="bottom-left-img"/>
      <div className="bottom-left-text">客服</div>
    </div>
    <div className="bottom-right" onClick={handleSelectToShow}>
      <input type="button" className="bottom-right-btn" value='立即购买'/>
    </div>
  </div>
  )}
//  弹出框 选择数量
 let PurchaseNumberWrap = () =>{
   return(  <div className={`standards-wrap ${standards_wrap===1?'standards-wrap-add':''}`} >
   <div className="standards-header">
     <div className="standards-header-title">请选择服务规格</div>
     <div className="standards-header-logo" onClick={handleHidden}>
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
         <p>￥{item.price}/台</p>
         </div>
         <div className="standards-count-wrap">
           <div onClick={(e)=>{
             let state = {
               ...countdata
             }
             if(state[i].count>0) {state[i].count--
             setSumCount(sumCount-=1)
             setcountdata(state)}
           }}><img className='standards-minus' src={require('../../../assets/images/common/minus.png')} alt=""/></div>
           <p className="standards-count">{countdata[i].count}</p>
           <div onClick={()=>{
             let state = {
               ...countdata
             }
             state[i].count++
             setSumCount(sumCount+=1)
             setcountdata(state)
           }}><img className='standards-add' src={require('../../../assets/images/common/add.png')} alt=""/></div>
         </div>
       </li>
       })}
     </ul>
   </div>
   <div className="standards-bottom-wrap" onClick={()=>{handleHidden();handleisCount()}}>
       <input type="button" className="standards-button" value='确定'/>
   </div>
 </div>)
 }
//  弹出框 展示购买信息
 let PurchaseInfo = () =>{
   return (<div className={`serveInfo-wrap ${serveInfoshow===1?'serveInfo-wrap-add':''}`} >
   <div className="serveInfo-title-wrap">
   <div className="serveInfo-title">请填写服务信息</div>
   <img src={require('../../../assets/images/common/cancel.png')} alt="" className="serveInfo-icon" onClick={handleHidden}/>
   </div>
   <Link to='/user/newadress' style={{textDecoration:'none', color:'#000'}} className="linkToNewAdress">
   <div className='serveInfo-adress'>
     <div className="serveInfo-location">
       <img src={require('../../../assets/images/home/serve/recommend/location.png')} alt="" className="serveInfo-location-icon"/>
     </div>
   <div className='serveInfo-location-adress'><span style={{fontWeight:'550'}}>{adress}</span>&nbsp;<span style={{fontWeight:'550'}}>{number}</span><br/>
   <span style={{fontSize:'14px'}}>{name}</span>&nbsp;<span style={{fontSize:'14px'}}>{tel}</span></div>
   <div className='serveInfo-go-wrap'><img src={require("../../../assets/images/common/goto.png")} className="serveinfo-icon-go"/></div>
   </div>
   </Link>
   <div className="colorful-line">
     {
       new Array(20).fill(0).map((item,i)=>{
         return (
          <div key={i}>
            {i%2===0?<p className="colorful1"></p>: <p className="colorful2"></p>}
          </div>
         )
       })
     }
   </div>
   <div className="serveInfo-standards">
     <div className="serveInfo-left">服务规格</div>
     <div className="serveInfo-center">
       {standardsData.map((item,i)=>{
       return <div key={i}>{`${countdata[i].title} (${countdata[i].count}台)`}</div>
      })}</div>
      <div className="serveInfo-right">
     <img src={require("../../../assets/images/common/goto.png")} className="serveInfo-right-icon"/>
      </div>
   </div>
   <div className="reminder">
     <p>温馨提示:<br/>
       58到家是服务平台，暂不支持开具发票，如有需要请与劳动
       者协商。<br/>
       持到家悠享卡用户，到家将提供自营服务，因在售卡时已开具
       发票，持卡消费则不再提供发票。
     </p>
   </div>
   <div className="serInfo-bottom-wrap" >
     <input type="button" className="serveInfo-button" value='确定'/>
 </div>
</div>)
 }
  return (
   <div className='bigwrap'>
      {/* 整个页面是否有暗黑色系 */}
     <div className={`${standards_wrap===1 || serveInfoshow===1?'wrap':''}`} onClick={handleHidden}></div>
      <Header headerData={headerData}/>
   <div className='toscroll'> 
   <div className='contents' ref={goodsBegin}>
        {NavWrap()}
        {SwiperWrap()}
        {TitleWrap()}
        {DiscountWrap()}
   <div className="adress-wrap">
    {AdressWrap()}
    {StandardWrap()}
    {TimeWrap()}
   </div>
    {DetailWrap()}     
    {RecommendWrap()}
   </div>
   {BottomWrap()}
  </div>
  {/* 弹出购买数量信息 */}
    {PurchaseNumberWrap()}
  {/* 弹出服务信息 */}
    {PurchaseInfo()}
   </div>
  )
}
export default connect(state => {
  return {
      state:state.ad,
      detaildata: state.detail
  }
})(Detail);