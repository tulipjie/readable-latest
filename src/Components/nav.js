/**
 * Created by sxy on 2018/3/13.
 */
import React,{Component} from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class NavI extends Component {

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
export default NavI;