import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './home';
import Listings from './listings';
import Listing from './listing';
import Navbar from '../shared/navbar'

export default class App extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/listing/:id" component={Listing} />
                    <Route exact path="/listing" component={Listings} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        )
    }
}