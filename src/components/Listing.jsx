import React from 'react';

export default class Listing extends React.Component {
    render() {
        return(
            <div class="card">
                <h1>{this.props.name}</h1>
                <hr></hr>
                <h3>{this.props.neighbourhood} | {this.props.room_type} | Minimum nights: {this.props.minimum_nights} | ${this.props.price}/night</h3>
                <hr></hr>
            </div>
        )
    }
}