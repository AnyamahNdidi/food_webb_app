import { combineReducers } from "redux"
import { foodReducer } from "./reducerstate"

export const reducer = combineReducers({
  shop: foodReducer
})