import { useState } from "react"

const TodoOwner = (props) => {
    const [valueInput, setValueInput] = useState("returned")
    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
    }
    const handleChange = (name) => {
        // console.log("handleChange:", name)  //target: input
        setValueInput(name)
    }

    return (
        <div className="todo-owner">
            <input type="text" className="todo-input" placeholder='Vui long nhap' onChange={(event) => { handleChange(event.target.value) }} />
            <button
                className="todo-btn"
                onClick={handleClick}
            >Add</button>
            <div
                style={{ color: "white" }}
            >Day la gtri khi dung useState: {valueInput}</div>
        </div>
    )
}

export default TodoOwner;