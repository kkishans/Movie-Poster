import Data from "../../data";

function CastList() {
  return (
    <div className="cast-crew">
      <p>Cast{" &"} Crew</p>
      <div className="cast-list">
        {Data.cast.map((c, i) => (
          <Cast data={c} key={i} />
        ))}
      </div>
    </div>
  );
}

function Cast(props) {
  return (
    <div className="card-cast">
      <CastPhoto img={props.data.photo} />
      <CastName name={props.data.actor} />
      <CastRole role={props.data.role} />
    </div>
  );
}
function CastPhoto(props) {
  return (
    <div className="cast-photo">
      <img
        src={require("../../assets/cast/" + props.img).default}
        alt="Movie Logo"
      />
    </div>
  );
}
function CastName(props) {
  return <div className="cast-name">{props.name}</div>;
}
function CastRole(props) {
  return <div className="cast-role">as {props.role}</div>;
}

export default CastList;
