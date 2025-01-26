const API_KEY = '587e1b1d60229730080c6a05bbf20c2a';
const URL_API = 'https://api.themoviedb.org/3/search/movie'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w200'


export const searchMovies = async ({ search }) => {
    if(search === '') return null
    
    try{

        const response = await fetch(`${URL_API}?query=${search}&api_key=${API_KEY}`)
        const data = await response.json()
        const movies = data.results
        
        return movies.map((movie) => ({
            title: movie.title,
            poster: `${URL_IMAGE}${movie.poster_path}`,
            id: movie.id
        }))
    } catch(error){
        throw new Error('Error searching movies')
    }
}