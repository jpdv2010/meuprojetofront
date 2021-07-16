import React from 'react';
import Login from '../view/Login';
import Produtos from '../view/Produtos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/produtos" exact>
                        <Produtos />
                    </Route>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default DefaultLayout;