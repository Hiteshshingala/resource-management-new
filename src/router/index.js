import React from "react";
import { Route, Switch } from "react-router-dom";

// import Login from "../components/auth/login";
import Dashboard from "../pages/dashboard";
// import NavBar from "../../common/navBar";
// import Footer from "../../common/footer/footer";

const Routers = () => (
  <>
    <Switch>
      <Route exact path="/" component={Dashboard}></Route>
      {/* <Route  exact path="/login" component={Login}></Route>
      <Route  exact path="/sign-up" component={SignUP}></Route> */}
    
    </Switch>
  </>
);

export default Routers;