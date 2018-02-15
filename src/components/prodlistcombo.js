import React, { Component } from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ProdListCombo extends Component {
    render() {
        // return (
        // <div>
        // <p> Select Product </p>
        // <datalist  id="productsList">
        // {this.getProducts()}
        // </datalist >
        // <input type="text" list="productsList" name="other" onChange={this.onChangeHandler.bind(this)}/>
        // </div>);
        //debugger
        return (            
        <Select
            ref="productsCombo"
            options={this.getProductsForReactSelect()}
            simpleValue
            clearable
            name="select-product"
            labelKey="label"
            valueKey="value"
            value={this.selectValue}
            onChange={this.updateValue.bind(this)}
        />);
    }

    getProductsFordatalist() {
        if (!this.props || !this.props.products) {
            return [];
        }
        let products = this.props.products;
        //debugger
        return products.map(p => <option value={p.name} key={p.name}/>)
    }

    getProductsForReactSelect() {
        if (!this.props || !this.props.products) {
            return [];
        }
        let products = this.props.products;
        //debugger
        return products.map(p => ({value: p.name, label: p.name}));
    }

    onChangeHandler(event) {
        console.log('[DEBUG] onChange: ' + event.target.value);
        this.props.onChangeHandler(event.target.value);
    }

    updateValue (newValue) {
        if (!newValue) {
            return;
        }
        //debugger
        this.selectValue = newValue;
        this.props.onChangeHandler(newValue);
	}
}

export default ProdListCombo