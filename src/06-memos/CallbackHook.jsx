import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10)
    const incrementFather = () => {
        setcounter(counter + 1)
    }

    return (
        <>
            <h1>
                UseCallback Hook {counter}
            </h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
