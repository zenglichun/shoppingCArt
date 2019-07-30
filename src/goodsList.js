import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { AddToShoppingCart} from "./action"

const divBox = {
    float:"left",
    width:"250px",
    height:"330px",
    margin:"10px",
    border:"1px solid grey"
}
const imgStyle = {
    width:"250px",
    height:"250px",
}
const goodNameStyle = {
    textAlign:"center",
    marginBottom:"10px"
}
const floatRight = {
    float:"right",
    display:"inline-block",
    marginRight:"5px",
    width:"106px",
    height:"28px",
    lineHeight:"28px",
    textAlign:"center",
    borderRadius:"16px",
    border:"1px solid white",
    background:"orange",
    color:"white",  
}
const aStyle = {
    textDecoration:"none"
}

class GoodsList extends Component{
    addTo = (index) => {
        this.props.AddToShoppingCart(index);
    }
    render(){
        const { list } = this.props  
        return(
            <div>
                {
                    list.map((item,index)=>(
                        <div style={divBox} key={index}>
                            <img alt="图片加载失败" src={item.imgSrc} style={imgStyle} />
                            <div style = {goodNameStyle}>{item.goodName}</div>                   
                            <div>
                                <span>￥{item.goodPrice}</span>
                                <span style = {floatRight} onClick={this.addTo.bind(this,index)}>
                                   <Link to="./shoppingCart" style={aStyle}>加入购物车</Link> 
                                </span>
                            </div>
                        </div>
                    ))
                }
               
            </div>
        )    
    }   
}
function mapStateToProps(state){
    return {
        list: state.list
    }
}

export default GoodsList = connect(mapStateToProps,{
    AddToShoppingCart
})(GoodsList)