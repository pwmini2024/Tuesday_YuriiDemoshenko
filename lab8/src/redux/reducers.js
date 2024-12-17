import { TOGGLE_LIKED, ADD_TO_BASKET, REMOVE_FROM_BASKET, DELETE_FROM_BASKET} from "./actions";
import productsData from "../data";

const initialState = {
    products: productsData,
    likedProducts: [],
    productsInBasket: [],
};

const rootReducer = (state = initialState, action) => {
    const productId = action.payload;

    switch (action.type) {
        case TOGGLE_LIKED:
            const isLiked = state.likedProducts.includes(productId);
            const likedProducts = isLiked
                ? state.likedProducts.filter((id) => id !== productId)
                : [...state.likedProducts, productId];
            return {
                ...state,
                likedProducts,
            };
        case ADD_TO_BASKET:
            const productInBasket = state.productsInBasket.find(product => product.id === productId);
            const productsInBasket = productInBasket
                ? state.productsInBasket.map(product =>
                    product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
                  )
                : [...state.productsInBasket, { id: productId, quantity: 1 }];
            return {
                ...state,
                productsInBasket,
            };
        case REMOVE_FROM_BASKET:
            const productToRemove = state.productsInBasket.find(product => product.id === productId);
            const updatedProductsInBasket = productToRemove.quantity > 1
                ? state.productsInBasket.map(product =>
                    product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
                  )
                : state.productsInBasket.filter(product => product.id !== productId);
            return {
                ...state,
                productsInBasket: updatedProductsInBasket,
            };
        case DELETE_FROM_BASKET:
            const productToDelete = state.productsInBasket.find(product => product.id === productId);
            const productIndexToDelete = state.productsInBasket.indexOf(product => product.id === productId);
            const updProductsInBasket = productToDelete.quantity > 1
                ? state.productsInBasket.splice(productIndexToDelete,productIndexToDelete)
                : state.productsInBasket.filter(product => product.id !== productId);
            return {
                ...state,
                productsInBasket: updProductsInBasket,
            };
        default:
            return state;
    }
};

export default rootReducer;