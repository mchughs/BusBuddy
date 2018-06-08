import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import MainPage from './components/MainPage';
import SubmitReview from './components/SubmitReview';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/submit-review' component={SubmitReview}/>
      </Switch>
    </BrowserRouter>
  );
}

render(<Root/>, document.querySelector('#root'));
