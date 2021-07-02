import { actionType } from "./actionType"

export const addToOrder = (itemID) => {
  return {
    type: actionType.ADD_TO_ORDER,
    payload: {
      _id: itemID
    }
  };
};

export const removeFromOrder = (itemID) => {
  return {
    type: actionType.REMOVE_FROM_ORDER,
    payload: {
      _id: itemID
    }
  }
}
export const adjustOrder = (itemID, value) => {
  return {
    type: actionType.ADJUST_QTY,
    payload: {
      _id: itemID,
      qty: value
    }
  }

}

export const viewOrderItem = (itemID) => {
  return {
    type: actionType.VIEW_ORDER_ITEMS,
    payload: {
      id: itemID
    }
  }
}

export const addOrder = (item) => {
  return {
    type: actionType.ADD_ORDER,
    payload: item
  }
}