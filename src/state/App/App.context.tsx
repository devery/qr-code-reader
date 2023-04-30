import React, { useReducer } from "react";
import { AppContextInterface, AppState, ProductStatus } from "./App.definitions";
import appReducer from "./App.reducer";



const initialState: AppState = { networkId: 5, product: null, productStatus: ProductStatus.LOADING };
const AppContext = React.createContext<AppContextInterface>({ state: initialState, dispatch: () => null });


const AppProvider = ({ children }: { children: React.ReactElement }) => {

    const [state, dispatch] = useReducer(appReducer, initialState)
    return (<AppContext.Provider value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>)

}

export { AppProvider, AppContext };