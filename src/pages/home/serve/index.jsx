import React from 'react';
import './index.css'
import Detail from './detail.jsx'
import { HashRouter, Route,Link} from 'react-router-dom'

export default function Serve(){
    return(
        <div >
           <Link to='/serve/detail'>detail</Link>
        </div>
    )
}
