import MoviePropComp from "./MovieProps.jsx"

let movies = [
    {
        mname: `Joker`,
        mgenre: `Action`,
        mlanguage: `English`
    },
    {
        mname: `Joker 2`,
        mgenre: `Action`,
        mlanguage: `English`
    },
    {
        mname: `Bodyguard`,
        mgenre: `Comedy`,
        mlanguage: `Malayalam`
    },
    {
        mname: `PK`,
        mgenre: `Sci-Fi`,
        mlanguage: `Hindi`
    },
    {
        mname: `Nanban`,
        mgenre: `Action`,
        mlanguage: `Tamil`
    }
]

function MovieComp()
{
    return(
        <>
        <h1>Movie List</h1>
        <MoviePropComp value={movies}></MoviePropComp>
        </>
    );
}
export default MovieComp;