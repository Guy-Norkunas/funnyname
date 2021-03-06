import React from 'react';
import Card from './Card'
import Search from './Search';

export default class Listings extends React.Component {
    componentDidMount() {
        fetch(`https://fast-peak-00857.herokuapp.com/listings`)
        .then(response => response.json())
        .then(data => this.setState({listings: data}))
        .catch((err) => console.log(err));
    }

    updateListings = (data) => {
        this.setState({listings: data});
    }

    render() {
        const listingsArr = this.state?.listings.map((listing, index) => {
            return( 
                <Card
                key={index} 
                id={listing.id} 
                name={listing.name}
                neighbourhood={listing.neighbourhood}
                latitude={listing.latitude}
                longitude={listing.longitude}
                room_type={listing.room_type}
                price={listing.price}il
                minimum_nights={listing.minimum_nights}
                photo_url={listing.photo_url}
                show='true'
                updateListings={this.updateListings}
                listings={this.state?.listings}
                />)
        })

        return(
            <>
                <div>
                    <Search updateListings={this.updateListings} listings={this.state?.listings} />
                </div>
                <div className="grid-container">
                    {listingsArr}    
                </div>
            </>
            )
        }
    }