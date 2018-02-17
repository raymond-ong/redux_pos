import * as actions from '../actions/cartActions'
  import {notify} from 'react-notify-toast';
  var _ = require('lodash');
  
  const initialState = {
    cartList: [],
    total: '0.00'
  };

  const notifyQ = notify.createShowQueue();
  
  const cartListReducer = (stateCart = initialState, action) => {      
      switch(action.type) {
        case actions.ADD_CART_ITEM:
            //debugger  
            // stateCart.cartList.push(action.item); // cannot just push to the same array...if table control sees same object, might not update its display
            //return Object.assign({}, stateCart, {cartList: stateCart.cartList});
            // return {
            //   cartList: [ ...stateCart.cartList, action.item]
            // }
            
            //return Object.assign({}, stateCart, {cartList: [...stateCart.cartList, action.item]});

            // if already added, do not allow
            if (_.findIndex(stateCart.cartList, function(currProd) {
              return currProd.name === action.item.name;
            }) >= 0) {
              notifyQ(action.item.name + ' is already in the cart', 'warning', 1500);
              return stateCart;
            }
            notifyQ(action.item.name + ' added to the cart', 'success', 1500);
            let retList = [...stateCart.cartList, createCartItem(action.item)];
            return Object.assign({}, stateCart, {
                cartList: retList,
                total: computeTotal(retList)
              });
        case actions.UPDATE_CART_ITEM:
            let updatedCartList = [...stateCart.cartList];
            updatedCartList[action.index] = action.item;
            return  Object.assign({}, stateCart, {cartList: updatedCartList, total: computeTotal(updatedCartList)});
        case actions.DELETE_CART_ITEM:
            debugger
            let myColor = { background: '#fa9797', text: "#FFFFFF" };
            notifyQ(action.item.name + ' removed from the cart', 'custom', 1500, myColor);
            let newCartList = [...stateCart.cartList];
            newCartList.splice(action.index, 1);
            return  Object.assign({}, stateCart, {cartList: newCartList, total: computeTotal(newCartList)});
      }
  
      return stateCart;
    }

    const createCartItem = (prod) => {
      return Object.assign({}, prod, {
        qty: 1,
        subtotal: prod.price
      })
    }

    const computeTotal = (cartList) => {
      debugger
      let sum = _.reduce(cartList, function(sum, item) {
          return sum + item.price * item.qty;
      }, 0);

      return sum.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    export default cartListReducer
    