function MetaData(props) {
  return (
    <div className="meta-data">
      <Title title={props.data.title}/>
      <div className="review">
          <IMDB imdb={props.data.imdb_rating}  />
          <Year year={props.data.year} />
          <Duration duration={props.data.duration} />
          <PRating p_rating={props.data.p_rating} />       
      </div>
      <div className="genre-director">
          <Genre genre={props.data.genre} />
          <Director director={props.data.director} />
      </div>
      <Tagline tagline={props.data.tagline} />
    </div>
  );
}

function Title(props) {
  return(
    <div className="movie-title">{props.title}</div>
  )
}
function IMDB(props) {
  return(
    <p>
      <span>IMDb</span> {props.imdb}
    </p>
  )
}
function Year(props) {
  return(
    <p>{props.year}</p>
  )
}
function Duration(props) {
  return(
    <p>{props.duration}</p>
  )
}
function PRating(props){
  return(
    <p>{props.p_rating}</p>
  )
}
function Genre(props) {
  return(
    <p>{props.genre.toString()}</p>
  )
}
function Director(props){
  return(
    <p>Director : {props.director} </p>
  )
}
function Tagline(props) {
  return(
    <div className="tag-line" style={{marginTop:"70px"}}>
      <p>
        {props.tagline}
      </p>
  </div>
  )
}
export default MetaData;
