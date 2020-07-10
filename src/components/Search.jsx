import React from 'react';


export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.search = "nothing"

    }

    compare = (a, b) => {
        const aVal = a[this.search];
        const bVal = b[this.search];
      
        let comparison = 0;
        if (aVal > bVal) {
          comparison = 1;
        } else if (aVal < bVal) {
          comparison = -1;
        }
        return comparison;
      }

      compareReverse = (a, b) => {
        const aVal = a[this.search];
        const bVal = b[this.search];
      
        let comparison = 0;
        if (aVal > bVal) {
          comparison = 1;
        } else if (aVal < bVal) {
          comparison = -1;
        }
        return comparison * -1;
      }


    sortListingsPrice = () => {
        this.setState({listings: this.props.listings.sort(this.compareReverse)})
        if (this.search === "price"){
            this.props.updateListings(this.props.listings.sort(this.compareReverse))
            this.search = "priceReverse"
        }
        else {
            this.search = "price"
            this.props.updateListings(this.props.listings.sort(this.compare))
        }
    }

    sortListingsLength = () => {
        if (this.search === "minimum_nights"){
            this.props.updateListings(this.props.listings.sort(this.compareReverse))
            this.search = "minimum_nightsReverse"
        }
        else {
            this.search = "minimum_nights"
            this.props.updateListings(this.props.listings.sort(this.compare))
        }
    }

    sortListingsDate = () => {
        if (this.search === "created_at"){
            this.props.updateListings(this.props.listings.sort(this.compareReverse))
            this.search = "created_atReverse"
        }
        else {
            this.search = "created_at"
            this.props.updateListings(this.props.listings.sort(this.compare))
        }
    }

    render() {

        return(
            <div className="box" id="search-box">
                <p>Currently sorting by: <strong>{this.search}</strong></p>
                <div className="button-box">
                    <input className="button" type="button" value="Price"  onClick={this.sortListingsPrice} />
                    <input className="button" type="button" value="Length" onClick={this.sortListingsLength} />
                    <input className="button" type="button" value="New/Old" onClick={this.sortListingsDate} />
                </div>
            </div>
        )
    }
}