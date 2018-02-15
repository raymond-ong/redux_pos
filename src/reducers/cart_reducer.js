import {
    ADD_CART_ITEM, 
    UPDATE_CART_ITEM
  } from '../actions/cartActions'
  
  const initialState = {
    cartList: [],
  };
  
  const cartListReducer = (stateCartList = initialState, action) => {      
      switch(action.type) {
        case ADD_CART_ITEM:
            //debugger  
            // stateCartList.cartList.push(action.item); // cannot just push to the same array...if table control sees same object, might not update its display
            //return Object.assign({}, stateCartList, {cartList: stateCartList.cartList});
            // return {
            //   cartList: [ ...stateCartList.cartList, action.item]
            // }
            
            //return Object.assign({}, stateCartList, {cartList: [...stateCartList.cartList, action.item]});
            return Object.assign({}, stateCartList, {cartList: [...stateCartList.cartList, createCartItem(action.item)]});
        case UPDATE_CART_ITEM: 
            let newCartList = [...stateCartList.cartList];
            newCartList[action.index] = action.item;
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
    