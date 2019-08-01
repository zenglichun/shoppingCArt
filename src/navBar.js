import React from "react";
import { Router,Link } from "react-router-dom";
import { history } from "./utils.js";

const aStyle = {
    textDecoration:"none",
    color:"#444444"
  }
  const ulStyle = {
    // clear:"both",
    display:"flex",  
    background:"#cccccc",
    height:"60px",
    marginBlockStart:"0",
    paddingInlineStart:"0"
  }
  const liStyle = {
    listStyleType:"none",
    width:"25%",
    height:"60px",
    lineHeight:"60px",
    fontSize:"30px",
    textAlign:"center",
    color:"#666666"
  }
const nav = () => {
    return (
        <Router history={history}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to="/" style={aStyle}>主页</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/shoppingCart" style={aStyle}>购物车</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/message" style={aStyle}>信息</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/mine" style={aStyle}>我的</Link>
                </li>
            </ul>
        </Router>  
    )
}

export {nav}