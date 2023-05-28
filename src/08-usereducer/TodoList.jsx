import { TodoItem } from "./TodoItem"

export const TodoList = ({ itemList = [], handleDelete, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {
                itemList.map(item => (
                    <TodoItem
                        handleDelete={handleDelete}
                        key={item.id}
                        item={item}
                        onToggleTodo={onToggleTodo} />

                ))
            }
        </ul>
    )
}
