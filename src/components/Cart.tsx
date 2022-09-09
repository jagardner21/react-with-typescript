import React from "react";
import { FiShoppingCart } from "react-icons/fi"
import CartCSS from "./Cart.module.css"
import { AppStateContext } from "./AppState"
import Pizza from "./Pizza";

interface Props {
}

interface State {
    isOpen: boolean
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    }

    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
                return (
                    <div className={CartCSS.cartContainer}>
                        <button type="button" className={CartCSS.button} onClick={this.handleClick}>
                            <FiShoppingCart />
                            <span>{state.cart.items.length} pizza(s)</span></button>
                        <div 
                            className={CartCSS.cartDropDown}
                            style={{
                                display: this.state.isOpen ? "block" : "none"
                            }}
                        >
                            <ul>
                                {state.cart.items.map(item => {
                                    return <li key={item.id}>{item.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
                
            }}</AppStateContext.Consumer>
        )
    }
}

export default Cart