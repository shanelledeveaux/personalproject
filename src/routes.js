import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import Dashboard from "./components/Dashboard/Dashboard";
import AddFamily from "./components/FamilyScreens/AddFamily/AddFamily";
import AddMember from "./components/FamilyScreens/AddMember/AddMember";
import Screen3 from "./components/FamilyScreens/Screen3/Screen3";
import Screen4 from "./components/FamilyScreens/Screen4/Screen4";
import Screen5 from "./components/FamilyScreens/Screen5/Screen5";
import CompleteFamily from "./components/FamilyScreens/CompleteFamily/CompleteFamily";

export default (
  <Switch>
    <Route component={Landingpage} exact path="/" />
    <Route component={Dashboard} path="/Dash" />
    <Switch>
      <Route component={AddFamily} path="/AddFamily" />
      {/* <Route component={ViewFamily} path="/family/:id" /> */}
      <Route component={AddMember} path="/Family/:id/AddMember" />
      <Route component={Screen5} path="/Family/:id/Screen5" />
      <Route component={CompleteFamily} path="/Family/:id" />
      <Route component={Screen3} path="/Screen3" />
      <Route component={Screen4} path="/Screen4" />
    </Switch>
  </Switch>
);
