export const getCartProducts = (state) => {
    return state.cart.items.map((id) => state.products.items.find((product) => product.id === id));
}