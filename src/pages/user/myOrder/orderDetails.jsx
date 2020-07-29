import React, { useRef, useEffect, useState } from "react";
import Head from "../../../components/header/header";
import {
  Page,
  Top,
  List,
  ServeAddress,
  Bottom,
  ActionSheet,
} from "./orderDetails.style";
import config from "../../../assets/js/conf/config";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function OrderDetails(props) {
  const actionSheet = useRef();
  const [isShow, setIsShow] = useState(false);
  const [msgPrice, setMsgPrice] = useState(props.detail);
  const [aprice, setPrice] = useState(0);
  let price = 0;
  let msgData = Object.values(props.detail);
  const headerData = {
    title: "空调清洗",
    share: 1,
  };
  useEffect(() => {
    setMsgPrice(
      localStorage.getItem("msgData")
        ? JSON.parse(localStorage.getItem("msgData"))
        : msgData
    );
    // console.log(msgData,msgPrice);
    // console.log(JSON.parse(JSON.stringify(localStorage.getItem('msgData'))));
    for (let i = 0; i < msgData.length; i++) {
      price += msgData[i].price * msgData[i].count;
    }
    setPrice(
      localStorage.getItem("price")
        ? JSON.parse(localStorage.getItem("price"))
        : price
    );
    // console.log(price);
    return () => {
      // localStorage.removeItem('price')
      // localStorage.removeItem('msgData')
    };
  }, []);
  const handleOrder = () => {
    if (!isShow) {
      actionSheet.current.style = `transform:translateY(0);bottom:0;transition:transform 0.1s`;
      setIsShow(true);
    } else {
      actionSheet.current.style = `transform:translateY(100%);bottom:0;transition:transform 0.1s`;
      setIsShow(false);
    }
  };
  const goPage = (url) => () => {
    localStorage.setItem("msgData", JSON.stringify(msgData));
    localStorage.setItem("price", aprice);
    props.history.replace(config.path + url);
  };
  return (
    <Page>
      <Head headerData={headerData}></Head>
      <Top>
        {msgPrice
          ? Object.values(msgPrice).map((item, index) => {
              return (
                <p key={index}>
                  <span>{item.count}</span>
                  {item.title}
                </p>
              );
            })
          : ""}
        <div>
          <div className="time">08-01 (周六) 9:30</div>
          <div className="price">{aprice}元</div>
        </div>
      </Top>
      <List>
        <div>
          <span>优惠卷</span>
          <div>暂无可用 &gt;</div>
        </div>
        <hr></hr>
        <div>
          <span>卡</span>
          <div>
            <span>购卡得福利，立即购买</span> &gt;
          </div>
        </div>
      </List>
      <ServeAddress>
        <h3>服务地址信息</h3>
        <p>
          服务地址:<span>&nbsp;&nbsp;虾塘 101</span>
        </p>
        <p>
          联系电话:<span>&nbsp;&nbsp;18679061111</span>
        </p>
      </ServeAddress>
      <Bottom>
        <div className="pay-bottom">
          <div className="pay-details" onClick={handleOrder}>
            需支付:&nbsp;&nbsp;<span>239元</span>
          </div>
          <div className="pay-btn" onClick={goPage("serve/detail")}>
            去结算
          </div>
        </div>
      </Bottom>
      <div className={isShow ? "mask" : "hide"} onClick={handleOrder}></div>
      <ActionSheet ref={actionSheet}>
        <h3>订单明细</h3>
        <div className="time">07-30&nbsp;&nbsp;(周四)&nbsp;&nbsp;9:30</div>

        {msgPrice
          ? Object.values(msgPrice).map((item, index) => {
              return (
                <p>
                  <span>
                    <p key={index}>
                      <span>{item.count}</span>
                      {item.title}
                    </p>
                  </span>
                  <span>+{aprice}元</span>
                </p>
              );
            })
          : ""}

        <p>
          <span>调度费</span>
          <span>+0.00元</span>
        </p>
        <hr></hr>
        <div className="price">
          <span>总计:</span>
          <span>{aprice}元</span>
        </div>
      </ActionSheet>
    </Page>
  );
}

export default connect((state) => {
  return state;
})(withRouter(OrderDetails));
