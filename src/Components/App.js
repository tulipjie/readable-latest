import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Posts from './posts';
import Categories from './categories';
import Home from './home';


class App extends Component {
  render() {
    return (
      <div>
          <Route path="/" component={Home}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/categories" component={Categories}/>
      </div>
    );
  }
}

export default App;
