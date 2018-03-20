/**
 * Created by sxy on 2018/3/13.
 */
import React,{Component} from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';


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
                        <NavItem eventKey={1} href="/react">
                            react
                        </NavItem>
                        <NavItem eventKey={2} href="/redux">
                            redux
                        </NavItem>
                        <NavItem eventKey={2} href="/udacity">
                            udacity
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} >
                         Sign Up
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}
export default NavI;