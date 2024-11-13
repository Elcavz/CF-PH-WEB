import './App.css';

function App() {
  return (
    <div>
      <header>
        <div id="nav" className="w-100 d-flex justify-content-between container">
          <div id="cf-logo">
            <img className="pt-2" src="assets/logo/cf-and-icon.png" alt="cf-logo" height="50px" width="150px"></img>
          </div>
          <ul className="m-0 p-0">
            <li>
              Services
            </li>
            <li>
              Sectors
            </li>
            <li>
              Careers
            </li>
            <li>
              Sustainability
            </li>
            <li>
              About Us
            </li>
          </ul>
        </div>
      </header>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://mdevelopers.com/storage/0_web-development-testing_94af65a7.webp" className="d-block w-100 h-100"
              alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://mdevelopers.com/storage/0_web-development-testing_94af65a7.webp" className="d-block w-100 h-100"
              alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://mdevelopers.com/storage/0_web-development-testing_94af65a7.webp" className="d-block w-100 h-100"
              alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://mdevelopers.com/storage/0_web-development-testing_94af65a7.webp" className="d-block w-100 h-100"
              alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://mdevelopers.com/storage/0_web-development-testing_94af65a7.webp" className="d-block w-100 h-100"
              alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;
