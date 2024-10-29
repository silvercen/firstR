function ButtonClick()
{
    let clicks = 0
    function handleClick()
    {
        console.log("clicked")
        clicks+= 1
    }
    return (
        <>
            <button onClick={handleClick}>Click Me...{clicks}</button>
        </>
    )
}

export default ButtonClick