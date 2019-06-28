import React, { Component } from 'react';
import CurrentList from '../components/CurrentList';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/App.scss';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SentryList from './SentryList';
import Landing from '../components/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="box-layout">
          <div className="header-container">
            <Route path="/" component={Header} />
            <Route path="/" component={SubHeader} location={this.props.location} />
          </div>
          <div className="container">
            <Route exact path="/" component={Landing}/>
            <Route path="/sentries" component={SentryList} />
            <Route path="/current" component={CurrentList} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
