import { useCounter } from "../Hooks/useCounter"

export const CounterWithCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter();
    return (
        <>
            <h1>
                Counter with Hook: {counter}
            </h1>
            <button className="btn btn-primary" onClick={() => increment(10)} >+1</button>
            <button className="btn btn-primary" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(10)} >-1</button>
        </>
    )
}
