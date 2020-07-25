import React, { useEffect } from 'react';
import '../../../assets/css/user/myOrder/myorder.css';
import { HashRouter as Router, Route, Switch, NavLink, Redirect, Link } from 'react-router-dom';
import Allorder from './allorder';
import Commented from './commented';
import Confirmed from './confirmed';
import Paid from './paid';
import Served from './served';


export default function MyOrder() {
    return (
        <Router>
            <div className="orderWrapper">
                <div className="myOrderHeader">
                    <Link to="/home/user">
                        <div className="orderHeaderLeft"></div>
                    </Link>
                    <div className="orderHeaderTitle">我的订单</div>
                    <div className="orderHeaderRight"></div>
                </div>
                <div className="orderTab">
                    <div className="orderTabItem">
                        <NavLink exact className="orderNavLink" to="/user/myorder/confirmed"><span>待确认</span></NavLink>
                    </div>
                    <div className="orderTabItem">
                        <NavLink className="orderNavLink" to="/user/myorder/served"><span>待服务</span></NavLink>
                    </div>
                    <div className="orderTabItem">
                        <NavLink className="orderNavLink" to="/user/myorder/paid"><span>待支付</span></NavLink>
                    </div>
                    <div className="orderTabItem">
                        <NavLink className="orderNavLink" to="/user/myorder/commented"><span>待评价</span></NavLink>
                    </div>
                    <div className="orderTabItem">
                        <NavLink className="orderNavLink" to="/user/myorder/allorder"><span>全部</span></NavLink>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/user/myorder/confirmed" component={Confirmed} />
                    <Route path="/user/myorder/served" component={Served} />
                    <Route path="/user/myorder/paid" component={Paid} />
                    <Route path="/user/myorder/commented" component={Commented} />
                    <Route path="/user/myorder/allorder" component={Allorder} />
                    <Redirect from="/user/myorder" to="/user/myorder/confirmed" />
                </Switch>
            </div>
        </Router>
    )
}