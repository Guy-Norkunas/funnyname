import React from 'react';
import Card from './Card'

export default class Listing extends React.Component {
    state = {listing: {}}

    componentDidMount() {
        fetch(`https://fast-peak-00857.herokuapp.com/listings/${this.props.match.params.id}`)
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
                    listing={listing.photo}
                />
            </div>
        )
    }
}