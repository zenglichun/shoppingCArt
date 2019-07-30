import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Summery from "./summery"
import { Add, Sub, Check, ToDetail } from "./action"

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
const divStyle = {
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
const aStyle = {
    display:"inline-block",
    width:"40px",
    height:"20px",
    color:"white",
    borderRadius:"6px",
    fontSize:"13px",
    textAlign:"center",
    textDecoration:"none",
    marginLeft:"10px",
    background:"brown"
}

class ShoppingCart extends Component{
    add = (index) => {
        this.props.Add(index);
    }
    sub = (index) => {
        this.props.Sub(index);
    }
    check = (index) => {
        this.props.Check(index);
    }
    toDetail = (index) => {
        this.props.ToDetail(index);
    }
    render(){       
        // let msg = [];
        // let htmlArr = [];
        // for(let i in this.props.goodsArr){
        //     msg.push(this.props.goodsArr[i])
        // }
        // msg.shift();       
        const {  goodsArr } = this.props;
               
        // msg.forEach((item,index) => {
        //     htmlArr.push(
        //         <div style = {divBox} key = {index}>
        //             <input type="checkbox" onClick = {Check} data-index={index}/>
        //             <img alt="图片加载失败" src={item.imgSrc} style = {imgStyle} />
        //             <div style = {goodNameStyle}>{item.goodName}</div>
        //             <div>
        //                 <span>￥{item.goodPrice}</span>
        //                 <span style = {floatRight}>
        //                     <span style = {smallBorder} onClick = {Sub} id={item.flag}>-</span>
        //                     <span>{item.num}</span>
        //                     <span style = {smallBorder} onClick = {Add} id={item.flag}>+</span>
        //                 </span>
        //             </div>
        //         </div>
        //     )         
        // });
        
        return(
            <div>
                {goodsArr.list.map((item, index) => {
                    if(item.num === 0){
                        return
                    }
                   return(
                        <div style = {divBox} key = {index}>
                            <input type="checkbox" checked={item.checked} onChange = {this.check.bind(this, index)}/>
                            <img alt="图片加载失败" src={item.imgSrc} style = {imgStyle} />
                            <div style = {divStyle}>
                                <span>{item.goodName}</span>
                                <Link to="/detail" style={aStyle} onClick = {this.toDetail.bind(this,index)}>详情</Link>
                            </div>
                            <div>
                                <span>￥{item.goodPrice}</span>
                                <span style = {floatRight}>
                                    <span style = {smallBorder} onClick = {this.sub.bind(this, index)}>-</span>
                                    <span>{item.num}</span>
                                    <span style = {smallBorder} onClick = {this.add.bind(this, index)}>+</span>
                                </span>
                            </div>
                        </div>)
                  })}
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
// function mapDispatchToProps(dispatch){
//     return {
//         Add,
//         Sub,
//         Check
//     }
// }
export default ShoppingCart = connect(mapStateToProps, {
    Add,
    Sub,
    Check,
    ToDetail
})(ShoppingCart);