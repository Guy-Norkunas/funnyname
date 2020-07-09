import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Create from './Create'
import Listings from './Listings';
import Listing from './Listing';
import Nav from '../shared/Nav'

export default class App extends React.Component {
    render() {
        return(
            <>
                <Nav />
                <Switch>
                    <Route exact path="/listing/:id" component={Listing} />
                    <Route exact path="/listings" component={Listings} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        )
    }
}