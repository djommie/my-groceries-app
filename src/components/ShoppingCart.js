import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div className="list-container">
            <h3>WinkelWagen</h3>
            <button onClick={props.emptyCart}>Empty Shopping Cart</button>
            <List
                groceryItems={props.ShoppingItems}
                handleClick={props.handleClick}
                className={"cart-list"}
                isShoppingCart={true}
            />
        </div>
    )
}

export default ShoppingCart