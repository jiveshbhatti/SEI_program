import './Card.css'

export default function Card(props) {
    return (
        <div id="single-article-1" className="single-article">
              <div id="card-front-1" className="front-card tb-card">
                <div className="single-image">.
                </div>
                <div className="single-content">
                  <div className="card-middle">
                    <h1>{props.name}</h1>
                    <p className="team-p1">Cras tincidunt ipsum lectus, id malesuada dui blan. Vivamus vel lacus. Nivamus vel lacus nisi... </p>
                  </div>
                  <div className="card-bottom">
                    <div className="card-email">
                      email@email.com
                    </div>
                    <div className="card-icon profile-trigger" data-id="single-article-1" >
                      <i className="fa fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div id="card-back-1" className="back-card tb-card">
                <div className="single-content">
                  <div className="card-middle">
                    <p className="team-p1">1Cras tincidunt ipsum lectus, id malesuada dui blan. Vivamus vel lacus. Nivamus vel lacus nisi... </p>
                  </div>
                  <div className="card-bottom">
                    <div className="card-email">
                    </div>
                    <div className="card-btn card-icon profile-trigger" data-id="single-article-1" >
                      X
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}