export const TodoItem = ({ item, handleDelete, onToggleTodo }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between" >
                <span
                    onClick={() => onToggleTodo(item)}
                    className={`align-self-center ${item.done ? 'text-decoration-line-through' : ''}`}
                >
                    {item.description}
                </span>
                <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-danger">
                    Borrar
                </button>
            </li>
        </>
    )
}
