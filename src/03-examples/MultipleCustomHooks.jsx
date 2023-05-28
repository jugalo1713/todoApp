import { useCounter, useFetch } from "../Hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const { increment, decrement, reset, counter } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    return (
        <>
            <h1>
                Breaking Back Quotes
            </h1>
            <hr />
            {
                isLoading ?
                    (
                        <LoadingQuote />
                    )
                    :
                    (
                        !!data &&
                        data.map(x => (
                            <div key={crypto.randomUUID()}>
                                <Quote quote={x.quote} author={x.author} />
                                < hr />
                            </div>
                        ))
                    )
            }
            <button className="btn btn-primary" onClick={() => increment()}>
                More Quotes
            </button>
            <button className="btn btn-primary" onClick={() => decrement()}>
                Less Quotes
            </button>
            <button className="btn btn-primary" onClick={() => reset()}>
                Only One Quote
            </button>
        </>
    )
}
