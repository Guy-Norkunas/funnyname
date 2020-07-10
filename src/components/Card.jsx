import React from 'react';
import { Link } from "react-router-dom";
import { Card, Media, Content, Heading } from 'react-bulma-components';

export default class ListingCard extends React.Component {

    deleteListing = async (id) => {
        await fetch(`http://localhost:3000/listings/${id}`, {
          method: "DELETE"
        })
        // this.props.history.push("/listings")
    }

    
    render() {
        return(
            <div className="container">
                <div className="card-container">
                    <Card>
                        <Card.Image size="4by3" src="https://source.unsplash.com/400x300/?house" />
                        <Card.Content>
                        <Media>
                            <Media.Item>
                            <Heading size={4}>{this.props.name}</Heading>
                            <Heading subtitle size={6}>{this.props.neighbourhood}</Heading>
                            </Media.Item>
                        </Media>
                        <Content>
                        {this.props.neighbourhood} | {this.props.room_type} | Minimum nights: {this.props.minimum_nights} | ${this.props.price}/night
                        </Content>
                        </Card.Content>
                        <Card.Footer>
                            {this.props.show && <Card.Footer.Item renderAs="div" href="#Yes">
                                <Link to={`/listing/${this.props.id}`}>Show</Link>
                            </Card.Footer.Item>}
                            <Card.Footer.Item renderAs="div" href="#Yes">
                                <Link to={`/edit/${this.props.id}`}>Edit</Link>
                            </Card.Footer.Item>
                            <Card.Footer.Item renderAs="a" href="#Maybe" onClick={this.deleteListing(this.props.id)}>Delete</Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        )
    }
}