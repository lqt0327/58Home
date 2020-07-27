import styled from 'styled-components'

export const Page = styled.div`
    width:100vw;
    height:calc(100vh - 0.88rem);
    position:fixed;
    & > .mask {
        width:100%;
        height:100%;
        position:fixed;
        z-index:50;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        background-color:rgba(0,0,0,0.3)
    }
`

export const Top = styled.div`
    width:100%;
    margin-top:0.88rem;
    background-color:#fff;
    padding:0 0.3rem;
    box-sizing:border-box;
    & > p {
        padding-top:0.1rem;
        font-size:0.36rem;
        & > span {
            font-weight:bold;
            font-size:0.34rem;
        }
    }
    & > div {
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0.1rem 0 0.2rem 0;
        font-size:0.32rem;
    }
`

export const List = styled.div`
    width:100%;
    background-color:#fff;
    margin-top:0.2rem;
    padding:0.2rem 0.3rem;
    box-sizing:border-box;
    & > div {
        width:100%;
        display:flex;
        justify-content:space-between;
        height:0.9rem;
        align-items:center;
        & > div {
            font-size:0.28rem;
            color:#6F6A6E;
            & > span {
                color:#F14C1A;
            }
        }
    }
    & > hr {
        transform: scaleY(0.2);
    }
`

export const ServeAddress = styled.div`
    width:100%;
    margin-top:0.2rem;
    background-color:#fff;
    padding:0.2rem 0.3rem 0.3rem 0.3rem;
    box-sizing:border-box;
    & > h3 {
        font-weight:normal;
        padding:0.1rem 0 0.1rem 0;
    }
    & > p {
        padding-top:0.1rem;
        font-size:0.28rem;
        color:#6F6A6E;
        & > span {
            color:black;
        }
    }
`

export const Bottom = styled.div`
    width:100%;
    position:fixed;
    bottom:0;
    background-color:#fff;
    height:1rem;
    z-index:99;
    & > .pay-bottom {
        width: 100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding-left:0.3rem;
        box-sizing:border-box;
        & > .pay-details {
            font-size:0.28rem;
            & > span {
                font-size:0.32rem;
                color:#F14C1A;
            }
        }
        & > .pay-details::after {
            content: '^';
            color:black;
            padding-left:0.15rem;
        }
        & > .pay-btn {
            background-color:#FF443A;
            color:#fff;
            width:40%;
            height:1rem;
            line-height:1rem;
            text-align:center;
        }
    }
`

export const ActionSheet = styled.div`
    width:100%;
    background-color:#fff;
    padding:0 0.3rem;
    box-sizing:border-box;
    margin-top:0.2rem;
    position:absolute;
    bottom:0;
    transform:translateY(100%);
    z-index:90;
    & > h3 {
        font-weight:normal;
        text-align:center;
        height:0.8rem;
        line-height:0.8rem;
    }
    & > .time {
        font-size:0.28rem;
        height:0.6rem;
        line-height:0.6rem;
    }
    & > p {
        color:#6F6A6E;
        font-size:0.28rem;
        height:0.6rem;
        line-height:0.6rem;
        display:flex;
        justify-content:space-between;
    }
    & > hr {
        transform: scaleY(0.3);
    }
    & > .price {
        height:1rem;
        line-height:1rem;
        display:flex;
        justify-content:space-between;
    }
`