import React, { useContext } from 'react'
import PizzaCSS from './Pizza.module.css'
import { AppSetStateContext } from './AppState'

interface Pizza {
    id: number
    name: string
    description: string
    price: number
}

interface Props {
    pizza: Pizza
}

const Pizza: React.FC<Props> = ({ pizza }) => {
    const setState = useContext(AppSetStateContext)
    return (
    <li className={PizzaCSS.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
    </li>
    )
}

export default Pizza