import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GenreRoute from './Genre';
import HomeRoute from './Home';
import MovieRoute from './Movie';
import MylistRoute from './Mylist';
import TVRoute from './TV';

const RootRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={HomeRoute} />
      <Route path="/tv" exact component={TVRoute} />
      <Route path="/movie" exact component={MovieRoute} />
      <Route path="/movie/genre/:id" component={GenreRoute} />
      <Route path="/tv/genre/:id" component={GenreRoute} />
      <Route path="/mylist" component={MylistRoute} />
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default RootRouter;
