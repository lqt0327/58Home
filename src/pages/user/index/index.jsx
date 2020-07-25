import React from 'react';
import { Page, Top, Head, HeadItem, MyOrder, MyNeed, Tool } from './index.style';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <Page>
            <Top>
                <img src={require("../../../assets/images/user/setting.png")} alt="设置" />
            </Top>
            <Head>
                <div className="avatar"><img src={require("../../../assets/images/user/default-head.png")} alt="" /></div>
                <div className="msg-wrap">
                    <div className="name">未设置昵称</div>
                    <div className="edit">点击编辑个人信息</div>
                </div>
            </Head>
            <HeadItem>
                <div className="head-item-wrap">
                    <div className="numbers">1</div>
                    <p>卡卷</p>
                </div>
                <div className="head-item-wrap">
                    <div className="numbers">0</div>
                    <p>候选阿姨</p>
                </div>
                <div className="head-item-wrap">
                    <div className="numbers">0</div>
                    <p>收藏</p>
                </div>
                <div className="head-item-wrap">
                    <div className="numbers">0</div>
                    <p>浏览记录</p>
                </div>
            </HeadItem>
            <MyOrder>
                <div className="head-order-wrap">
                    <h4>我的订单</h4>
                    
                    <div><Link to='/user/myorder' style={{ textDecoration:'none', color: 'black'}}>查看全部 &gt;</Link></div>
                </div>
                <div className="order-item-wrap">
                    <div className="item-wrap">
                        <img src={require("../../../assets/images/user/history.png")} alt="待确认"/>
                        <p>待确认</p>
                    </div>
                    <div className="item-wrap">
                        <img src={require("../../../assets/images/user/privacy2.png")} alt="待服务"/>
                        <p>待服务</p>
                    </div>
                    <div className="item-wrap">
                        <img src={require("../../../assets/images/user/payment.png")} alt="待支付"/>
                        <p>待支付</p>
                    </div>
                    <div className="item-wrap">
                        <img src={require("../../../assets/images/user/message.png")} alt="待评价"/>
                        <p>待评价</p>
                    </div>
                </div>
            </MyOrder>
            <MyNeed>
                <div className="need-wrap">
                    <h4>我的需求</h4>
                    <div>
                        <div>我的保姆/月嫂/育儿嫂</div>
                        <div className="quick-look">立即查看 &gt;</div>
                    </div>
                </div>
                <img src={require("../../../assets/images/user/need.png")} alt=""/>
            </MyNeed>
            <Tool>
                <h4>工具与服务</h4>
                <div className="tool-wrap">
                    <div>
                        <img src={require("../../../assets/images/user/address.png")} alt=""/>
                        <p>我的地址</p>
                    </div>
                    <div>
                        <img src={require("../../../assets/images/user/custom.png")} alt=""/>
                        <p>入驻发布</p>
                    </div>
                    <div>
                        <img src={require("../../../assets/images/user/problem.png")} alt=""/>
                        <p>帮助中心</p>
                    </div>
                    <div></div>
                </div>
            </Tool>
        </Page>
    )
}
