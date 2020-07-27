import React, { useRef, useState, useEffect } from 'react';
import { Page, Head, SearchInput, Top, History, Hot } from './search.style';
import { connect } from 'react-redux';
import action from '../../store/actions';
import config from '../../assets/js/conf/config';
import { withRouter } from 'react-router';

function Search(props) {
    console.log(props)
    const search = useRef()
    const [bTop, setBTop] = useState(true);
    const [hKeywords, setHKeywords] = useState();
    const [bHistory, setBHistory] = useState(true);

    let Hkeywords = props.state.hk.keywords;

    useEffect(() => {
        if (Hkeywords.length > 0) {
            setBHistory(true);
        } else {
            setBHistory(false);
        }
    },[Hkeywords.length])
    const goPage = (url, keywords) => () => {
        console.log(url);
        props.history.push(config.path + url);
    }
    const handleType = async () => {
        let keywords = hKeywords || search.current.placeholder;
        for (let i = 0; i < Hkeywords.length; i++) {
            if (Hkeywords[i] === keywords) {
                Hkeywords.splice(i--, 1);
            }
        }
        Hkeywords.unshift(keywords);
        localStorage.setItem('hk', JSON.stringify(Hkeywords));
        props.dispatch(action.hk.addHistoryKeywords({ keywords: Hkeywords }));
        setBHistory(true);
        goPage("home/index/search?keywords=" + keywords, keywords)();
    }
    const getHK = (e) => {
        setHKeywords(e.target.value)
    }
    const clearHK = () => {
        setBHistory(false);
        localStorage.removeItem("hk");
        props.dispatch(action.hk.addHistoryKeywords({ keywords: [] }));
        props.state.hk.keywords = [];
    }
    return (
        <Page style={props.pageStyle}>
            <Head>
                <SearchInput>
                    <div className="icon" onClick={handleType}><img src={require("../../assets/images/home/index/search.png")} alt="" /></div>
                    <span><input ref={search} type="text" placeholder="擦玻璃" onChange={(e) => { getHK(e) }} /></span>
                </SearchInput>
                <span onClick={props.childStyle({ display: "none" })}>取消</span>
            </Head>
            <Top>
                <div className={bTop ? "active" : ""} onClick={() => { setBTop(true) }}>服务</div>
                <div className={bTop ? "" : "active"} onClick={() => { setBTop(false) }}>商家</div>
            </Top>
            <History className={bHistory ? "" : "hide"}>
                <div className="nav-wrap">
                    <div className="title">历史搜索</div>
                    <div className="icon" onClick={clearHK}><img src={require("../../assets/images/common/bin.png")} alt="" /></div>
                </div>
                <div className="historyKey-wrap">
                    {
                        Hkeywords ? Hkeywords.map((item, index) => {
                            return (
                                <div className="historyKey" key={index} onClick={goPage('home/index/search?keywords='+item,item)}>{item}</div>
                            )
                        }) : ''
                    }
                </div>
            </History>
            <Hot>
                <div className="nav-wrap">
                    <div className="title">大家都在搜</div>
                </div>
                <div className="hotKey-wrap">
                    <div className="hotKey">擦玻璃</div>
                    <div className="hotKey">保姆</div>
                    <div className="hotKey">月嫂</div>
                    <div className="hotKey">开荒保洁</div>
                    <div className="hotKey">月嫂</div>
                    <div className="hotKey">开荒保洁</div>
                    <div className="hotKey">深度保洁</div>
                    <div className="hotKey">擦玻璃</div>
                    <div className="hotKey">开荒保洁</div>
                    <div className="hotKey">深度保洁</div>
                    <div className="hotKey">保姆</div>
                    <div className="hotKey">月嫂</div>
                    <div className="hotKey">开荒保洁</div>
                    <div className="hotKey">深度保洁</div>
                </div>
            </Hot>
        </Page>
    )
}

export default connect((state) => {
    return {
        state
    }
})(withRouter(Search))