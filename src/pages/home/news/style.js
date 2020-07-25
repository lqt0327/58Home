import styled from 'styled-components';

export const Page = styled.div`
    width:100vw;
    height:100vh;
`

export const Head = styled.div`
    width:100%;
    height:1rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 0.2rem 0 0.2rem;
    box-sizing:border-box;
    border-bottom:1px solid #8a8a8a;
    background-color:#fff;
    & > div {
        font-size:0.28rem;
    }
    & > h3 {
        width:58%;
        text-align:right;
    }
`

export const Content = styled.div`
    width:100%;
    height:auto;
    background-color:#fff;
    padding: 0 0.2rem 0 0.2rem;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    & > .item-list {
        width:100%;
        height:1.5rem;
        display:flex;
        align-items:center;
        & > img {
            width:0.9rem;
            height:0.9rem;
            padding-right:0.2rem;
        }
        & > .item-wrap {
            width:80%;
            display:flex;
            align-items:left;
            justify-content:center;
            flex-direction:column;
            & > div {
                display:flex;
                align-items:center;
                justify-content:space-between;
                
                & > div {
                    font-size:0.24rem;
                    color:#8a8a8a;
                }
            }
            & > p {
                padding-top:0.1rem;
                font-size:0.28rem;
                color:#8a8a8a;
            }
        }
    }
    & > hr {
        width:80%;
        margin-left:15%;
        border: 0;
        height: 1px;
        background-color:#8a8a8a;
        transform: scaleY(0.5);
    }
`