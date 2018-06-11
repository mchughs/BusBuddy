import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.css';

import App from './components/App';
import Main from './components/Main';
import Review from './components/Review';

const router = (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/search" component={App}></Route>
          <Route path="/view/:reviewId" component={Review}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
)

render(router, document.querySelector('#root'));
