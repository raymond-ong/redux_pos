import {
  REQUEST_PRODUCTS, 
  RECEIVE_PRODUCTS,
  SELECT_PRODUCT,
} from '../actions/productListActions'

const initialState = {
  productsList: [],
  selectedProduct: null
};

const prodListReducer = (stateProdsJson = initialState, action) => {
    //debugger  
    switch(action.type) {
      case RECEIVE_PRODUCTS:
        //return action.products;
        return Object.assign({}, stateProdsJson, {productsList: action.products});
      case SELECT_PRODUCT:
        return Object.assign({}, stateProdsJson, {selectedProduct: action.product});
    }

    return stateProdsJson;
  }
  
  export default prodListReducer
  