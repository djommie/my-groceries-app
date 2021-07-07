import React from "react"

function ListItem(props) {
    return (
        <li
            key={props.index}
            value={props.item.title}
            className="list-item"
            onClick={() => props.handleClick(props.item.id)}
        >{props.item.title}
            {props.item.id}
        </li>
    )
}

export default ListItem