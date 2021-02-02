import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'

// import { Container } from './styles';

function Routes() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>

  )
}

export default Routes;