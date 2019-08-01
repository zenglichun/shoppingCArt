import React from "react";
import { Router, Route} from "react-router-dom";
import { history } from "./utils";

import GoodsList from "./goodsList.js";
import ShoppingCart from "./shoppingCart.js";
import Message from "./message.js";
import Mine from "./mine.js";
import Detail from "./detail.js";


const Routes = () => (
  <Router history={history}>
    <Route exact path="/" component={GoodsList} />
    <Route path="/shoppingCart" component = {ShoppingCart}/>
    <Route path="/message" component = {Message}/>
    <Route path="/mine" component = {Mine}/>
    <Route path="/detail" component = {Detail}/>              
  </Router>
)

export default Routes