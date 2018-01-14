import React, { Component } from 'react';

class ProdListCombo extends Component {
    render() {
        return (
        <div>
        <p> Select Product </p>
        <datalist  id="productsList">
        {this.getProducts()}
        </datalist >
        <input type="text" list="productsList" name="other" onChange={this.onChangeHandler.bind(this)}/>
        </div>);
    }

    getProducts() {
        if (!this.props || !this.props.products) {
            return [];
        }
        let products = this.props.products;
        //debugger
        return products.map(p => <option value={p.name} key={p.name}/>)
    }

    onChangeHandler(event) {
        console.log('[DEBUG] onChange: ' + event.target.value);
        this.props.onChangeHandler(event.target.value);
    }
}

export default ProdListCombo