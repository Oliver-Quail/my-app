import { useEffect, useState } from "react";




const Index = () => {

    const [title, setTitle] = useState<string>("initial Title");


    const [count, setCount] = useState<number>(1);
    const [result, setResult] = useState<number>(1);

    useEffect(() => {
        setResult(count*result);
        
    }, [count])

    return (
        <article>
            <h1>{title}</h1>
            <p>{result}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Press me
            </button>
        </article>
    )
}


export default Index;