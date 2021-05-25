function Poster(props) {
  return (
    <div className="poster">
      <img
        src={require("../../assets/" + props.img).default}
        alt="Poster Image"
      />
    </div>
  );
}

export default Poster;
