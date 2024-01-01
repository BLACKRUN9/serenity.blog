// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext';
import App from './App';

const Root = () => {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </AppProvider>
    </Router>
  );
};

export default Root;
