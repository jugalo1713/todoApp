import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
        });

        return () => {
            console.log('Message unmounted')
        }
    }, [])

    return (
        <>
            <h3>
                Usuario ya existe
            </h3>
        </>
    )
}
