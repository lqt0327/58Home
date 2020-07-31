import React,{useRef, useState, useEffect} from "react";
import { connect } from 'react-redux'
import Header from "../../../components/header/header";
import '../../../assets/css/user/adress/adress.css'
import action from '../../../store/actions/'
import styled from 'styled-components'
const Alert = styled.div`
  font-size:12px;
  color: red;
  margin-left:10px;
`
let headerData = {
  title: "修改地址",
  share: 0,
};

function EditAdress(props) {
  console.log(props)
  let allAdressData = JSON.parse(localStorage.getItem('allAdressData')) || []
  const {id} = props.match.params
  
 

  let [nameValue,setNameValue] = useState(null)
  let [sexValue,setSexValue] = useState(null)
  let [telValue,setTelValue] = useState(null)
  let [adressValue,setAdressValue] = useState(null)
  let [numberAdressValue,setNumberAdressValue] = useState(null)
  let [labelValue,setLabelValue] = useState(null)
  let [defaultAdress,setDefaultAdress] = useState(false)

  let [showalert,setshowalert] =  useState('none')
  let [adressData,setAdressData] = useState({})
  useEffect(()=>{
    
    let adressData1 = allAdressData.find((item)=> item.id==id)
    console.log(adressData1,'abcdefg')
    setAdressData(adressData=adressData1)
    },[])
    const {name,sex,tel,adress,number,label,defaults} = adressData
  // let telValue = useRef(null)
  // let adressValue = useRef(null)
  // useEffect(()=>{
  //   // adressData.sex = sexValue
  //   console.log(nameValue,sexValue,telValue,adressValue,numberAdressValue,labelValue,defaultAdress)
  // },[])
 
  let handleSave = () => {
    let adressData = {
      name:nameValue||name,
      sex:sexValue||sex,
      tel:telValue||tel,
      adress:adressValue||adress,
      number:numberAdressValue||number,
      label:labelValue||label,
      defaults: defaultAdress,
      id:id
    }
    for(let item in adressData){
      console.log(adressData[item],item)
      if(adressData[item]==null){
        setshowalert(showalert='block')
        return;
      }
    }
    if(adressData.adress!=null){
     allAdressData= allAdressData.filter((item)=> item.id!=id )
     allAdressData.push(adressData)
     console.log(allAdressData,'qqqqqqqqqqqqqqqq')
      localStorage.setItem('adressData',JSON.stringify(adressData))
      localStorage.setItem('allAdressData',JSON.stringify(allAdressData))
    }
    let newadressdata = JSON.parse(localStorage.getItem('adressData'))
    props.dispatch(action.ad.addnewAdressInfo(newadressdata))
    // console.log(nameValue,sexValue,telValue,adressValue,numberAdressValue,labelValue,defaultAdress)
    window.history.go(-1)
  }
  let handleDelete = ()=>{
    allAdressData= allAdressData.filter((item)=> item.id!=id )
    localStorage.setItem('allAdressData',JSON.stringify(allAdressData))
    window.history.go(-1)
  }
 
  return (
    
    <div className='big-wrapper'>
      <Header headerData={headerData} />
      <div className="center-wrap">
        <div className="name-wrap">
          <div className="name-left left">联系人</div>
          <div className="name-right">
            <div className="name-input-wrap">
              <input type="text" className="name-input" placeholder='姓名' defaultValue={name}  onFocus={()=>setshowalert(showalert='none')} required onChange={(e)=>{setNameValue(nameValue = e.target.value)}} />
            </div>
            <div className="sex" onClick={(e)=> setSexValue(e.target.value)}>
              <form >
                {console.log(sex,'llllllllllllll')}
                <input type="radio" name="sex" value="boy" id="boy" className='boy' defaultChecked={sex=='boy'?true:false} />
                <label htmlFor="boy">先生</label>
                <input type="radio" name="sex" value="girl" id="girl" className='girl' defaultChecked={sex=='boy'?false:true}  />
                <label htmlFor="girl">女士</label>
              </form>
            </div>
          </div>
        </div>
        <div className="tel-wrap">
          <div className="tel-left left">电话</div>
          <div className="tel-right">
            <input type="number" className="tel-input" placeholder='手机号码' defaultValue={tel} onFocus={()=>setshowalert(showalert='none')} onChange={(e)=>{setTelValue(telValue = e.target.value)}}/>
          </div>
        </div>
        <div className="adress-wrapper">
          <div className="adress-left left">地址</div>
         
            <input type="text" className="adress-input" placeholder='选择服务地址'defaultValue={adress} onFocus={()=>setshowalert(showalert='none')} onChange={(e)=>{setAdressValue(adressValue = e.target.value)}}/>
            <img src={require('../../../assets/images/common/goto.png')} alt=""/>
         
        </div>
        <div className="house-number-wrap">
          <div className="house-number-left left">门牌号</div>
          <div className="house-number-right">
            <input type="text" className="house-number-input"defaultValue={number} onFocus={()=>setshowalert(showalert='none')} placeholder='例: 1号楼一单元101室' onChange={(e)=>{setNumberAdressValue(numberAdressValue = e.target.value)}}/>
          </div>
        </div>
        <div className="label-wrap">
          <div className="label-left left">标签</div>
          <div className="home" defaultChecked={label==='家'}  onClick={(e)=>setLabelValue(labelValue=(e.target.innerText))}>家</div>
          <div className="company" defaultChecked={label==='公司'} onClick={(e)=>setLabelValue(labelValue=(e.target.innerText))}>公司</div>
        </div>
        
      <div className="default-adress-wrap">
        <div className="default-adress-left">设置默认地址</div>
        <div className="switch-box">
	   <input className="switch-input" type="checkbox" id="switch-input" defaultChecked={defaults} onClick={(e)=>{setDefaultAdress(defaultAdress=e.target.checked)}}/>
	    <label className="switch-label" htmlFor="switch-input"></label>
    </div>
      </div>
     
      </div>
      <div className="btn-save-wrap">
      <input type="button" className="btn-save btn-delete" value='删除' onClick={handleDelete}/>
        <input type="button" className="btn-save" value='保存' onClick={handleSave}/>
      </div>
      <Alert style={{display:showalert}}>请修改信息</Alert>
    </div>
  );
}
export default connect(state => {
  return {
      state:state.ad
  }
})(EditAdress);
