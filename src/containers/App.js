import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './home';
import Posts from './posts';
import Categories from './categories';




class App extends Component {
  render() {
    return (
    <div>
        <Switch>
            <Route exact path="/"  component={Home}/>
            <Route  path="/:category/:postId" component={Posts}/>
            <Route  path="/:category" component={Categories}/>


        </Switch>
    </div>

    );
  }
}

export default  App;
