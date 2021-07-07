import React from "react"

function InputField(props) {
    return (
        <form onSubmit={props.addGrocery}>
            <input
                name="input-groceries"
                placeholder="Enter new grocery"
            />
        </form>
    )
}

export default InputField