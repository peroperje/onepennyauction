import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore'
import App from './App';
import About from './About'
import LoginPage from './containers/LoginPage';

import * as routePath from './constants/Route'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import initState from './store/initialState';
import {makeBid} from './actions'

const intSatet = initState();
let store = configureStore(intSatet);

const autoBid = (store)=>{
    const {auctions,users,rules} = store.getState();
    auctions.forEach((a)=>{
        let  bidder = users[Math.floor(Math.random()*users.length)];
        console.log(bidder)
        let actionRule = rules.find(r=>r.ruleID === a.ruleID);

        store.dispatch(
            makeBid(
                a.auctionID,
                actionRule.increaseRatePrice,
                actionRule.increaseRateTime,
                bidder.userID
            )
        );
    });
}
ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path={routePath.HOME} component={App} onEnter={autoBid(store)}>

              <Route path={routePath.ABOUT} component={About}/>
              <Route path={routePath.LOGIN} component={LoginPage}/>
          </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
