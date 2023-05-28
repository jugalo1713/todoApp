import { useEffect, useReducer } from "react";
import { todoReducer, ACTIONS } from "../08-usereducer/TodoReducer";

export const useTodo = () => {

    const initialState = [];

    const init = () => JSON.parse(localStorage.getItem('todos')) || [];

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    const todosCount = todos && todos.length;
    const pendingTodosCount = todos && todos.filter(todo => !todo.done).length

    useEffect(() => {
        var serializedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", serializedTodos);

    }, [todos]);


    const onNewTodo = (newTodo) => {
        const todoStored = JSON.parse(localStorage.getItem('todos'));
        if (todoStored.find(x => x.description == newTodo.description)) {
            alert('Ya existe uno así')
            return;
        }

        const action = {
            type: ACTIONS.ADD,
            payload: newTodo
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: ACTIONS.REMOVE,
            payload: todo
        };
        dispatchTodo(action);
    }

    const onToggleTodo = (todo) => {
        console.log(todo)
        const action = {
            type: ACTIONS.TOGGLE,
            payload: todo
        }
        dispatchTodo(action);
    }

    return ({
        todos,
        todosCount,
        pendingTodosCount,
        onToggleTodo,
        onNewTodo,
        handleDeleteTodo
    })
}
