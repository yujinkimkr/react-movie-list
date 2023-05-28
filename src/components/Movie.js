import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Movie({ id, title, coverImg, genres, year, rate }) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTU1MGFkZjg3NTllNDVmYmZmMTA1NzM0YzMyYWFmZiIsInN1YiI6IjY0NzBhYWE5MzM2ZTAxMDE0YjYyN2Y3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LerSBHzskWc5ZTkzh1S_dQkgDGQZl-3nP5IVPraCtno'
    }
  };

  const [genreCodes, setGenresCodes] = useState([]);
  const API_KEY = "9e550adf8759e45fbff105734c32aaff";
  const uri = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
  const getGenreCodes = async () => {
    const json = await (await fetch(`${uri}${API_KEY}`)).json();
    console.log(json);
    setGenresCodes(json);
  }

  useEffect(() => {
    fetch(uri, options)
      .then(res => res.json())
      .then((json) => {
        // console.log(json.genres);
        setGenresCodes(json.genres);
      })
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <div className="movie_container">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${coverImg}`} />
      </div>
      <div className="movie-info">
        <Link to={`/content/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="web-info">year<br />&nbsp; 2023</p>
        <p className="web-info">genres
          <br />&nbsp;&nbsp;
          {genres.map((genre, index) => {
            return (
              <span>
                {genreCodes.map((gc, i) => {
                  return <span>
                    {genre == gc.id ?
                      <span>{index !== genres.length - 1 ? <span>{gc.name}, </span> : <span>{gc.name}</span>} </span>
                      : null}
                  </span>
                })}
              </span>
            )
          })}
        </p>
        <p className="web-info">
          rate <br />
          &nbsp; {rate}</p>
        <p className="web-info">
          released <br />
          &nbsp; {year}</p>
      </div>
    </div >
  )
}

export default Movie;