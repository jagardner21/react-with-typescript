// import React, { createContext, useState } from "react";

// interface AppStateValue {
//     cart: {
//         items: {
//             name: string
//             price: number
//         }[]
//     }
// }

// const defaultStateValue: AppStateValue = {
//     cart: {
//         items: []
//     }
// }

// export const AppStateContext = createContext(defaultStateValue)

// const AppStateProvider: React.FC = () => {
//     const [state, setState] = useState(defaultStateValue)
//     return <AppStateContext.Provider value={}></AppStateContext.Provider>
// }