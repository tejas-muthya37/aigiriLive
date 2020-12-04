export const initialState = {
    basket: [],
    user: null,
  };
  
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + (Number(item.price) * item.quantity), 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        let newBasket = [...state.basket];
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(`Can't remove this item from the basket!`);
        }
  
        return {
          ...state,
          basket: newBasket,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  