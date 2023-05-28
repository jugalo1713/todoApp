import { useForm } from '../Hooks/useForm.js'


export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
        done: false
    })

    const resetForm = (e) => {
        e.preventDefault();
        onResetForm();
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo && onNewTodo(newTodo);
    }

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                onChange={onInputChange}
                name='description'
                value={description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
            <button
                className='btn btn-outline-primary mt-2'
                onClick={resetForm}
            >
                Reset
            </button>
        </form>
    )
}
