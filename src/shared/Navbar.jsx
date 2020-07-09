import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return(
            <nav>
            <Link to="/">Home</Link>
            <Link to="/listings">Listings</Link>
          </nav>
        )
    }
}
