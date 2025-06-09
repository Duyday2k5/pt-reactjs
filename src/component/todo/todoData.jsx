
const TodoData = (props) => {
    const { name, work, info, todosList } = props; //*** cach thg dung nhieu nhat de goi props */
    // console.log(props) //kiem tra co props khong
    return (
        <div className="todo-data">
            <div>Toi la {name}, Cong viec: {work}</div>
            <div>Mua trai phieu cong ty xyz</div>
            <div>Dong BTC bat ngo giam xuong dang ke</div>
            <div>{JSON.stringify(todosList)}</div>
        </div>
    )
}


export default TodoData;