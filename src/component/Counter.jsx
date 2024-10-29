import { useState } from "react"

export default function Counter()
{
    let [count, setCount] = useState(0)

    function handleplus()
    {
        setCount(count+1)
        console.log(count)
    }

    function handleminus()
    {
        setCount(count-1)
        console.log(count)
    }

    return (
        <>
        <h2>
        <div className="container m-5 p-5">
            <button className="btn btn-warning" onClick={handleminus}>minus</button>
            <span className="mx-5 badge bg-success">{count}</span>
            <button className="btn btn-warning" onClick={handleplus}>plus</button>
        </div>
        </h2>
        </>
    )
}