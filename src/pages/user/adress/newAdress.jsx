import React from "react";
import Header from "../../../components/header/header";
import '../../../assets/css/user/adress/adress.css'
let headerData = {
  title: "新增地址",
  share: 0,
};
function NewAdress() {
  return (
    <div className='big-wrapper'>
      <Header headerData={headerData} />
      <div className="center-wrap">
        <div className="name-wrap">
          <div className="name-left left">联系人</div>
          <div className="name-right">
            <div className="name-input-wrap">
              <input type="text" className="name-input" placeholder='姓名' />
            </div>
            <div className="sex">
              <form>
                <input type="radio" name="sex" value="boy" id="boy" className='boy' checked/>
                <label htmlFor="boy">先生</label>
                <input type="radio" name="sex" value="girl" id="girl" className='girl' />
                <label htmlFor="girl">女士</label>
              </form>
            </div>
          </div>
        </div>
        <div className="tel-wrap">
          <div className="tel-left left">电话</div>
          <div className="tel-right">
            <input type="text" className="tel-input" placeholder='手机号码'/>
          </div>
        </div>
        <div className="adress-wrap">
          <div className="adress-left left">地址</div>
         
            <input type="text" className="adress-input" placeholder='选择服务地址'/>
            <img src={require('../../../assets/images/common/goto.png')} alt=""/>
         
        </div>
        <div className="house-number-wrap">
          <div className="house-number-left left">门牌号</div>
          <div className="house-number-right">
            <input type="text" className="house-number-input"/>
          </div>
        </div>
        <div className="label left">
          <div className="home">家</div>
          <div className="company">公司</div>
        </div>
        <div className="switch-box">
	   <input className="switch-input" type="checkbox" id="switch-input" />
	    <label className="switch-label" htmlFor="switch-input"></label>
    </div>

      </div>
    </div>
  );
}
export default NewAdress;
