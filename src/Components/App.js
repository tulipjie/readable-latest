import React, { Component } from 'react';
 import {Route,Switch} from 'react-router-dom';
import Home from './home';
import Posts from './posts';
import Categories from './categories';
import *as PostsAPI from '../utils/PostsAPI';
import *as CategoriesAPI from '../utils/CategoriesAPI';
import {addPost,addComment,removePost,removeComment,editPost,editComment} from '../Actions';


import {connect} from 'react-redux';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';


class NavItem1 extends Component {

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
    state={
        posts:[],
        comments:[],
        categories:[]
    };
    componentDidMount(){
        PostsAPI.getAll().then((posts) =>{
            this.setState({posts})
        });
        CategoriesAPI .getAll().then((categories) =>{
            this.setState({categories})
        });
    }


  render() {
      

    return (
    <div>
        <NavItem1/>
        <Switch>
            <Route exact path="/"  render={()=>(<Home state={this.props}/>)}/>
            <Route  path="/posts" render={()=>(<Posts state={this.props}/>)}/>
            <Route  path="/categories" render={()=>(<Categories state={this.props}/>)}/>
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

const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(data) =>dispatch(addPost(data)),
        addComment:(data)=>dispatch(addComment(data)),
        removePost:(data)=>dispatch(removePost(data)),
        removeComment:(data)=>dispatch(removeComment(data)),
        editPost:(data)=>dispatch(editPost(data)),
        editComment:(data)=>dispatch(editComment(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
