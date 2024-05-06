import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../../store/cartAction';

export default function Favorites() {
    const favoriteMovies = useSelector((state) => state.addToCart.totalMovie);
    const dispatch = useDispatch();
    console.log(favoriteMovies)
     // التحقق من وجود الأفلام المفضلة قبل عرضها
  if (!favoriteMovies || favoriteMovies.length === 0) {
    return <p>No favorite movies yet!</p>;
  }
  const handleRemove=(movie)=>{
    

      dispatch(removeFromFavorites(movie))
    
  }
  return (
    <div>
        <div className="container">
      <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', color: '#f00', textDecoration: 'underline' }}>Favorite Movies</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {favoriteMovies.map(movie => (
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
                                   <div>
                                     <p className="card-text">{movie.overview}</p>
                                     
                                   </div>
                                   <button className="btn btn-success text-light w-100 my-3" onClick={()=>{handleRemove(movie)}}>Remove from Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
      </div>
    </div>
    </div>
  )
}
