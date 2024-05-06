/*
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const apiKey = "c28eebf7bb39963adf0c89adbead022a";
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => {
          setMovieDetails(response.data);
          //console.log(response.data.production_companies);
          console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  // if (!movieDetails) return <div>Loading...</div>;

  return (

       <div className="card h-100 shadow">
         <img
           className="card-img-top"
           src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
           alt={movieDetails.name}
           style={{ height: "300px", objectFit: "cover" }}
         />
         <div className="card-body">
           <h5 className="card-title">{movieDetails.title}</h5>
           <p className="card-text">{movieDetails.overview}</p>
         </div>
       </div>
 
  );
};

export default MovieDetails;
*/






import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css"; // Import your CSS file

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate=useNavigate()

  function handleBack(){
    navigate(-1);
  }

  useEffect(() => {
    const apiKey = "c28eebf7bb39963adf0c89adbead022a";
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then((response) => {
          setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  return (
    <div className="center-card position-relative">
       <button className="position-absolute top-2 start-0 translate-middle btn btn-danger" onClick={() => handleBack()}>Back</button>
      <div className="card  shadow">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{movieDetails.title}</h3>
          <p className="card-text">{movieDetails.overview}</p>
          <p className="card-text"><span className="ss">vote average:</span>{movieDetails.vote_average}</p>
          <p className="card-text"><span className="ss">vote count:</span>{movieDetails.vote_count}</p>
          <p className="card-text"><span className="ss">popularity:</span>{movieDetails.popularity}</p>
          <button className="btn btn-success text-light w-100 my-3">Add to Cart</button>
         
        </div>
      </div>
     
    </div>
  );
};

export default MovieDetails;

