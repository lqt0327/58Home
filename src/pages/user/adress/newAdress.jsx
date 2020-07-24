import React from "react";
import Header from "../../../components/header/header";
import '../../../assets/css/user/adress/adress.css'
let headerData = {
  title: "油烟机清洗",
  share: 0,
};
function NewAdress() {
  return (
    <div className='big-wrapper'>
      <Header headerData={headerData} />
      <div className="content">
        <div className="name-wrap">
          <div className="name-left">联系人</div>
          <div className="name-right">
            <div className="name-input-wrap">
              <input type="text" className="name-input" placeholder='姓名' />
            </div>
            <div className="sex">
              <form>
                <input type="radio" name="sex" value="boy" id="boy" />
                <label htmlFor="boy">先生</label>
                <input type="radio" name="sex" value="girl" id="girl" />
                <label htmlFor="girl">女士</label>
              </form>
            </div>
          </div>
        </div>
        <div className="tel-wrap">
          <div className="tel-left">电话</div>
          <div className="tel-right">
            <input type="text" className="tel-input" placeholder='手机号码'/>
          </div>
        </div>
        <div className="adress-wrap">
          <div className="adress-left">地址</div>
          <div className="adress-right">
            <input type="text" className="adress-input" placeholder='选择服务地址'/>
            <img src="" alt=""/>
          </div>
        </div>
        <div className="house-number-wrap">
          <div className="house-number-left">门牌号</div>
          <div className="house-number-right">
            <input type="text" className="house-number-input"/>
          </div>
        </div>
        <div className="label">
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
