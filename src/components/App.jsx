import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Listings from './Listings';
import Listing from './Listing';
import Navbar from '../shared/Navbar'

export default class App extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/listing/:id" component={Listing} />
                    <Route exact path="/listings" component={Listings} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        )
    }
}