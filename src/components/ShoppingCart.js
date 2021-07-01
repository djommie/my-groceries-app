import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div>
            <button onClick={props.handleCLick}>Test</button>
            <List groceryItems={props.ShoppingItems} handleCLick={props.handleCLick} />
        </div>
    )
}

export default ShoppingCart