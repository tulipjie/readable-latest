import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
// import {createStore} from 'redux';
// import reducer from './Reducers';
import registerServiceWorker from './registerServiceWorker';
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
// const store=createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
    <BrowserRouter >
        <div>
           <NavItem1/>
            <App />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
