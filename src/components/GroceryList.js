import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {
    return (
        <div className="grocery-list-container">
            <h3>Boodschappenlijst</h3>
            <InputField
                addGrocery={props.addGrocery}
            />
            <List
                groceryItems={props.groceryItems}
                handleClick={props.handleClick}
                className={"grocery-list"}
            />
        </div>
    )
}

export default GroceryList