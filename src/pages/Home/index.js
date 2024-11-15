import '../Home/App.css';
import img1 from './img/CF-54-1024x683.jpg'

function Home() {
  return (
    <div>
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
      <div className='container py-5 my-3 px-5 d-flex flex-row border border-danger border-3 rounded-top-5 rounded-bottom-5'>
        <div className='px-5 d-flex flex-column justify-content-evenly align-items-center'>
          <p>
            C&F, founded in Galway, Ireland, in 1989, specializes in delivering precision-engineered sheet metal solutions to diverse industries.
          </p>
          <p>
            Over the years, we have grown to offer a full spectrum of sheet metal fabrication and tooling services. With operations in Ireland, the Czech Republic, and the Philippines, we proudly serve as a manufacturing partner to some of the world's leading companies.
          </p>
          <p>
            From design to assembly and integration, we deliver customized production solutions tailored to your needs.
          </p>
        </div>
        <div>
          <img className='img-fluid' src={img1}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;