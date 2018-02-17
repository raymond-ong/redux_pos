import React, { Component } from 'react';

class ProductDetails extends Component {
    render() {
        //debugger
        const {product} = this.props;
        if (!product) {
            return <div style={{'border-radius': "5px", 'background': '#efefef', 'padding': '7px', 'border': '1px solid #cccccc'}}>No Product selected</div>;
        }
        return (
            <div style={{'border-radius': "5px", 'background': '#efefef', 'padding': '7px', 'border': '1px solid #cccccc'}}>
            <div>Selected product:</div>
            <div>Name: {product.name}</div>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>
            </div>
        );
    }
}

export default ProductDetails;