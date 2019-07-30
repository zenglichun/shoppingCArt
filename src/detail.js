import React, {Component} from "react";
import {connect} from "react-redux";


const divBox = {
    margin:"0 auto",
    width:"350px",
    height:"480px",
    border:"1px solid grey"
}
const imgStyle = {
    width:"350px",
    height:"300px",
}
const divStyle = {
    textAlign:"center",
}
const floatRight = {
    float:"right",
    marginRight:"5px",
}
const margin = {
    margin:"10px"
}

class Detail extends Component{
    render(){
        const { detail } = this.props;
        return(
            <div style = {divBox} >
                <img alt="图片加载失败" src={detail.imgSrc} style = {imgStyle} />
                <div style = {divStyle}>
                    <span>{detail.goodName}</span>
                </div>
                <div style={margin}>
                    <span>￥{detail.goodPrice}</span>
                    <span style={floatRight}>种类：{detail.type}</span>
                </div>
                <div style={margin}>
                    <span>年龄：{detail.age}岁</span>
                    <span style={floatRight}>性别：{detail.sex}</span>
                </div>
                <div style={margin}>出生地：{detail.place}</div>
                <div style={margin}>描述：{detail.describe}</div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        detail: state.detail
    }
}
export default Detail = connect(mapStateToProps)(Detail);