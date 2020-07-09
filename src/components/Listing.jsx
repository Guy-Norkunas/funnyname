import React from 'react';
import Card from './Card'

export default class Listing extends React.Component {
    state = { listing: {} }

    componentDidMount() {
        console.log('here')
        fetch(`http://localhost:3000/listings/11419589`)
        .then(response => response.json())
        .then(data => this.setState({listing: data}))
    }

    render() {
        const listing = this.state.listing
        return(
            <div className="container">
                <Card
                    key={listing.id} 
                    id={listing.id} 
                    name={listing.name}
                    neighbourhood={listing.neighbourhood}
                    latitude={listing.latitude}
                    longitude={listing.longitude}
                    room_type={listing.room_type}
                    price={listing.price}il
                    minimum_nights={listing.minimum_nights}
                />
            </div>
        )
    }
}