import React from 'react';

export default class Form extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.onFormSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.name} className="input" type="text"name="name" id="name" onChange={this.props.onInputChange}></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Neighbourhood</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.neighbourhood} className="input" type="text" name="neighbourhood" id="neighbourhood" onChange={this.props.onInputChange}></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Room Type</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.room_type} className="input" type="text" name="room_type" id="room_type" onChange={this.props.onInputChange}></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.price} className="input" type="text" name="price" id="price" onChange={this.props.onInputChange}></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Minimum Nights</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.minimum_nights} className="input" type="text" name="minimum_nights" id="minimum_nights" onChange={this.props.onInputChange}></input>                    </div>
                </div>
                <div className="field">
                    <label className="label">Latitude</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.latitude} className="input" type="text" name="latitude" id="latitude" onChange={this.props.onInputChange}></input>                    </div>
                </div>
                <div className="field">
                    <label className="label">Longitude</label>
                    <div className="control">
                        <input placeholder={this.props.listing && this.props.listing.longitude} className="input" type="text" name="longitude" id="longitude" onChange={this.props.onInputChange}></input>                    </div>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <button className="button is-danger is-link" type="submit">Submit</button>
                </div>
                <div class="control">
                    <button className="button form-button">Cancel</button>
                </div>
                </div>

            </form>
        )
    }
}