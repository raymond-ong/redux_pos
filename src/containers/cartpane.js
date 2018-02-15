import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cartActions'

import ReactTable from 'react-table';
import "react-table/react-table.css";
import 'font-awesome/css/font-awesome.min.css'
var FontAwesome = require('react-fontawesome')



class CartPane extends Component {
    constructor() {
        super();
        this.renderEditable = this.renderEditable.bind(this);
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
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, 
          {
            Header: 'Quantity',
            accessor: 'qty',
            width: 100,
            Cell: this.renderEditable
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
            Cell: ({value}) => (<FontAwesome className="times" 
                                name="times"                                 
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', cursor: 'pointer', color: 'red' }}
                                onClick={() =>this.handleButtonClick({value})}/>)
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
                />

            </div>
        );
    }

    handleButtonClick(input) {
        //debugger
        console.log('[DEBUG] clicked button row!');
    }

    renderEditable(cellInfo) {
        debugger
        return (
          <div
            style={{ backgroundColor: "#f0f0f0" }}
            className='number'
            contentEditable
            suppressContentEditableWarning
            onBlur={this.renderEditableBlurHandler.bind(this, cellInfo)}
            dangerouslySetInnerHTML={{
              //__html: this.state.data[cellInfo.index][cellInfo.column.id]
              __html: this.props.cart.cartList[cellInfo.index].qty
            }}
          />
        );
      }    

      renderEditableBlurHandler(cellInfo, eBlur) {
          // set the quantity props
          debugger
          let idx = cellInfo.index;
          let content = eBlur.target.innerHTML;
          // todo validate that it is a number
          let item = this.props.cart.cartList[idx];
          item.qty = parseFloat(content).toFixed(2);
          // update the subtotal
          item.subtotal = item.qty * item.price;
          this.props.actions.UpdateCartItem(item, idx);
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