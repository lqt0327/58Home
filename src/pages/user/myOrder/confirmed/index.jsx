import React from 'react';
import OrderNull from '../../../../assets/images/user/orderNull.png';


export default function Confirmed() {
    return (
        <div className="orderContent">
            <div className="null">
                <div className="nullImg">
                    <img src={OrderNull} alt="" />
                </div>
                <h4>没有历史订单，赶紧去下一单吧</h4>
            </div>
            <div className="orderWrap">
                <div className="orderItem">
                    <div className="orderHeader">
                        <div className="orderShop">
                            <span className="shopIcon"></span>
                            <span className="shopName">花礼网</span>
                        </div>
                        <div className="orderState">待支付</div>
                    </div>
                    <div className="orderMid">
                        <div className="shopInfo">
                            <div className="shopImg">
                                <img src="https://images.daojia.com/dop/custom/f86f25f27c465c292bc0de92bd3eaf7c.jpg?x-oss-process=image/resize,w_105,h_105/format,webp" alt="" />
                            </div>
                            <span>一往情深-19朵玫瑰花束生日鲜花速递表白送女友爱人情人节同城</span>
                        </div>
                        <div className="orderAddress">
                            <div className="orderTime">
                                2020-07-26 (周日) 15:00
                            </div>
                            <div className="oAddress">
                                江西省南昌青山湖区范家新村2区2栋2层
                            </div>
                        </div>
                    </div>
                    <div className="orderMoney">
                        <div className="payMoney">
                            待付金额：<span>￥249.00</span>
                        </div>
                    </div>
                    <div className="orderBtn">
                        <div className="goPay">
                            去支付
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
