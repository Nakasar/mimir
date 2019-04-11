import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Home from "../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

function Application() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default Application;
