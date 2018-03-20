import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Categories from './Categories';
import NotFound from '../Components/NotFound';

class App extends Component {
  render() {
    return (
    <React.Fragment>
        <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/:category/:postId" component={Posts}/>
            <Route exact path="/:category" component={Categories}/>
            <Route component={NotFound}/>
        </Switch>
    </React.Fragment>
    );
  }
}

export default  App;
