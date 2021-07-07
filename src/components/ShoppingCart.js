import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div className="shopping-cart-container">
            <h3>WinkelWagen</h3>
            <button onClick={props.emptyCart}>emptyCart</button>
            <List
                groceryItems={props.ShoppingItems}
                handleClick={props.handleClick}
                className={"cart-list"}
            />
        </div>
    )
}

export default ShoppingCart