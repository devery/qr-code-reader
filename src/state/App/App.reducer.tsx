import { AppActions, AppActionTypes, AppState, ProductStatus } from "./App.definitions"



const appReducer = (state: AppState, action: AppActions): AppState => {
    switch (action.type) {
        case AppActionTypes.CHANGE_NETWORK:
            return { ...state, networkId: action.payload }
        case AppActionTypes.LOAD_PRODUCT_SUCCESS:
            return { ...state, product: action.payload, productStatus: ProductStatus.LOADED }
        case AppActionTypes.LOAD_PRODUCT_LOADING:
            return { ...state, product: null, productStatus: ProductStatus.LOADING }
        case AppActionTypes.LOAD_PRODUCT_NOT_FOUND:
            return { ...state, product: null, productStatus: ProductStatus.NOT_FOUND }
        case AppActionTypes.LOAD_PRODUCT_ERROR:
            return { ...state, product: null, productStatus: ProductStatus.ERROR }
    }

    return state;
}

export default appReducer;