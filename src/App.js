import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './css/styles.css';
import { Home } from './containers/Home';
import { Addemployee } from './containers/Addemployee';
import { Editemployee } from './containers/Editemployee';
import { Viewemployee } from './containers/Viewemployee';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={Addemployee} exact />
        <Route path="/edit/:id" component={Editemployee} exact />
        <Route path="/view/:token" component={Viewemployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
