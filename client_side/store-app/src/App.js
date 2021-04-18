import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createMenu from './components/Menu/createMenu';
import displayMenuList from './components/Menu/displayMenuList';
import displayMenuDetail from './components/Menu/displayMenuDetail';

import './index.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={displayMenuList}></Route>
          {/* <Route path='/display-detail' component={displayMenuDetail}></Route> */}
          <Route path='/create-menu' component={createMenu}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
