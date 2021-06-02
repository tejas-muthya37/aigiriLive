export const initialState = {
    basket: [],
    user: null,
  };
  
  export const getBasketTotal = (basket) =>

    basket?.reduce((amount, item) => amount + (Number(item.price) * item.quantity), 0);

  // export const getBasketLength = (basket) =>

  //   basket?.reduce((amount1, item1) => amount1 + (Number(item1.length) * item1.quantity), 0);

  // export const getBasketBreadth = (basket) =>

  //   basket?.reduce((amount2, item2) => amount2 + (Number(item2.breadth) * item2.quantity), 0);

  // export const getBasketHeight = (basket) =>

  //   basket?.reduce((amount3, item3) => amount3 + (Number(item3.height) * item3.quantity), 0);

  // export const getBasketWeight = (basket) =>

  //   basket?.reduce((amount4, item4) => amount4 + (Number(item4.weight) * item4.quantity), 0);
  
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
  