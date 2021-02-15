import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import HomePage from "./pages/HomePage"
import NamePage from "./pages/NamePage"


const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component = {HomePage}
                 />
                <Route path="/:name" exact component = {NamePage}
                 />
            </Switch>
        </Router>
    )
}

export default Routes