import React from "react"

function ListItem(props) {
    return (
        <li
            key={props.item.id}
            value={props.item.title}
            className="list-item"
            onClick={props.item.handleCLick}
        >{props.item.title}
            {props.item.id}
        </li>
    )
}

export default ListItem