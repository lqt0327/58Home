import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/user/payment/index.css';

function Payment(props) {
    return (
        <div className="payWrapper">
            <div className="paymentHeader">
                <Link onClick={() => { props.history.go(-1) }}>
                    <div className="paymentHeaderLeft"></div>
                </Link>
                <div className="paymentHeaderTitle">支付收银台</div>
                <div className="paymentHeaderRight"></div>
            </div>
            <div className="payMoney">
                <span>￥</span>
                <span className="sumMoney">1212782147</span>
            </div>
            <div className="payType">
                <label >
                    <div className="zfbImg"></div>
                    <div className="payName">
                        <h4>支付宝</h4>
                        <span>推荐有支付宝账号的用户使用</span>
                    </div>
                    <div className="paySelect">
                        <input type="radio" name='radio' defaultValue="zhifubao" defaultChecked />
                    </div>
                </label>
                <label >
                    <div className="wxImg"></div>
                    <div className="payName">
                        <h4>微信</h4>
                        <span>推荐安装微信5.0及以上的版本使用</span>
                    </div>
                    <div className="paySelect">
                        <input type="radio" name='radio' defaultValue="weixin" />
                    </div>
                </label>
                <label >
                    <div className="hbImg"></div>
                    <div className="payName">
                        <h4>花呗</h4>
                        <span>花呗支付</span>
                    </div>
                    <div className="paySelect">
                        <input type="radio" name='radio' defaultValue="huabei" />
                    </div>
                </label>
            </div>
            <div className="payBtn">
                <button>立即支付</button>
            </div>
        </div>
    )
}

export default Payment;