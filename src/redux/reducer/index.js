import { todoReducer } from "./todoReducer";
import { combineReducers } from 'redux'
import { bycyleReducer } from "./bycyleReducer";


const rootReducer = combineReducers({
    todo: todoReducer,
    bycyle: bycyleReducer
})

export default rootReducer;