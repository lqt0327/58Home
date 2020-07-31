import React from 'react'
import Header from '../../../components/header/header'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Ul = styled.ul`
  margin-top:44px;
 
     >li {
    display: flex;
    justify-content:space-between;
    align-items:center;
    background-color: #fff;
    padding:10px;
   
    border-bottom: 1px solid #f5f5f9;
    > div:first-child{
      font-size:14px;
      > div:nth-child(1){
        > span:nth-last-child(2){
          display:inline-block;
          font-size:10px;
          margin-left: 5px;
          padding:2px;
          vertical-align: middle;
          color:red;
          width:20px;
          background-color: pink;
        }
      > span:nth-last-child(1) {
        display:inline-block;
        font-size:10px;
          margin-left: 5px;
          padding:2px;
          width:20px;
          text-align:center;
          vertical-align: middle;
          color:yellow;
          background-color: orange;
      }
      }
      > div:nth-child(2){
        padding-top:5px;
        font-size:12px;
        color:#878d9a;
        > span {
          margin-right:5px;
        }
      }
    }
    >a{
    text-decoration:none;
    > :nth-child(1){
      width:20px;
      height:20px;
    }
  }
  }
`
let headerData = {
  title:'服务地址',
  share: 0
}
function AdressList() {
  let allAdressData = JSON.parse(localStorage.getItem('allAdressData')) || []
  return (
   <>
   <Header headerData={headerData}/>
    <Ul>
     {allAdressData.map((item)=>{
       return ( <li key={item.id}>
        <div>
          <div>
       <span>{item.adress}</span>
            <span>{item.number}</span>
            <span style={{display:item.defaults?'inline':'none'}}>默认</span>
            <span>{item.label}</span>
          </div>
          <div>
            <span>{item.name}</span>
            <span>({item.sex})</span>
            <span>{item.tel}</span>
          </div>
        </div>
        <NavLink to={`/user/editadress/${item.id}`}>
        <img src={require('../../../assets/images/common/modify.png')} alt=""/>
        </NavLink>
      </li>)
     })}
    </Ul>
    
   </>
  )
}

export default AdressList
