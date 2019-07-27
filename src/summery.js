import React, {Component} from "react";
import {connect} from "react-redux";

class Summery extends Component{

    render(){
        const block= {
            clear:"both",
            margin:"10px",
            color:"red"
        }
        return(
            <div style={block}>总计：￥{this.props.goodsArr[0].sum}</div>
        )
        
    }
}

function mapStateToProps(state){
    return {
        goodsArr: state
    }
}

export default Summery = connect(mapStateToProps)(Summery);