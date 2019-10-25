import * as React from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Calculations } from './Calculations';
import { CalculationDetails } from './CalculationDetails';
import { NewInputParameter } from './NewInputParameter';
import { Validations } from './Validations';
import { NewValidation } from './NewValidation';

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

                <Route path="/validations/new">
                  <NewValidation />
                </Route>

                <Route path="/validations">
                  <Validations />
                </Route>

                <Route path="/calculations/:id/inputparameter/new">
                    <NewInputParameter />
                </Route>

                <Route path="/calculations/:id">
                    <CalculationDetails />
                </Route>

                <Route path="/calculations">
                    <Calculations />
                </Route>
                
            </Switch>
        </Router>
    );
}