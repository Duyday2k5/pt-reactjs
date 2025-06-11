
const TodoData = (props) => {
    const { todosList, buttonDelete } = props; //*** cach thg dung nhieu nhat de goi props */
    // console.log(props) //kiem tra co props khong
    const handleButton = (id) => {
        buttonDelete(id)
    }
    return (
        <div className="todo-data">
            {todosList.map((item, index) => {
                return (
                    <div className="data-btn" key={item.id}>
                        <div className="data-name">{item.name}</div>
                        <button onClick={() => { handleButton(item.id) }}>Delete</button>
                    </div>
                )
            })}
            {/* <div>{JSON.stringify(todosList)}</div> */}
        </div>
    )
}


export default TodoData;