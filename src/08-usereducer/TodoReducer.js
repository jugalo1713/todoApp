export const ACTIONS = {
    ADD: 'Add Todo',
    REMOVE: 'Remove todo',
    TOGGLE: 'Toggle todo'
}

export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...initialState, action.payload];

        case ACTIONS.REMOVE:
            return initialState.filter(x => x.id !== action.payload.id);

        case ACTIONS.TOGGLE:
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }

}