import React from "react";

import { Route, Switch } from "react-router-dom";

import Game from "../pages/Game";
import Advanced from "../pages/Advanced";

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Game} />
    <Route path='/advanced' component={Advanced} />
  </Switch>
);

export default Routes;
