import React, { createContext, useState } from "react";

interface Props {
    children: React.ReactNode
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

const AppStateProvider: React.FC<Props> = ({ children }) => {
    const [state, setState] = useState(defaultStateValue)
    return (
        <AppStateContext.Provider value={state}>
            <AppSetStateContext.Provider value={setState}>{children}</AppSetStateContext.Provider>
        </AppStateContext.Provider>
    )
}

export default AppStateProvider