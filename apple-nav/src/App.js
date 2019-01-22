import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TopNav from './components/TopNav/TopNav';
import SubNav from './components/SubNav/SubNav';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
      <TopNav />
      <Route 
        path="/:productLine" 
        render={props => <SubNav {...props} />}
      /> 
      </div>
    );
  }
}

export default App;
