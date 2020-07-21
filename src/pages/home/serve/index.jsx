import React, { useEffect,useState } from 'react';
import BScroll from 'better-scroll';
import data from './serve.json';
import '../../../assets/css/home/serve/index.css';
import searchImg from '../../../assets/images/home/serve/search.png';
import addImg from '../../../assets/images/home/serve/add.png';
import LazyLoad from 'react-lazyload';

export default function Serve() {
    let [isActive, setActive] = useState(1)
    // console.log(data)
    useEffect(() => {
        let scroll = new BScroll('.serveRight', {
            scrollY: true,
            click: true,
            scrollX: false,
            snap: {  // 滑块切换的一些配置
                threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
                // stepY: calc(100vh - 2.2rem)  // 纵向切换距离为窗口高度
            }
        })
        function onScroll(pos) {
            console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
          }
        scroll.on('scroll', onScroll)
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
                                    <li className={`${isActive === i + 1 ? 'active' : ''}`} onClick={() => {
                                        setActive(isActive = i + 1)
                                        scrollToAnthor(`${i + 1}`)
                                    }} key={i}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="serveRight">
                    <ul className="pagesContent">
                        {
                            data.map((item, i) => {
                                return (
                                    <li id={i + 1} key={i}>
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
                                                                {/* <LazyLoad> */}
                                                                <img src={sItem.itemImg} alt="" />
                                                                {/* </LazyLoad> */}
                                                            </div>
                                                            <span className="sItemName">{sItem.itemName}</span>
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
