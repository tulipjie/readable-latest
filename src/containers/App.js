import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './home';
import Posts from './posts';
import Categories from './categories';
import NavI from '../Components/nav';


class App extends Component {
  render() {
    return (
    <div>
        <NavI/>
        <Switch>
            <Route exact path="/"  component={Home}/>
            <Route  path="/posts" component={Posts}/>
            <Route  path="/categories" component={Categories}/>)}/>
        </Switch>
    </div>

    );
  }
}

export default  App;
