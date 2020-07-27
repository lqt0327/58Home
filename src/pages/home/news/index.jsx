import React from 'react';
import { Page, Head, Content } from './style';

export default function News(){
    return(
        <Page>
            <Head>
                <h3>我的消息</h3>
                <div>帮助中心</div>
            </Head>
            <Content>
                <div className="item-list">
                    <img src={require("../../../assets/images/user/funset_4.png")} alt=""/>
                    <h4>优惠促销</h4>
                </div>
                <hr />
                <div className="item-list">
                    <img src={require("../../../assets/images/user/funset_3.png")} alt=""/>
                    <div className="item-wrap">
                        <div>
                            <h4>生活号</h4>
                            <div>昨天 17:30</div>
                        </div>
                        <p>如果你也有，该肯定该排毒了。点击查看&gt;&gt;</p>
                    </div>
                </div>
            </Content>
        </Page>
    )
}
