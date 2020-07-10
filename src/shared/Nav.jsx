import React from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return(
            <div className="nav">
                <Navbar className="is-danger">
                    <Navbar.Brand>
                        <Navbar.Item renderAs="div" href="#">
                            <img src="http://logosvg.com/wp-content/uploads/Airbnb_logo.svg" alt="Bulma: a modern CSS framework based on Flexbox" />
                        </Navbar.Item>
                    <Navbar.Burger />
                    </Navbar.Brand>
                    <Navbar.Menu >
                    <Navbar.Container>
                        <Navbar.Item renderAs="div" href="#">
                            <Link className="nav-link" to="/">Home</Link>
                        </Navbar.Item>
                        <Navbar.Item renderAs="div" href="#">
                            <Link className="nav-link" to="/listings">Listings</Link>
                        </Navbar.Item>
                        <Navbar.Item renderAs="div" href="#">
                            <Link className="nav-link" to="/create">Create Listing</Link>
                        </Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">
                            <h2>Airbnb</h2>
                        </Navbar.Item>
                    </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
            </div>
        )
    }
}
