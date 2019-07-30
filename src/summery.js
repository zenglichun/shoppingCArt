import React, {Component} from "react";
import {connect} from "react-redux";

const block= {
    clear:"both",
    margin:"10px",
    color:"red"
}
class Summery extends Component{

    render(){

        return(
            <div style={block}>总计：￥{this.props.goodsArr.reduce((total, e) => {
                return total + ( e.checked ? e.num * e.goodPrice : 0 )
            }, 0)}</div>
        )
        
    }
}

function mapStateToProps(state){
    return {
        goodsArr: state.list
    }
}

export default Summery = connect(mapStateToProps)(Summery);