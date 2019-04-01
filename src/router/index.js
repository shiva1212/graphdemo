import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Dashboard from '../container/Dashboard'

export const AppRoute = () => (
    <Router>
        <Route exact path="/dashboard" component={Dashboard} />
    </Router>
);