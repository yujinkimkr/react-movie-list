import List from "../components/List";

function Upcoming() {
  const uri = "https://api.themoviedb.org/3/movie/upcoming";
  return <List uri={uri} />
}
export default Upcoming;