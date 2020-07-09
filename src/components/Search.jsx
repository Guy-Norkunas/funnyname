import React from 'react';


export default class Search extends React.Component {
    constructor(){
        super()
        this.variable = "none"

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
        if (this.search == "price"){
            this.props.updateListings(this.props.listings.sort(this.compareReverse))
            this.search = "priceReverse"
        }
        else {
            this.search = "price"
            this.props.updateListings(this.props.listings.sort(this.compare))
        }
    }

    sortListingsLength = () => {
        if (this.search == "minimum_nights"){
            this.props.updateListings(this.props.listings.sort(this.compareReverse))
            this.search = "minimum_nightsReverse"
        }
        else {
            this.search = "minimum_nights"
            this.props.updateListings(this.props.listings.sort(this.compare))
        }
    }

    sortListingsDate = () => {
        if (this.search == "created_at"){
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
            <>
                <input type="button" value="Price"  onClick={this.sortListingsPrice} />
                <input type="button" value="Length" onClick={this.sortListingsLength} />
                <input type="button" value="New/Old" onClick={this.sortListingsDate} />
            </>
        )
    }
}