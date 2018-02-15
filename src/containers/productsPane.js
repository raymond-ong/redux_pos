import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProdListCombo from '../components/prodlistcombo'
import ProductDetails from '../components/prod_details'
// import {receiveProducts} from '../actions/productListActions'
import * as prodListActions from '../actions/productListActions'
import * as cartActions from '../actions/cartActions'
import {selectProducts} from '../actions/productListActions'

var _ = require('lodash');

class ProductsPane extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {productsList, selectedProduct} = this.props.products;
    //debugger
    return (
    <div>
    <ProdListCombo className="ProductsList" products={productsList} onChangeHandler={this.productChanged.bind(this)}/>
    <br/>
    <ProductDetails product={selectedProduct}/>
    <br/>
    <button 
      disabled={this.isProductSelected() ? '' : 'disabled'}
      onClick={this.addCartClicked.bind(this)}
      >Add to Cart</button>
    </div>
    );
  }

  productChanged(prodValue) {    
    //debugger
    console.log('[DEBUG][productsPane] new prodValue: ' + prodValue)
    let idx = _.findIndex(this.props.products.productsList, function(prod) {
      return prod.name === prodValue;
    });
    if (idx === -1) {
      console.log('[DEBUG] Did not find value');
      this.props.actions.selectProduct(null);
      return;
    }

    let selectedProd = this.props.products.productsList[idx];
    // Note: calling this actually re-renders the entire ProductsPane. The products combobox also re-rendered.
    this.props.actions.selectProduct(selectedProd);
  }

  isProductSelected() {
    return this.props.products.selectedProduct !== null;
  }

  addCartClicked() {
    //debugger
    let selProd = this.props.products.selectedProduct;   
    this.props.cartActions.addItemToCart(selProd);
  }
}

function mapStateToProps(state, ownProps) {
  //debugger
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(prodListActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
  };
}

// Subscribe to the store for changes
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPane);