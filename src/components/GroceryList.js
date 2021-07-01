import React from "react"
import List from "./List"

function GroceryList(props) {
    return (
        <div>
            <List groceryItems={props.groceryItems} handleCLick={props.handleCLick} />
        </div>
    )
}

export default GroceryList