import Poster from "./Poster";
import Logo from "./Logo";
import MetaData from "./MetaData";
import Data from "../../data";

function Details() {
  return (
    <>
      <div className="movie-details">
        <Poster img={Data.poster} />
        <MetaData data={Data} />
        <Logo img={Data.logo} />
      </div>
      <MovieDesc />
    </>
  );
}

function MovieDesc() {
  return (
    <div className="movie-desc">
      <p>{Data.plot}</p>
    </div>
  );
}
export default Details;
