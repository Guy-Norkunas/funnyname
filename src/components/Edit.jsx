import React from 'react';
import Form from '../shared/Form'

export default class Edit extends React.Component {
    state = { listing: {} }
    componentDidMount() {
        console.log('here')
        fetch(`https://fast-peak-00857.herokuapp.com/listings/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => this.setState({listing: data}))
    }

    onInputChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        await fetch(`https://fast-peak-00857.herokuapp.com/listings/${this.props.match.params.id}`, {
          method: "PUT",
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({listing: this.state})
        })
        this.props.history.push("/listings")
    }
    
    render() {
        return(
            <div className="general-container">
                <Form listing={this.state.listing} onFormSubmit={this.onFormSubmit} onInputChange={this.onInputChange}/>
            </div>
        )
    }
}