import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Home from "../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";

function Application() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/jeux" component={PageNotFound} />

        <Route path="/joueurs" component={PageNotFound} />

        <Route path="/sessions" component={PageNotFound} />

        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default Application;
