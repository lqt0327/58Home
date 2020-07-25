import React from 'react';
import OrderNull from '../../../../assets/images/user/orderNull.png';

export default function Paid(){
    return(
        <div className="orderContent">
            <div className="null">
                <div className="nullImg">
                    <img src={OrderNull} alt="" />
                </div>
                <h4>没有历史订单，赶紧去下一单吧</h4>
            </div>
            <div className="orderWrap">
                
            </div>
        </div>
    )
}
