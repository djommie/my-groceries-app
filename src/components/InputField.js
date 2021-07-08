import React from "react"

function InputField(props) {
    return (
        <form onSubmit={props.addGrocery}>
            <input
                name="input-groceries"
                id="input-groceries"
                placeholder="Enter new grocery"
            />
            <button>Add New Item</button>
        </form>
    )
}

export default InputField