import React from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return(
            <Navbar >
                <Navbar.Brand>
                    <Navbar.Item renderAs="div" href="#">
                        <img src="http://logosvg.com/wp-content/uploads/Airbnb_logo.svg" alt="Bulma: a modern CSS framework based on Flexbox" />
                    </Navbar.Item>
                <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                <Navbar.Container>
                    <Navbar.Item dropdown hoverable href="#">
                    <Navbar.Link>
                        Dropdown
                    </Navbar.Link>
                    <Navbar.Dropdown>
                        <Navbar.Item href="#">
                        Subitem 1
                        </Navbar.Item>
                        <Navbar.Item href="#">
                        Subitem 2
                        </Navbar.Item>
                    </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item renderAs="div" href="#">
                        <Link to="/">Home</Link>
                    </Navbar.Item>
                    <Navbar.Item renderAs="div" href="#">
                        <Link to="/listings">Listings</Link>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item href="#">
                        AirBnB
                    </Navbar.Item>
                </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}
