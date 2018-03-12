import React, { Component } from 'react';
 import {Route,Switch} from 'react-router-dom';
import Home from './home';
import Posts from './posts';
import Categories from './categories';


import {connect} from 'react-redux';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';


class NavItem1 extends React.Component {

    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand >
                        <a href="/"> Readable</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/posts">
                            posts
                        </NavItem>
                        <NavItem eventKey={2} href="/categories">
                            categories
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} >
                            Sign In
                        </NavItem>
                        <NavItem eventKey={2} >
                            Sign Up
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


class App extends Component {
  render() {
    return (
    <div>
        <NavItem1/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/posts" component={Posts}/>
            <Route  path="/categories" component={Categories}/>
        </Switch>
    </div>

    );
  }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts,
        categories:state.categories,
        comments:state.comments
    }
};

export default connect(mapStateToProps)(App);
