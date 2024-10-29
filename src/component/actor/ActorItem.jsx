function ActorItem(props)
{
    return(
        <>
        <tr>
            <td>{props.data.actorId}</td>
            <td>{props.data.actorFirstName}</td>
            <td>{props.data.actorLastName}</td>
        </tr>
        </>
    )
}

export default ActorItem