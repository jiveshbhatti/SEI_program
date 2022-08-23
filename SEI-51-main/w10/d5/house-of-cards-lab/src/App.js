import logo from './logo.svg';
import './App.css';
import Room from './components/Room/Room.jsx';
import SecretModalPopup from './components/SecretModalPopup/SecretModalPopup.jsx'
import roof from './images/roof.png'
import room1 from './images/1-councellingroom.png'
import room2 from './images/2-grouproom.png'
import room3 from './images/3-youthroom.png'
import room4 from './images/4-bedroom.png'
import room5 from './images/5-laundry-room.png'
import room6 from './images/6-childrenroom.png'
import room7 from './images/7-livingroom.png'
import room8 from './images/8-diningroom.png'
import room9 from './images/9-kitchen.png'
import room10 from './images/10-frontyard.png'
import room11 from './images/11-front.png'
import room12 from './images/12-yard.png'

function App() {
  return (
    <div className="App">
      <section className="banner-virtual-tour">
          <h1>House of Cards Lab</h1>
      </section>

      <section className="house-container">
          <div className="house-wrapper">
              <div className="roof" style={{ backgroundImage: `url(${roof})`}}></div>
              <div className="rooms room-names">
                  <Room name="library" pic={room1} />
                  <Room name="theatre" pic={room2} />
                  <Room name="party room" pic={room3} />
              </div>
              <div className="rooms room-names">
                  <Room name="bedroom" pic={room4} />
                  <Room name="laundry room" pic={room5} />
                  <Room name="kids play room" pic={room6} />
              </div>
              <div className="rooms room-names">
                  <Room name="living room" pic={room7} />
                  <Room name="dining room" pic={room8} />
                  <Room name="Kitchen" pic={room9} />
              </div>
              <div className="rooms room-names">
                  <Room name="front yard" pic={room10} />
                  <Room name="side yard" pic={room11} />
                  <Room name="back yard" pic={room12} />
              </div>
              <SecretModalPopup name={"Party Room 1"} />
          </div>



      </section>
    </div>
  );
}

export default App;
