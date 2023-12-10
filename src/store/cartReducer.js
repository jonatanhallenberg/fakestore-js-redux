const initialState = {
    items: [],
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
}

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.items.find((id) => id === action.payload.id)) {
                return state;
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload.id],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((id) => id !== action.payload.id),
            };
        default:
            return state;
    }
};
export default cartReducer;