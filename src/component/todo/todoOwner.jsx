import { useState } from "react"

const TodoOwner = (props) => {
    const [valueInput, setValueInput] = useState("")
    const { addNewTodo } = props

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleChange = (event) => {
        // console.log("handleChange:", name)  //target: input
        setValueInput(event)
    }

    return (
        <div className="todo-owner">
            <input type="text" className="todo-input" placeholder='Vui long nhap'
                onChange={(event) => { handleChange(event.target.value) }}
                value={valueInput}
            />
            <button
                className="todo-btn"
                onClick={handleClick}
            >Add</button>
            <div style={{ color: "white" }}>
                Day la gtri khi dung useState: {valueInput}
            </div>
        </div>
    )
}

export default TodoOwner;