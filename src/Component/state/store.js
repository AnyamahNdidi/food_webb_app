import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducer } from "./myreducer"

export const store = createStore(reducer, composeWithDevTools())