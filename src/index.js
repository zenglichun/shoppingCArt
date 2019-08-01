import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'
import Routes from "./Routes"
import { nav as NavBar } from "./navBar"
import * as serviceWorker from './serviceWorker'

const store = createStore(reducer);
// const divStyle = {
//     width:"100%",
//     height:"80px",
//     background:"red",
//     position:"fixed",
//     bottom:"0"
// }
ReactDOM.render(
    <Provider store={store}>
        <NavBar/>
        <Routes />  
        {/* <div style={divStyle}></div>   */}
    </Provider>,  
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
