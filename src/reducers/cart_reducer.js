import * as actions from '../actions/cartActions'
  import {notify} from 'react-notify-toast';
  var _ = require('lodash');
  
  const initialState = {
    cartList: [],
  };

  const notifyQ = notify.createShowQueue();
  
  const cartListReducer = (stateCartList = initialState, action) => {      
      switch(action.type) {
        case actions.ADD_CART_ITEM:
            //debugger  
            // stateCartList.cartList.push(action.item); // cannot just push to the same array...if table control sees same object, might not update its display
            //return Object.assign({}, stateCartList, {cartList: stateCartList.cartList});
            // return {
            //   cartList: [ ...stateCartList.cartList, action.item]
            // }
            
            //return Object.assign({}, stateCartList, {cartList: [...stateCartList.cartList, action.item]});

            // if already added, do not allow
            if (_.findIndex(stateCartList.cartList, function(currProd) {
              return currProd.name === action.item.name;
            }) >= 0) {
              notifyQ(action.item.name + ' is already in the cart', 'warning', 1500);
              return stateCartList;
            }
            notifyQ(action.item.name + ' added to the cart', 'success', 1500);
            
            return Object.assign({}, stateCartList, {cartList: [...stateCartList.cartList, createCartItem(action.item)]});
        case actions.UPDATE_CART_ITEM:
            let updatedCartList = [...stateCartList.cartList];
            updatedCartList[action.index] = action.item;
            return  Object.assign({}, stateCartList, {cartList: updatedCartList});
        case actions.DELETE_CART_ITEM:
            debugger
            let myColor = { background: '#fa9797', text: "#FFFFFF" };
            notifyQ(action.item.name + ' removed from the cart', 'custom', 1500, myColor);
            let newCartList = [...stateCartList.cartList];
            newCartList.splice(action.index, 1);
            return  Object.assign({}, stateCartList, {cartList: newCartList});
      }
  
      return stateCartList;
    }

    const createCartItem = (prod) => {
      return Object.assign({}, prod, {
        qty: 1,
        subtotal: prod.price
      })
    }
    
    export default cartListReducer
    