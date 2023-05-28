import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Star from "../images/star.svg";
import loader from "../images/loading.gif";

function Content() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTU1MGFkZjg3NTllNDVmYmZmMTA1NzM0YzMyYWFmZiIsInN1YiI6IjY0NzBhYWE5MzM2ZTAxMDE0YjYyN2Y3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LerSBHzskWc5ZTkzh1S_dQkgDGQZl-3nP5IVPraCtno'
    }
  };

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  // https://api.themoviedb.org/3/movie/502356?api_key=9e550adf8759e45fbff105734c32aaff

  const API_KEY = "9e550adf8759e45fbff105734c32aaff";
  const { id } = useParams();
  const getContent = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setContent(json);
        setLoading(false);
      });
  }

  // let released = content.release_date.replaceAll('-', '.');
  let released = (content.release_date) ? content.release_date.replaceAll("-", ".") : "";

  useEffect(getContent, []);
  // /8lvHyhjr8oUKOOy2dKXoALWKdp0.png

  /* Genre Codes */
  const [genreCodes, setGenresCodes] = useState([]);
  // const API_KEY = "9e550adf8759e45fbff105734c32aaff";
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
        console.log(json.genres);
        setGenresCodes(json.genres);
      })
      .catch(err => console.error('error:' + err));
  }, []);


  return <div className="content_container">
    {loading ? <div className="loading">
      <img src={loader} alt="loading..." />
    </div> :
      <div className="poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${content.backdrop_path})` }}>

        <div className="movieInfo">
          <div>
            <img src={`https://image.tmdb.org/t/p/original${content.poster_path}`} alt="Poster picture" />
          </div>
          <div>
            <h1>{content.title}</h1>
            <p>{content.overview}</p>
            <p><img className="starIcon" src={Star} /> {Math.round((content.vote_average * 10)) / 10}
              &nbsp; | &nbsp; {content.runtime}mins
              &nbsp; | &nbsp;
              {content.production_countries ?
                <span>
                  {content.production_countries.map((country, index) => <span key={country.name}>{index !== content.production_countries.length - 1 ? `${country.iso_3166_1}, ` : `${country.iso_3166_1} `} </span>)}
                </span> : null
              }
              &nbsp; | &nbsp; {released}
            </p>
            <p>
              {content.genres ?
                <span>
                  {content.genres.map((genre, index) => <span key={genre.id}>{index != content.genres.length - 1 ? <span>{genre.name}, </span> : <span>{genre.name}</span>}</span>)}
                </span>
                : null}
            </p>
            <p><a className="movieLink" href="{content.homepage}">Watch Now</a></p>
            {/* <a className="movieLink" href={content.homepage}><p>Watch Now</p></a> */}
          </div>
        </div>
      </div>
    }


    {/* <div className="poster">
        <img src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`} alt="" />
      </div> */}
    {/* <img src={`https://image.tmdb.org/t/p/original${coverImg}`} /> */}

  </div >
}

export default Content;