import React from 'react';
import Card from './Card'

export default class Listings extends React.Component {

    componentDidMount() {
        fetch(`http://fast-peak-00857.herokuapp.com/listings`)
        .then(response => response.json())
        .then(data => this.setState({listings: data}))
        .catch((err) => console.log(err));
        console.log('here')
    }

    render() {
<<<<<<< HEAD
        const listingsArr = this.state.listings.map((listing, index) => {
            return <Card
=======
        const listingsArr = this.state?.listings.map((listing, index) => {
            return <Listing
>>>>>>> f94b8a022f1b232f1a08c225f6d7a60c2d53703f
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