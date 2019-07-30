import React from "react";
import {Link} from "react-router-dom";

const aStyle = {
    textDecoration:"none",
    color:"black"
  }
  const ulStyle = {
    clear:"both",
    display:"flex",  
  }
  const liStyle = {
    listStyleType:"none",
    width:"150px",
    height:"30px",
  }
const nav = () => {
    return (
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
    )
}

export {nav}