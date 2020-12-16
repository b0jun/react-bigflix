import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

const RootRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default RootRouter;
