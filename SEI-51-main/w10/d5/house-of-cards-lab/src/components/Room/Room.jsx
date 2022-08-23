import './Room.css'

export default function Room(props) {
  return (
    <div id="r1" className="room r1" style={{ backgroundImage: `url(${props.pic})` }}>
      <button id="b1" data-popup-id="p1" className="btn-room-name">
        {props.name}
      </button>
    </div>
  );
}