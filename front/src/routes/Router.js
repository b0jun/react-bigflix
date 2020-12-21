import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomeRoute from './Home';
import MovieRoute from './Movie';
import MylistRoute from './Mylist';
import TVRoute from './TV';

const RootRouter = () => (
  <BrowserRouter>
    {/* <Header /> */}
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/tv" component={TVRoute} />
      <Route path="/movie" component={MovieRoute} />
      <Route path="/mylist" component={MylistRoute} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default RootRouter;
