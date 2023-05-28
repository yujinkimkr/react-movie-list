import List from "../components/List";
function Top() {

  const uri = "https://api.themoviedb.org/3/movie/now_playing";

  return <List uri={uri} />
}

export default Top;