import styled from "styled-components";

export const Page = styled.div`
    width:100vw;
    height: 100vh;
    background-color:#fff;
    position:fixed;
    z-index:99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
`

export const Head = styled.div`
    width: 94%;
    height: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 3%;
    margin-left: 3%;
    & > span {
        color:#F14C1A;
    }
`

export const SearchInput = styled.div`
    width:86%;
    height:0.6rem;
    background-color: #E2E1E1;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    & .icon {
        width:0.5rem;
        height: 0.5rem;
        margin-left:0.1rem;
        & > img {
            height:100%;
            width:100%;
        }
    }
    & > span {
        width:80%;
        height:100%;
        margin-left:0.1rem;
        color:#6F6A6E;
        & > input {
            background-color:#E2E1E1;
            height:100%;
            width: 100%;
        }
    }
`

export const Top = styled.div`
    width:100vw;
    height:0.8rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20% 0 20%;
    box-sizing: border-box;
    border-bottom: 1px solid #E2E1E1;
    & > div {
        height:0.8rem;
        width: 0.9rem;
        text-align:center;
        line-height:0.8rem;
    }
    & > div.active {
        color:#EC4321;
        border-bottom:2px solid #EC4321;
    }
`

export const History = styled.div`
    width:100vw;
    height:auto;
    & > .nav-wrap {
        height:1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#6F6A6E;
        padding:0 0.2rem 0 0.2rem;
        & > .icon {
            width:0.4rem;
            height:0.4rem;
            & > img {
                width: 100%;
                height:100%;
            }
        }
    }
    & > .historyKey-wrap {
        width:100%;
        height:auto;
        padding:0 0.2rem 0 0.2rem;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        & > .historyKey {
            background-color:#D8D9F9;
            padding: 0.15rem;
            margin-right:0.1rem;
            border-radius: 0.1rem;
            margin-bottom:0.1rem;
        }
    }
`

export const Hot = styled.div`
    width:100vw;
    height:auto;
    & > .nav-wrap {
        height:1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#6F6A6E;
        padding:0 0.2rem 0 0.2rem;
    }
    & > .hotKey-wrap {
        width:100%;
        height:auto;
        padding:0 0.2rem 0 0.2rem;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        & > .hotKey {
            background-color:#D8D9F9;
            padding: 0.15rem;
            margin-right:0.1rem;
            margin-bottom:0.1rem;
            border-radius: 0.1rem;
        }
    }
`