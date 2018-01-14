import { combineReducers } from 'redux'
//import prodListReducer from './prod_list_reducer'
import products from './prod_list_reducer' // Note: this naming affects the property of the state inside the container's mapToXXX

const posApp = combineReducers({
  products    
})

export default posApp
