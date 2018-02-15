import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cartActions'

import ReactTable from 'react-table';
import "react-table/react-table.css";
import 'font-awesome/css/font-awesome.min.css'

import NumericInput from 'react-numeric-input';

var FontAwesome = require('react-fontawesome')



class CartPane extends Component {
    constructor() {
        super();
        this.renderEditableQty = this.renderEditableQty.bind(this);
        this.renderEditablePrice = this.renderEditablePrice.bind(this);
        this.renderDeleteButton = this.renderDeleteButton.bind(this);
        this.columns = [{
            Header: 'Product',
            accessor: 'name', // String-based value accessors!
            width: 150,
          }, 
          {
            Header: 'Description',
            accessor: 'description',            
          }, 
          {
            Header: 'Unit Price',
            accessor: 'price',
            width: 100,
            Cell: this.renderEditablePrice
          }, 
          {
            Header: 'Quantity',
            accessor: 'qty',
            width: 100,
            Cell: this.renderEditableQty
        }, 
        {
            Header: 'Subtotal',
            accessor: 'subtotal',
            width: 120,
        },         
        {
            id: 'click-me-button2',
            Header: '',
            width: 25,
            accessor: 'firstName',
            id: 'mybutton',
            // Cell: ({value}) => (<FontAwesome className="times" 
            //                     name="times"                                 
            //                     style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', cursor: 'pointer', color: 'red' }}
            //                     onClick={() =>this.onDeleteItem({value})}/>)
            Cell: this.renderDeleteButton
        }
    ];
    
    }

    render() {
        //debugger
        return (
            <div>
                <ReactTable
                data={this.props.cart.cartList}
                columns={this.columns}
                className="-highlight"
                />           
            </div>
            
        );
    }

    onDeleteItem(cellInfo) {
        //debugger
        let item = this.props.cart.cartList[cellInfo.index];
        console.log('[DEBUG] clicked button row!');
        this.props.actions.deleteCartItem(item, cellInfo.index);
    }

    onChangeQty(cellInfo, newValue, newValStr, e) {
        debugger
        let idx = cellInfo.index;
        let item = this.props.cart.cartList[idx];
        if (!newValue) {
            item.subtotal = 0;
            item.qty = null;
        }
        else {
            item.qty = newValue;
            item.subtotal = item.qty * item.price;
        }                        
        
        this.props.actions.UpdateCartItem(item, idx);
    }

    renderDeleteButton(cellInfo) {
        return (
            <FontAwesome className="times" 
                name="times"                                 
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', cursor: 'pointer', color: 'red' }}
                onClick={this.onDeleteItem.bind(this, cellInfo)}
            />
          );
    }

    renderEditableQty(cellInfo) {
        debugger
        return (
          <NumericInput 
            value={cellInfo.value}
            style={{ input: {width: 93} }}
            onChange={this.onChangeQty.bind(this, cellInfo)}
          />
        );
      }

    onChangePrice(cellInfo, newValue, newValStr, e) {
        debugger
        let idx = cellInfo.index;
        let item = this.props.cart.cartList[idx];
        if (!newValue) {
            item.subtotal = 0;
            item.price = null;
        }
        else {
            item.price = newValue;
            item.subtotal = item.qty * item.price;
        }                        
        
        this.props.actions.UpdateCartItem(item, idx);
    }

    renderEditablePrice(cellInfo) {
        debugger
        return (
          <NumericInput 
            value={cellInfo.value}
            style={{ input: {width: 93} }}
            onChange={this.onChangePrice.bind(this, cellInfo)}
          />
        );
      }    
}

function mapStateToProps(state, ownProps) {
    //debugger
    return {
      cart: state.cart
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(cartActions, dispatch)
    };
  }
  
  // Subscribe to the store for changes
  export default connect(mapStateToProps, mapDispatchToProps)(CartPane);