import React from 'react';
import '../../../assets/css/home/serve/index.css';
import searchImg from '../../../assets/images/home/serve/search.png';
import addImg from '../../../assets/images/home/serve/add.png';

export default function Serve() {
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
                    <img src={addImg} alt=""/>
                </div>
            </div>
            <div className="serveWrapper">
                <div className="serveLeft"></div>
                <div className="serveRight"></div>
            </div>
        </div>
    )
}
