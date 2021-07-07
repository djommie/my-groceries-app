import React from "react"

function InputField(props) {
    return (
        <form >
            <input
                name="input-groceries"
                placeholder="Enter new grocery"
                onSubmit={props.addGrocery}
            />
        </form>
    )
}

export default InputField