export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'

export const addItemToCart = (prod) => ({
  type: ADD_CART_ITEM,
  item: prod
})

export const UpdateCartItem = (item, index) => ({
  type: UPDATE_CART_ITEM,
  item,
  index
})

export const deleteCartItem = (item, index) => ({
  type: DELETE_CART_ITEM,
  item,
  index
})

export function submitCart(cartList) {
  console.log('submitCart');
  return function(dispatch) {
    console.log('submitCart dispatch');
    return fetch(`http://localhost:3001/cart`, 
    {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(cartList)   
    })
    .then(response => response.text())
    .then(json => {
      //debugger
      console.log(json);
    });      
  }
}