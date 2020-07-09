import React from 'react';

export default class Listing extends React.Component {
    render() {
        return(
            <>
                <h1>{this.props.id}: {this.props.name}</h1>
            </>
        )
    }
}