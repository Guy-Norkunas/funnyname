import React from 'react';
import Card from './Card'

export default class Listings extends React.Component {
    state = { listings: [] }

    componentDidMount() {
        fetch(`http://localhost:3000/listings`)
        .then(response => response.json())
        .then(data => this.setState({listings: data}))
        console.log('here')
    }

    render() {
        const listingsArr = this.state.listings.map((listing, index) => {
            return <Card
                key={index} 
                id={listing.id} 
                name={listing.name}
                neighbourhood={listing.neighbourhood}
                latitude={listing.latitude}
                longitude={listing.longitude}
                room_type={listing.room_type}
                price={listing.price}il
                minimum_nights={listing.minimum_nights}
                show='true'
                />
        })

        return(
            <div className="grid-container">
                {listingsArr}    
            </div>
            )
    }
}