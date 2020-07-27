import React, { useEffect, useState, useRef } from 'react';
import BScroll from 'better-scroll';
import data from './serve.json';
import '../../../assets/css/home/serve/index.css';
import searchImg from '../../../assets/images/home/serve/search.png';
import addImg from '../../../assets/images/home/serve/add.png';
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';


let base = 0, ranges = []
export default function Serve() {
    let [isActive, setActive] = useState(1)
    // console.log(data)
    const ref = useRef()
    useEffect(() => {
        new BScroll('.serveRight', {
            scrollY: true,
            click: true,
            tap:true,
            // scrollX: false,
            snap: {  // 滑块切换的一些配置
                threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
                // stepY: calc(100vh - 2.2rem)  // 纵向切换距离为窗口高度
            }
        })
        
        
        const tabDetail = ref.current
        const tabs = tabDetail.childNodes
        for (let tab of tabs) {
            let h = tab.getBoundingClientRect().height;
            let newH = base + h;
            ranges.push([base, newH])
            base = newH
        }
        function onScroll(e) {
            const scrollTop = -(tabDetail.getBoundingClientRect().top - 100);
            if(scrollTop <= 0) return
            if(scrollTop >= 6685) return
            console.log(scrollTop)
            const index = ranges.findIndex(range => scrollTop >= range[0] && scrollTop < range[1])
            setActive(index+1)
        }
        
        tabDetail.addEventListener('touchmove', ()=>{
            setTimeout(() => {
                onScroll()
            }, 300);
        })
        
    }, [])

    let scrollToAnthor = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    // console.log(data[0].content)
    return (
        <div className="serve">
            <div className="serveHeader">
                <div className="serveSearchBox">
                    <div className="searchImgBox">
                        <img src={searchImg} alt="" />
                    </div>
                    <div className="searchInputBox">
                        <input type="text" placeholder="擦玻璃" />
                    </div>

                </div>
                <div className="serveTopRight">
                    <img src={addImg} alt="" />
                </div>
            </div>
            <div className="serveWrapper">
                <div className="serveLeft">
                    <ul>
                        {
                            data.map((item, i) => {
                                return (
                                    <li className={`${isActive === i + 1 ? 'actives' : ''}`} onClick={() => {
                                        setActive(isActive = i + 1)
                                        scrollToAnthor(`${i + 1}`)
                                    }} key={i}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="serveRight" >
                    <ul className="pagesContent" ref={ref}>
                        {
                            data.map((item, i) => {
                                return (
                                    <li id={i + 1} key={i} data-rtab={item.name} >
                                        <div className="serveContent">
                                            <div className="topImg">
                                                <img src={item.content.topImg} alt="" />
                                            </div>
                                            <span className="itemTitle">{item.content.title}</span>
                                            <div className="serveItem">
                                                {item.content.serveItem.map((sItem, j) => {
                                                    return (
                                                        
                                                        <div className="sItemWrapper" key={j}>
                                                            <div className="sItemImg">
                                                            <Link to="/serve/detail" style={{ textDecoration:'none'}}>
                                                                <img src={sItem.itemImg} alt="" />
                                                            </Link>    
                                                            </div>
                                                            <Link to="/serve/detail" style={{ textDecoration:'none'}}>
                                                            <span className="sItemName">{sItem.itemName}</span>
                                                            </Link> 
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
