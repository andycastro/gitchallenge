import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main/main";
import DetailsUser from "./pages/detailsUser/detailsUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/details/:login">
          <DetailsUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
