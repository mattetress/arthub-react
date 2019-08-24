import React from 'react';
import './App.css';
import Landing from './components/Landing';
import RegistrationContainer from './containers/RegistrationContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={RegistrationContainer} />
      </Switch>
    </Router>
  );
}

export default App;
