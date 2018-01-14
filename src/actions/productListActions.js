export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'


export function fetchProducts() {
  console.log('fetchProducts');
  return function(dispatch) {
    console.log('fetchProducts dispatch');
    return fetch(`http://localhost:3001/products`)
      .then(response => response.json())
      .then(json => {
        //debugger
        dispatch(receiveProducts(json))
      });
  }
}

export const receiveProducts = (jsonProds) => ({
  type: RECEIVE_PRODUCTS,
  products: jsonProds,
  receivedAt: Date.now()
})

export const selectProduct = (jsonProd) => ({
  type: SELECT_PRODUCT,
  product: jsonProd
})