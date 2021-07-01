import React from "react"
import ListItem from "./ListItem"

function List(props) {
    const groceryList = props.groceryItems.map(item => <ListItem id={item.id} item={item} handleClick={props.handleClick} />)
    return (
        <div>
            <ul>
                <button onClick={props.handleCLick}>Test</button>
                {groceryList}
            </ul>
        </div>
    )
}

export default List