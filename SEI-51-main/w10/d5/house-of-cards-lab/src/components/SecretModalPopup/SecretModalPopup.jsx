import './SecretModalPopup.css'

export default function SecretModalPopup(props) {
  return (
    <div id="p1" className="secret-popup">
      <div className="popup-wrapper">
        <div className="popup-top">
          <h3>{props.name}</h3>
          <div className="close-popup">
            <div data-popup-id="p1" className="x-btn"></div>
          </div>
        </div>
        <audio controls src="http://www.freesound.org/data/previews/245/245588_1897685-lq.mp3">
        </audio>
        <p>Text</p>
      </div>
    </div>
  );
}