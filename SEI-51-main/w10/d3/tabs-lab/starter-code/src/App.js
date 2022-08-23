// import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card.jsx'

function App() {
  return (
    <div className="App">
      <section className="team-board">
        <div className="team-board-wrapper">
          <div className="our-team-btn">Team 1</div>
          <div className="our-board-btn">Team 2</div>
        </div>
      </section>

      <section className="blog-items team-cards">
        <div className="inner-wrapper">
          <div className="blog-container">
            <Card name="John Smith" />
            <Card name="Jonathan Smith" />
            <Card name="Johann Smith" />
          </div>
        </div>
      </section>

      <section className="blog-items team-cards">
        <div className="inner-wrapper">
          <div className="blog-container">
            <Card name="Celine Dion" />
            <Card name="Diana Ross" />
            <Card name="Albert Einstein" />
          </div>
        </div>
      </section>

      </div>
  );
}

export default App;
