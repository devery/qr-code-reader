import { NetworkValues } from "@devery/devery"
import { loadProduct } from "service/deveryService"
import { AppActions, AppActionTypes } from "./App.definitions"

export const loadProductByAddress = (productId: string, networkId: NetworkValues) => {
    return async (dispatch: React.Dispatch<AppActions>) => {
        try {
            dispatch({ type: AppActionTypes.LOAD_PRODUCT_LOADING, payload: '' })
            const product = await loadProduct(productId || '', networkId)
            dispatch({ type: AppActionTypes.LOAD_PRODUCT_SUCCESS, payload: product })

        }
        catch (e) {
            dispatch({ type: AppActionTypes.LOAD_PRODUCT_ERROR })
        }

    }
}