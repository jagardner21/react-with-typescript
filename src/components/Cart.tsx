import React from "react";
import { FiShoppingCart } from "react-icons/fi"
import CartCSS from "./Cart.module.css"

interface Props {}

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
            <div className={CartCSS.cartContainer}>
                <button type="button" className={CartCSS.button} onClick={this.handleClick}>
                    <FiShoppingCart />
                    <span>2 pizza(s)</span></button>
                <div 
                    className={CartCSS.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}
                >
                    <ul>
                        <li>Pepperoni</li>
                        <li>Black Olive</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cart