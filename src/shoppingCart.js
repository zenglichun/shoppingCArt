import React, {Component} from "react";
import {connect} from "react-redux";
import Summery from "./summery"

class ShoppingCart extends Component{
    render(){       
        let msg = [];
        let htmlArr = [];
        for(let i in this.props.goodsArr){
            msg.push(this.props.goodsArr[i])
        }
        msg.shift();       
        const { Add, Sub,Count } = this.props;
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
        }
        const floatRight = {
            float:"right",
            marginRight:"5px",
        }
        const smallBorder = {
            display:"inline-block",
            width:"20px",
            height:"20px",
            heightLine:"20px",
            textAlign:"center",
            border:"1px solid grey",
            margin:"3px",
        }       
        msg.forEach((item,index) => {
            htmlArr.push(
                <div style = {divBox} key = {index}>
                    <input type="checkbox" onClick = {Count} data-index={index}/>
                    <img alt="图片加载失败" src={item.imgSrc} style = {imgStyle} />
                    <div style = {goodNameStyle}>{item.goodName}</div>
                    <div>
                        <span>￥{item.goodPrice}</span>
                        <span style = {floatRight}>
                            <span style = {smallBorder} onClick = {Sub} id={item.flag}>-</span>
                            <span>{item.num}</span>
                            <span style = {smallBorder} onClick = {Add} id={item.flag}>+</span>
                        </span>
                    </div>
                </div>
            )         
        });
        return(
            <div>
                {htmlArr}
                <Summery/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        goodsArr: state
    }
}
function mapDispatchToProps(dispatch){
    return {
        Add: (event) => dispatch({ type: '加一', id: event.target.id, target:event.target}),
        Sub: (event) => dispatch({ type: '减一', id: event.target.id, target:event.target}),
        Count: (event) => dispatch({type: '求和', checked: event.target.checked, index: event.target.getAttribute("data-index")}) 
    }
}
export default ShoppingCart = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);