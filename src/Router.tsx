import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

export default () => {
    return (
        <Router>
            <Fragment>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/favorites" component={FavoritesPage} />
            </Fragment>
        </Router>
    )
}
