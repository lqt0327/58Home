import styled from 'styled-components';

export const Page = styled.div`
    width:100vw;
    height:100vh;
`

export const Top = styled.div`
    width:100%;
    height:0.7rem;
    background-color:#fff;
    & > img {
        float:right;
        width:0.6rem;
        height:0.6rem;
        margin:0.05rem;
    }
`

export const Head = styled.div`
    width:100%;
    height:1.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 0.2rem 0 0.2rem;
    box-sizing:border-box;
    background-color:#fff;
    & > .avatar {
        width:1.2rem;
        height:1.2rem;
        border-radius:0.6rem;
        overflow:hidden;
        & > img {
            width:auto;
            height:100%;
        }
    }
    & > .msg-wrap {
        width:78%;
        height:1.2rem;
        padding-top:0.1rem;
        & > .name {
            font-weight:bold;
            font-size:0.36rem;
        }
        & > .edit {
            height:0.6rem;
            font-size:0.24rem;
            line-height:0.6rem;
            color:#8a8a8a;
        }
    }
`

export const HeadItem = styled.div`
    width:100%;
    height:1.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    & > .head-item-wrap {
        width:25%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        & > .numbers {
            font-weight:bold;
            font-size:0.36rem;
        }
        & > p {
            font-size:0.24rem;
            color:#404040;
            padding-top:0.1rem;
        }
    }
`

export const MyOrder = styled.div`
    width:96%;
    height:2.5rem;
    margin-left:2%;
    margin-right:2%;
    background-color:#fff;
    margin-top:0.2rem;
    border-radius:0.1rem;
    & > .head-order-wrap {
        width:100%;
        height:0.7rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 0.2rem 0 0.2rem;
        box-sizing:border-box;
        & > div {
            font-size:0.24rem;
            color:#8a8a8a;
            letter-spacing:1px;
        }
    }
    & > .order-item-wrap {
        width:100%;
        height:1.5rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        & > .item-wrap {
            width:25%;
            height:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            & > img {
                width:0.8rem;
                height:0.8rem;
            }
            & > p {
                font-size:0.24rem;
                padding-top:0.1rem;
            }
        }
    }
`

export const MyNeed = styled.div`
    width:96%;
    height:2.5rem;
    margin-left:2%;
    margin-right:2%;
    background-color:#fff;
    margin-top:0.2rem;
    border-radius:0.1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    & > .need-wrap {
        height:100%;
        width:60%;
        display:flex;
        align-items:left;
        justify-content:space-between;
        flex-direction:column;
        padding:0.3rem 0.2rem 0.5rem 0.2rem;
        box-sizing:border-box;
        & > div {
            font-size:0.28rem;
            & > .quick-look {
                padding-top:0.05rem;
                font-size:0.24rem;
                color:#EB1625;
                letter-spacing:1px;
            }
        }
    }
    & > img {
        width:35%;
        height:auto;
        margin-right:0.2rem;
        border-radius:0.1rem;
    }
`

export const Tool = styled.div`
    width:96%;
    height:2.4rem;
    margin-left:2%;
    margin-right:2%;
    background-color:#fff;
    margin-top:0.2rem;
    border-radius:0.1rem;
    & > h4 {
        padding:0.2rem 0 0 0.2rem;
    }
    & > .tool-wrap {
        width:100%;
        height:1.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        & > div {
            padding-top:0.2rem;
            width:25%;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            & > img {
                width: 0.7rem;
                height: 0.7rem;
            }
            & > p {
                padding-top:0.05rem;
                font-size: 0.24rem;
            }
        }
    }
`