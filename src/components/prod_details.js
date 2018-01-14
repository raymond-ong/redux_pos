import React, { Component } from 'react';

class ProductDetails extends Component {
    render() {
        //debugger
        const {product} = this.props;
        if (!product) {
            return <div>Please select a product</div>;
        }
        return (
            <div>
            <div>Selected product:</div>
            <div>Name: {product.name}</div>
            <div>Description: {product.description}</div>
            <div>Price: {product.price}</div>
            </div>
        );
    }
}

export default ProductDetails;