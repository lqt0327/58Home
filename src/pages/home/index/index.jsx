import React, { useEffect, useState, useRef } from 'react';
import Css from '../../../assets/css/home/index/index.module.css';
import Swiper from '../../../assets/js/utils/swiper.min.js';
import '../../../assets/js/utils/swiper.min.css'

export default function Index() {
    const [menu, setMenu] = useState(true);
    const pScroll = useRef(null);
    const Xscroll = useRef(null);
    useEffect(() => {
        getSwiper();
        handleScroll();
    })
    const getSwiper = () => {
        new Swiper(".swiper-container", {
            autoplay: 3000,//可选选项，自动滑动
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false
        })
    }
    const handleScroll = () => {
        pScroll.current.onscroll = () => {
            // console.log(pScroll);
            let pBar = (pScroll.current.scrollLeft) / (pScroll.current.scrollWidth - pScroll.current.offsetWidth);
            Xscroll.current.style.transform = `translate(${pBar * 100}%)`
        }
    }
    return (
        <div className={Css['page']}>
            <div className={Css['search-header']}>
                <div className={Css['search-wrap']}>
                    <div className={Css['area']}><img src={require("../../../assets/images/home/index/togo.png")} alt="area" />南昌</div>
                    <div className={Css['search-text']}><img src={require("../../../assets/images/home/index/search.png")} alt="search" />檫玻璃</div>
                </div>
                <div className={Css['menu-wrap']}>
                    <div className={Css['menu-icon']} onClick={() => { setMenu(!menu) }}>
                        <img src={require("../../../assets/images/home/index/addto.png")} alt="" />
                    </div>
                    <ul className={menu ? Css['menu'] + " hide" : Css['menu']}>
                        <li><img src={require("../../../assets/images/home/index/help.png")} alt="" />帮助中心</li>
                        <hr align="center" size="1" color="#efefef" />
                        <li><img src={require("../../../assets/images/home/index/scan.png")} alt="" />扫一扫</li>
                    </ul>
                </div>
            </div>
            <div className={Css['banner-wrap']}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={require("../../../assets/images/home/index/banner_1.jpg")} alt="" /></div>
                        <div className="swiper-slide"><img src={require("../../../assets/images/home/index/banner_2.jpg")} alt="" /></div>
                        <div className="swiper-slide"><img src={require("../../../assets/images/home/index/banner_3.jpg")} alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
            <div className={Css['quick-nav']}>
                <div className={Css['quick-wrap']} ref={pScroll}>
                    {
                        new Array(10).fill(0).map((item, index) => {
                            return (
                                <div className={Css['item-wrap']} key={index}>
                                    <div className={Css['item-top']}>
                                        <img src={require("../../../assets/images/home/index/quickNav1.png")} alt="" className={Css['item-img']} />
                                        <p className={Css['item-text']}>日常保洁</p>
                                    </div>
                                    <div className={Css['item-bottom']}>
                                        <img src={require("../../../assets/images/home/index/quickNav1.png")} alt="" className={Css['item-img']} />
                                        <p className={Css['item-text']}>日常保洁</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={Css['quick-pagination']}>
                    <div className={Css['pagination-wrap']}>
                        <div className={Css['pagination-scroll']} ref={Xscroll} style={{ transform: 'translate(0)' }}></div>
                    </div>
                </div>
            </div>
            <div className={Css['goods-level-wrap']}>
                <div className={Css['goods-item']}>
                    <img src={require("../../../assets/images/home/index/goods1.jpg")} alt="" />
                </div>
                <div className={Css['goods-item']}>
                    <img src={require("../../../assets/images/home/index/goods2.jpg")} alt="" />
                </div>
                <div className={Css['goods-item']}>
                    <img src={require("../../../assets/images/home/index/goods1.jpg")} alt="" />
                </div>
                <div className={Css['goods-item']}>
                    <img src={require("../../../assets/images/home/index/goods2.jpg")} alt="" />
                </div>
            </div>
            <div className={Css['family-wrap']}>
                <div className={Css['family-header']}>
                    <div className={Css['family-title']}>
                        <div className={Css['title']}>家庭应急</div>
                        <div className={Css['tag']}>极速上门</div>
                    </div>
                    <div className={Css['family-tag']}>
                        专业服务 品质保证
                    </div>
                </div>
                <div className={Css['family-list-wrap']}>
                    <div className={Css['family-list']}>
                        <div className={Css['images']}><img src={require("../../../assets/images/home/index/family1.jpg")} alt="" /></div>
                        <div className={Css['title']}>
                            电脑维修
                        </div>
                    </div>
                    <div className={Css['family-list']}>
                        <div className={Css['images']}><img src={require("../../../assets/images/home/index/family1.jpg")} alt="" /></div>
                        <div className={Css['title']}>
                            电脑维修
                        </div>
                    </div>
                    <div className={Css['family-list']}>
                        <div className={Css['images']}><img src={require("../../../assets/images/home/index/family1.jpg")} alt="" /></div>
                        <div className={Css['title']}>
                            电脑维修
                        </div>
                    </div>
                    <div className={Css['family-list']}>
                        <div className={Css['images']}><img src={require("../../../assets/images/home/index/family1.jpg")} alt="" /></div>
                        <div className={Css['title']}>
                            电脑维修
                        </div>
                    </div>
                    <div className={Css['family-list']}>
                        <div className={Css['images']}><img src={require("../../../assets/images/home/index/family1.jpg")} alt="" /></div>
                        <div className={Css['title']}>
                            电脑维修
                        </div>
                    </div>
                </div>
            </div>
            <div className={Css['discount-wrap']}>
                <div className={Css['discount-title']}>
                    <div className={Css['title']}>优惠专区</div>
                    <div className={Css['icon']}>热销榜</div>
                </div>
                <div className={Css['discount-goods-wrap']}>
                    <div className={Css['discount-goods']}>
                        <img src={require("../../../assets/images/home/index/goods1.jpg")} alt="" />
                    </div>
                    <div className={Css['discount-goods']}>
                        <img src={require("../../../assets/images/home/index/goods2.jpg")} alt="" />
                    </div>
                    <div className={Css['discount-goods']}>
                        <img src={require("../../../assets/images/home/index/goods1.jpg")} alt="" />
                    </div>
                    <div className={Css['discount-goods']}>
                        <img src={require("../../../assets/images/home/index/goods2.jpg")} alt="" />
                    </div>
                </div>
                <div className={Css['discount-level-wrap']}>
                    <div className={Css['discount-level']}>
                        <p>生活好物</p>
                        <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                    </div>
                    <div className={Css['discount-level']}>
                        <p>生活好物</p>
                        <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                    </div>
                    <div className={Css['discount-level']}>
                        <p>生活好物</p>
                        <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                    </div>
                    <div className={Css['discount-level']}>
                        <p>生活好物</p>
                        <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                    </div>
                </div>
                <div className={Css['more-serve-wrap']}>
                    <div className={Css['more-serve']}>
                        <div>
                            <div className={Css['title']}>更多服务</div>
                            <div className={Css['icon']}>查看全部</div>
                        </div>
                        <div className={Css['text']}>愿生活更加美好</div>
                    </div>
                    <div className={Css['serve-item-wrap']}>
                        <div className={Css['serve-item']}>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                            <div className={Css['item-wrap']}>
                                <img src={require("../../../assets/images/home/index/phone.jpg")} alt="" />
                                <p>手机修理</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={Css['reco-wrap']}>
                <div className={Css["reco-nav"]}>
                    <div className={Css['reco-level-wrap']}>
                        <div className={Css['reco-level'] + " " + Css['active']}>
                            <div className={Css['title']}>生活百科</div>
                            <div className={Css['tag']}>爱生活</div>
                        </div>
                        <div className={Css['reco-level']}>
                            <div className={Css['title']}>生活百科</div>
                            <div className={Css['tag']}>爱生活</div>
                        </div>
                        <div className={Css['reco-level']}>
                            <div className={Css['title']}>生活百科</div>
                            <div className={Css['tag']}>爱生活</div>
                        </div>
                        <div className={Css['reco-level']}>
                            <div className={Css['title']}>生活百科</div>
                            <div className={Css['tag']}>爱生活</div>
                        </div>
                    </div>
                </div>
                <div className={Css['reco-list-wrap']}>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className={Css['reco-list']}>
                        <div className={Css['reco-text']}>
                            <div className={Css['title']}>这3种肉是人工合成的，一定要少吃！</div>
                            <div className={Css['author']}>百科小助手</div>
                        </div>
                        <div className={Css['reco-img']}>
                            <img src={require("../../../assets/images/home/index/discount1.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
