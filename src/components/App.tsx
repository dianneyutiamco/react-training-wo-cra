import * as React from 'react';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Calculations } from './Calculations';
import { CalculationDetails } from './CalculationDetails';
import { NewInputParameter } from './NewInputParameter';
import { Validations } from './Validations';
import { NewValidation } from './NewValidation';
import { MasterPage } from './MasterPage';
import { NewCalculation } from './NewCalculation';

export const App = () => {
  // TODO : maybe wrap the top-level <App> in <Router> instead
  return(
    <Router>
      <Switch>
        <Route path="/validations/new">
          <MasterPage><NewValidation /></MasterPage>
        </Route>
        <Route path="/validations">
          <MasterPage><Validations /></MasterPage>
        </Route>

        <Route path="/calculations/new">
          <MasterPage><NewCalculation /></MasterPage>
        </Route>
        <Route path="/calculations/:id/inputparameter/new">
          <MasterPage><NewInputParameter /></MasterPage>
        </Route>
        <Route path="/calculations/:id">
          <MasterPage><CalculationDetails /></MasterPage>
        </Route>
        <Route path="/calculations">
          <MasterPage><Calculations /></MasterPage>
        </Route>

        <Route path="/home">
          <MasterPage><Home /></MasterPage>
        </Route>

        <Route exact path="/">
          <MasterPage><Home /></MasterPage>
        </Route>
      </Switch>
    </Router>
  );
}