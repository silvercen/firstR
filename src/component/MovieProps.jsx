movieFlag=true

function toggleMovie()
{
    movieView()
}

function movieView()
{
    
}

function MoviePropComp(props)
{
    let mappedMovies=props.value.map((eachMovie) =>
        <tr key={eachMovie.mname}>
            <td>{eachMovie.mname}</td>
            <td>{eachMovie.mgenre}</td>  
            <td>{eachMovie.mlanguage}</td>
            <td><button className="btn btn-primary" onClick={toggleMovie}>View</button></td>
        </tr>
    )

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>GENRE</th>
                    <th>LANGUAGE</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {mappedMovies}
            </tbody>
        </table>
        </>
    );
}

export default MoviePropComp;