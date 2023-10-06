// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sair from './Sair';
import Forum from './Forum'; // Importe a página do fórum

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/Sair" component={Sair} />
        <Route path="/Forum" component={Forum} /> {/* Adicione a rota para a página do fórum */}
      </Switch>
    </Router>
  );
}

export default Routes;
