import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import { nav as NavBar } from "./navBar";
import GoodsList from "./goodsList.js";
import ShoppingCart from "./shoppingCart.js";
import Message from "./message.js";
import Mine from "./mine.js";
import Detail from "./detail.js";

const history = createBrowserHistory();
const Routes = () => (
    <Router history={history}>
      <div>
        <NavBar />
        <div>
          <Route exact path="/" component={GoodsList} />
          <Route path="/shoppingCart" component = {ShoppingCart}/>
          <Route path="/message" component = {Message}/>
          <Route path="/mine" component = {Mine}/>
          <Route path="/detail" component = {Detail}/>
        </div>
      </div>     
    </Router>
)

export default Routes