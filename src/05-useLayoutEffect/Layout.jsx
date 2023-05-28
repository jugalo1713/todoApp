import { useCounter, useFetch } from "../Hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {
    const { increment, decrement, reset, counter } = useCounter(1)
    console.log(counter)
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
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
