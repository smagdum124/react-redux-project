export const productReducer = (
  state = { product: [], cart: [], selectedProduct: [] },
  action
) => {
  if (action.type === "Add_Product") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  if (action.type === "Selected_Products") {
    return { ...state, selectedProduct: [action.data] };
  }
  if (action.type === "Add_Cart") {
    return { ...state, cart: [action.data, ...state.cart] };
  }
  if (action.type === "Remove_Product") {
    const filtered = state.cart.filter((item) => item !== action.data);
    return { ...state, cart: filtered };
  }
  return state;
};
