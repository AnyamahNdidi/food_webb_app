import { actionType } from "./actionType"

const initailstate = {
  foodDataBase: [],
  orderList: [],
  currentstate: null
}

export const foodReducer = (state = initailstate, { type, payload }) => {

  switch (type) {
    case actionType.ADD_TO_ORDER:
      const item = state.foodDataBase.find(el => el._id === payload._id)
      const inOrder = state.orderList.find(item => item._id === payload._id ? true : false)
      return {
        ...state,
        orderList: inOrder ? state.orderList.map(item => item._id === payload._id ?
          { ...item, qty: item.qty + 1 } : item) :
          [...state.orderList, { ...item, qty: 1 }]

      }
    case actionType.REMOVE_FROM_ORDER:
      return {
        ...state,
        orderList: state.orderList.filter(item => item._id !== payload._id)
      }
    case actionType.ADJUST_QTY:
      return {
        ...state,
        orderList: state.orderList.map(item => item._id === payload._id ? { ...item, qty: +payload.qty } : item)
      }

    case actionType.ADD_ORDER:
      return {
        ...state,
        foodDataBase: payload
      }

    case actionType.VIEW_ORDER_ITEMS:
      return {
        ...state,
        currentstate: payload
      }
    default:
      return state

  }

}