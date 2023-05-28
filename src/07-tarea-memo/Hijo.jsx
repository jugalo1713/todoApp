import { useMemo } from "react";

export const Hijo = ({ numero, incrementar }) => {

    useMemo(() => {
        console.log('  Me volví a generar :(  ')
    }, [])

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => incrementar(numero)}
        >
            {numero}
        </button>
    )
}
