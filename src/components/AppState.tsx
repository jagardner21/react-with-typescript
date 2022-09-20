import React, { createContext, useState, useContext, PropsWithChildren } from "react";

interface AppStateProviderProps {
    children: React.ReactNode;
}
    

interface AppStateValue {
    cart: {
        items: {
            name: string
            price: number
            id: number
        }[]
    }
}

const defaultStateValue: AppStateValue = {
    cart: {
        items: []
    }
}

export const AppStateContext = createContext(defaultStateValue)

export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const useSetState = () => {
    const setState = useContext(AppSetStateContext)
    if (!setState){
        throw new Error("useSetState hook called outside of the AppSetStateContext provider.")
    }
    return setState
}

const AppStateProvider: React.FC<AppStateProviderProps> = (props:AppStateProviderProps) => {
    const [state, setState] = useState(defaultStateValue);
    return (
    <AppStateContext.Provider value={state}>
        <AppSetStateContext.Provider value={setState}>
    	    {props.children}
	    </AppSetStateContext.Provider>
    </AppStateContext.Provider>
    );
};
    

export default AppStateProvider