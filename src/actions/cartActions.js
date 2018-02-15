export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

export const addItemToCart = (prod) => ({
  type: ADD_CART_ITEM,
  item: prod
})

export const UpdateCartItem = (item, index) => ({
  type: UPDATE_CART_ITEM,
  item,
  index
})