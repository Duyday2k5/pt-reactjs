
const TodoData = (props) => {
    const { name, work, info } = props; //*** cach thg dung nhieu nhat de goi props */
    return (
        <div className="todo-data">
            <div>Toi la {name}</div>
            <div>Mua trai phieu cong ty xyz</div>
            <div>Dong BTC bat ngo giam xuong dang ke</div>
        </div>
    )
}


export default TodoData;