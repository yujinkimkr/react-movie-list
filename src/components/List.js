import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import loader from "../images/loading.gif";

function List({ uri }) {

  const [loading, setLoading] = useState(true);
  const [playingMovies, setplayingMovies] = useState([]);

  const fetch = require('node-fetch');
  const API_KEY = '9e550adf8759e45fbff105734c32aaff';

  // Now Playing Movie List
  const url = `${uri}?api_key=${API_KEY}`;
  // const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTU1MGFkZjg3NTllNDVmYmZmMTA1NzM0YzMyYWFmZiIsInN1YiI6IjY0NzBhYWE5MzM2ZTAxMDE0YjYyN2Y3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LerSBHzskWc5ZTkzh1S_dQkgDGQZl-3nP5IVPraCtno'
    }
  };

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then((json) => {
        setplayingMovies(json);
        setLoading(false);
      })
      .catch(err => console.error('error:' + err));
  }, []);



  return <div className="movieBox">
    {loading ? <div className="loading">
      <img src={loader} alt="loading..." />
    </div> :
      <div className="movieBox-container">
        <h1 className="standard">Daily Box Office Ranking</h1>

        <div className="movieBox-inner">
          <div className="allMovieList">
            <ul>
              {playingMovies.results.map((movie) =>
                <Link to={`/content/${movie.id}`}>
                  <li key={movie.id}>{movie.title}</li>
                </Link>
              )}
            </ul>
          </div>
          <div className="movieList">
            {playingMovies.results.map((movie) => <div key={movie.id}>
              <Movie key={movie.id}
                title={movie.title}
                coverImg={movie.poster_path}
                genres={movie.genre_ids}
                year={movie.release_date}
                rate={movie.vote_average}
                id={movie.id}
              />
            </div>)}
          </div>
        </div>
      </div>
    }
  </div>
}

export default List;