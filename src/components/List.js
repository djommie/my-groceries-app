import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const groceryList = props.groceryItems.map((item, index) => {
        return (
            <ListItem
                key={index}
                id={item.id}
                item={item}
                handleClick={props.handleClick}
                isShoppingCart={props.isShoppingCart}
            />
        )
    })
    return (
        <div>
            <ul className={props.className}>
                {groceryList}
            </ul>
        </div>
    )
}

export default List