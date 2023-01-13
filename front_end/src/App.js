import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Pit from "./components/login/login_register";
import Admin from "./components/login/admin_login";
import Home from "./components/Home";
import D_Summary from "./components/donor/d_home";
import Addproduct from "./components/admin/addproduct";
import DonorProfile from "./components/donor/myprofile";
import Feedback from "./components/admin/feedback";
import Validate from "./components/admin/validate";
import Dlogout from "./components/donor/logout";
import Chome from "./components/purchaser/pur_home";
import Scatlist from "./components/purchaser/scatlist";
import productalone from "./components/purchaser/productalone";
import PurchaserProfile from "./components/purchaser/myprofile";
import CartProfile from "./components/purchaser/mycart";
import Search from "./components/purchaser/search";
import Dproducts from "./components/donor/dproducts";
import Cproducts from "./components/purchaser/myproducts";
import DonorDemo from "./components/donor/donorhome";
import Dproduct from "./components/donor/donorproduct";
import Ngo from "./components/ngo/ngohome";
import NgoProfile from "./components/ngo/myprofile";
import ValidateNgo from "./components/admin/validatengo";
import Inflow from "./components/ngo/inflow";
import About1 from "./components/about1";
import Contact from "./components/contact";
import SearchReq from "./components/admin/searchreq";
import ProductReq from "./components/donor/product_req";
import RedonateReq from "./components/donor/redonate";
import AddCats from "./components/admin/add_cats";
import AdminHome from "./components/admin/admin_home";
import RegisterLogin from "./components/login/register_login";
import About2 from "./components/about2";
import C_Summary from "./components/purchaser/summary";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Pit} />
          <Route path="/admin" component={Admin} />
          <Route path="/home" component={Home} />
          <Route path="/donorhome" component={DonorDemo} />
          <Route path="/addcats" component={AddCats} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/validate" component={Validate} />
          <Route path="/addproduct" component={Addproduct} />
          <Route path="/donorprofile" component={DonorProfile} />
          <Route path="/scatlist/:scat" component={Scatlist} />
          <Route path="/pur_home" component={Chome} />
          <Route path="/cart" component={CartProfile} />
          <Route path="/purchaserprofile" component={PurchaserProfile} />
          <Route path="/dlogout" component={Dlogout} />
          <Route path="/dproducts" component={Dproducts} />
          <Route path="/psearch" component={Search} />
          <Route path="/products" component={Cproducts} />
          {/* <Route path="/demoform" component={UserForm}/> */}
          <Route path="/donorproduct" component={Dproduct} />
          <Route path="/productalone/:id" component={productalone} />
          <Route path="/ngohome" component={Ngo} />
          <Route path="/ngoprofile" component={NgoProfile} />
          <Route path="/inflow" component={Inflow} />
          <Route path="/about1" component={About1} />
          <Route path="/about2" component={About2} />
          <Route path="/contact" component={Contact} />
          <Route path="/validatengo" component={ValidateNgo} />
          <Route path="/searchrequest" component={SearchReq} />
          <Route path="/productreq" component={ProductReq} />
          <Route path="/redonatereq" component={RedonateReq} />
          <Route path="/adminhome" component={AdminHome} />
          <Route path="/register" component={RegisterLogin} />
          <Route path="/purchasersum" component={C_Summary} />
          <Route path="/donordash" component={D_Summary} />
          {/* <Route path="/demo" component={DonorDemo}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
