import React from 'react';
import Card from './Card'
import Listing from './Listing';
import Search from './Search';

export default class Listings extends React.Component {

    componentDidMount() {
        fetch(`https://fast-peak-00857.herokuapp.com/listings`)
        .then(response => response.json())
        .then(data => this.setState({listings: data}))
        .catch((err) => console.log(err));
        console.log('here')
    }

    updateListings = (data) => {
        this.setState({listings: data});
    }

    render() {

        const listingsArr = this.state?.listings.map((listing, index) => {
            return <Card

            return (<Listing
                  show='true'
                />)
        })

        return(
            <>
                <div>
                    <Search updateListings={this.updateListings} listings={this.state?.listings}/>
                </div>
                <div className="grid-container">
                    {listingsArr}    
                </div>
            </>
            )
    }
}