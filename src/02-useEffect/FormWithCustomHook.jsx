import { useForm } from "../Hooks/useForm"

export const FormWithCustomHook = () => {
    const { username, email, password, onInputChange, onResetForm } = useForm({ 
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1>
                Formulario con custom Hooks
            </h1>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="xxxx@xxx.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>
    )
}
