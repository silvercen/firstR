import { useState } from "react"

function InputDemo()
{
    const [data, setData] = useState("")

    function handleChange(event)
    {
        console.log(event.target.value)

    }

    return (
        <>
            <div className="container m-5 p-5">
                <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
                <div><h4>{data}</h4></div>
            </div>
        </>
    )
}

export default InputDemo