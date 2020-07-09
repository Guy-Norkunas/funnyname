import React from 'react';
import Form from '../shared/Form'

export default class Create extends React.Component {

    onInputChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    onFormSubmit = async (event) => {
        event.preventDefault()
        await fetch("http://localhost:3000/listings", {
          method: "POST",
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({listing: this.state})
        })
        this.props.history.push("/listings")
      }

    render() {
        return(
            <Form onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange} />
        )
    }
}