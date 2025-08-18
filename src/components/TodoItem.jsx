

const TodoItem = ({ idx, content, marked, dateline, publicKey, action }) => {
    const handleMarkTodo = () => {
        if (marked) return

        action(publicKey, idx)
    }

    const handleRemoveTodo = () => {
        action(publicKey, idx)
    }

    return (
        <li key={idx}>
            <div onClick={handleMarkTodo} />
            <div>
                <span className="todoText">{content}</span>
                {dateline && (
                    <div>
                        <CalendarIcon />
                        <span>{dateline}</span>
                    </div>
                )}
            </div>
            <div>
            <img src="/tick.svg" style={{marginLeft: "10px"}} onClick={handleRemoveTodo}/>
            </div>
        </li>
    )
}

export default TodoItem