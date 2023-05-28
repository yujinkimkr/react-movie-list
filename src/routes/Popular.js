// import { useState, useEffect } from "react";
// import Movie from "../components/Movie";
// import loader from "../images/loading.gif";
import List from "../components/List";

function Popular({ url }) {
  const uri = "https://api.themoviedb.org/3/movie/popular";
  return <List uri={uri} />
}

export default Popular;