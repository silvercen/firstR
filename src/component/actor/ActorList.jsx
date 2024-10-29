import ActorItem from "./ActorItem"

function ActorList()
{
    let allActors = [
        {
            actorId: 101,
            actorFirstName: "Rupert",
            actorLastName: "Grint"
        },
        {
            actorId: 102,
            actorFirstName: "Emma",
            actorLastName: "Watson"
        },
        {
            actorId: 103,
            actorFirstName: "Daniel",
            actorLastName: "Radcliffe"
        }
    ]

    let mappedAllActors = allActors.map(eachActor => <ActorItem data={eachActor}></ActorItem>)
    return (
        <>
        <h3>List of Actors</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                </tr>
            </thead>
            <tbody>
                {mappedAllActors}
            </tbody>
        </table>
        </>
    )
}

export default ActorList