function Logo(props) {
  return (
    <div className="movie-logo">
      <img src={require("../../assets/" + props.img).default} alt="Movie Logo" />
    </div>
  );
}

export default Logo;
