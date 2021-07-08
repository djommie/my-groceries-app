import React from "react"

function ListItem(props) {
    if (props.isShoppingCart) {
        return (
            <li
                key={props.index}
                value={props.item.title}
                className="list-item"
                onClick={() => props.handleClick(props.item.id)}
            >{props.item.title} Hoeveelheid: {props.item.amount}
            </li>
        )
    } else {
        return (
            <li
                key={props.index}
                value={props.item.title}
                className="list-item"
                onClick={() => props.handleClick(props.item.id)}
            >{props.item.title}
            </li>
        )
    }
}

export default ListItem