import React from 'react';
import { Page, Top, Head } from './index.style';

export default function User(){
    return(
        <Page>
            <Top>
                <img src={require("../../../assets/images/user/setting.png")} alt="设置"/>
            </Top>
            <Head>

            </Head>
        </Page>
    )
}
