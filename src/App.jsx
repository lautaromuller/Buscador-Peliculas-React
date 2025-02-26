import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'


function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error === null) getMovies({ search })
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery === ' ') return
    setSearch(newQuery)
  }

  return (
    <div className="app">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, Pulp Fiction, Breaking Bad...'
            spellcheck="false"
          />
          <button type='submit'><img className='img-lupa' src="../public/lupa.png" alt="buscar película" /></button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
