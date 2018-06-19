import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.css';

import { SearchApp, SubmitApp} from './components/App';
import Main from './components/Main';
import Review from './components/Review';

const router = (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/search" component={SearchApp}></Route>
          <Route path="/write" component={SubmitApp}></Route>
          <Route path="/view/:reviewId" component={Review}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
)

render(router, document.querySelector('#root'));
