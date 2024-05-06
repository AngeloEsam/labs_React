
import React, { useEffect, useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c28eebf7bb39963adf0c89adbead022a`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results); 
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (movies) {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [query, movies]);

  return (
    <div className="container">
      <div className='d-flex align-items-center justify-content-center flex-column'>
        <input
        className='my-3 form-control'
          type="text"
          placeholder='Enter...'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredMovies && filteredMovies.map((movie) => (
            <div className='col' key={movie.id}>
              <div className="card h-100 shadow">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
