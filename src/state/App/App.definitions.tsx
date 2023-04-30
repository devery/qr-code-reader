import { NetworkValues, Product } from "@devery/devery";
import { ActionMap } from "state/state.definitions";

export enum AppActionTypes {
    CHANGE_NETWORK,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_ERROR,
    LOAD_PRODUCT_NOT_FOUND,
    LOAD_PRODUCT_LOADING,
}

export type AppPayload = {
    [AppActionTypes.CHANGE_NETWORK]: NetworkValues;
    [AppActionTypes.LOAD_PRODUCT_SUCCESS]: Product;
    [AppActionTypes.LOAD_PRODUCT_NOT_FOUND]: undefined;
    [AppActionTypes.LOAD_PRODUCT_LOADING]: string;
    [AppActionTypes.LOAD_PRODUCT_ERROR]: undefined;
}

export enum ProductStatus {
    LOADED,
    LOADING,
    ERROR,
    NOT_FOUND
}

export interface AppState {
    productStatus: ProductStatus
    product: Product | null;
    networkId: NetworkValues;
}

export interface AppContextInterface {
    state: AppState,
    dispatch: React.Dispatch<AppActions>
}

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];