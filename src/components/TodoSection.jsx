import TodoList from './TodoList'

const TodoSection = ({ todos, action }) => {
    return (
        <div>

            <TodoList todos={todos} action={action} />
        </div>
    )
}

export default TodoSection