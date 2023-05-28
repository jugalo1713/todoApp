import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../Hooks/useTodo";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, onToggleTodo, onNewTodo, handleDeleteTodo } = useTodo();

    return (
        <>
            <h1>
                Todo App: {todosCount} &nbsp;
            </h1>
            <h2>
                Pendientes: {pendingTodosCount}
            </h2>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        itemList={todos}
                        handleDelete={handleDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>
        </>
    )
}
