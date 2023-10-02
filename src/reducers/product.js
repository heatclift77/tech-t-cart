const initialState = [];

const product = (state = initialState, action) => {
  if (action.type === "ADD_PRODUCT") {
    const i = state.findIndex((item) => item.id === action.payload.id);
    let result = state;
    if (i == "-1") {
      result = [
        ...state,
        {
          ...action.payload,
          subTotal: action.payload.price * action.payload.qty,
        },
      ];
    }

    return result;
  }

  if (action.type === "DELETE_PRODUCT") {
    const data = state.filter((item) => item.id !== action.payload.id);
    return data;
  }

  if (action.type === "ADD_QTY_PRODUCT") {
    const data = state.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          qty: item.qty + 1,
          subTotal: item.price * (item.qty + 1),
        };
      } else {
        return item;
      }
    });
    return data;
  }

  if (action.type === "SUBS_QTY_PRODUCT") {
    const data = state.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          qty: item.qty - 1,
          subTotal: item.price * (item.qty - 1),
        };
      } else {
        return item;
      }
    });
    return data;
  } else {
    return state;
  }
};

export default product;
