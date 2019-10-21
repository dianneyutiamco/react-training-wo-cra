import * as React from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Calculations } from './Calculations';
import { CalculationDetails } from './CalculationDetails';

export const App = () => {
    // TODO : maybe wrap the top-level <App> in <Router> instead
    return(
      
        <Router>
            <Link to="/home">Home</Link>
            <Link to="/calculations">Calculations</Link>

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>

                <Route path="/calculation/:id">
                    <CalculationDetails />
                </Route>

                <Route path="/calculations">
                    <Calculations />
                </Route>
            </Switch>
        </Router>
    );
}