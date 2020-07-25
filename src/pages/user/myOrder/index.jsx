import React from 'react';
import Header from '../../../components/header/header.jsx';

let headerData = {
    title: "全部订单",
    share: 0
}

export default function MyOrder(){
    return (
        <div className="orderWrapper">
            <Header headerData={headerData} />
        </div>
    )
}