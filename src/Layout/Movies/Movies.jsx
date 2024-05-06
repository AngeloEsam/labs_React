import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import MoviesPagination from "./MoviesPagination";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/cartAction";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleClick = (e, movie) => {
    console.log(movies.some(item=> item.id === movie.id))
    // if(movies.some(item=> item.id === movie.id)){
    // }
    if (e.target.classList.contains("far")) {
      dispatch(addToFavorites(movie));
      e.target.classList.remove("far");
      e.target.classList.add("fas");
    } else if (e.target.classList.contains("fas")) {
      dispatch(removeFromFavorites(movie));
      e.target.classList.remove("fas");
      e.target.classList.add("far");
    }
  };

  function BorderExample() {
    return <Spinner animation="border" />;
  }

  const updateMovies = (page) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c28eebf7bb39963adf0c89adbead022a&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const apiKey = "c28eebf7bb39963adf0c89adbead022a";
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, {
        // headers:{},
        //  params:{limit:3}
      })
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2
        className="text-center mb-5"
        style={{
          fontSize: "2.5rem",
          color: "#f00",
          textDecoration: "underline",
        }}
      >
        Movies{" "}
      </h2>
      {loading ? (
        <div className="text-center">{BorderExample()}</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div className="card h-100 shadow">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <div>
                    <p className="card-text">{movie.overview}</p>
                  </div>
                  <Link
                    to={`/movies/${movie.id}`}
                    className="btn btn-primary w-100 my-2"
                  >
                    Details
                  </Link>

                  <br />
                  <i
                    className="far fa-heart "
                    style={{ fontSize: "50px" }}
                    onClick={(e) => {
                      handleClick(e, movie);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex align-items-center justify-content-around m-4 ">
        <MoviesPagination updateMovies={updateMovies} />
      </div>
    </div>
  );
}
