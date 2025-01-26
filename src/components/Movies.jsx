function ListOfMovies ({ movies }){
    return (
        <ul className="movies">
            {movies.map((movie) => (
                <li className="movie" key={movie.id}>
                    <img src={movie.poster} alt={movie.title} />
                    <p className="movie-title">{movie.title}</p>
                </li>
            ))}
        </ul>
    )
}

function NoMoviesFound(){
    return <p>No se encontraron películas</p>
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
        ? <ListOfMovies movies={movies} /> 
        : <NoMoviesFound />
    )
}