import { useCallback, useState } from "react"

export const ShowIncrement = ({ increment }) => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    () => {
      setCounter((value) => value + 1);
    },
    [],
  )

  return (
    <>
      <h1>
        useCallback Hook: {counter}
      </h1>
      <button className="btn btn-primary"
        onClick={() => incrementFather()}
      >

        Incrementar
      </button>
    </>
  )
}
