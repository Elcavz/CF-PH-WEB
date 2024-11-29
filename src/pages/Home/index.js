import '../Home/App.css';
import img1 from './img/CF-54-1024x683.jpg';
import cardImg1 from './img/CF-4-1024x768.jpg';
import cardImg2 from './img/CFv81.jpg';
import cardImg3 from './img/CF-36-1024x724.jpg';
import cardImg4 from './img/CF-59-1024x683.jpg';
import cs1 from './customer_logo/se_logo.png';
import cs2 from './customer_logo/ae_logo.png';
import cs3 from './customer_logo/tk_logo.png';
import cs4 from './customer_logo/vertiv_logo.png';
import cs5 from './customer_logo/sanyo_denki_logo.png';
import cs6 from './customer_logo/carrier_logo.png';
import cs7 from './customer_logo/emc2_logo.png';
import cs8 from './customer_logo/siemens_logo.png';
import cs9 from './customer_logo/IBM_logo.png';
import cs10 from './customer_logo/dell_Logo.png';
import cs11 from './customer_logo/macrowiring_logo.png';
import cs12 from './customer_logo/ingersoll_logo.png';
import cs13 from './customer_logo/ross_logo.png';
import cs14 from './customer_logo/AJP-logo.png';
import cs15 from './customer_logo/panasonic_logo.png';
import cs16 from './customer_logo/mchale_logo.png';
import cs17 from './customer_logo/flex_logo.png';

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

      <div className='container py-4 px-0 d-flex flex-row justify-content-between'>
        <div class="card border-dark">
          <div class="view overlay">
            <img class="card-img-top" src={cardImg1} alt="Card image cap"></img>
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body d-flex justify-content-between flex-column">
            <h6 class="card-title">Tool-making and CNC Machining</h6>
            <button type="button" class="btn btn-danger btn-md">EXPLORE</button>
          </div>
        </div>
        <div class="card border-dark">
          <div class="view overlay">
            <img class="card-img-top" src={cardImg2} alt="Card image cap"></img>
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body d-flex justify-content-between flex-column">
            <h6 class="card-title">Finishing & Assembly</h6>
            <button type="button" class="btn btn-danger btn-md">EXPLORE</button>
          </div>
        </div>
        <div class="card border-dark">
          <div class="view overlay">
            <img class="card-img-top" src={cardImg3} alt="Card image cap"></img>
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body d-flex justify-content-between flex-column">
            <h6 class="card-title">Design & Project Management</h6>
            <button type="button" class="btn btn-danger btn-md">EXPLORE</button>
          </div>
        </div>
        <div class="card border-dark">
          <div class="view overlay">
            <img class="card-img-top" src={cardImg4} alt="Card image cap"></img>
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body d-flex justify-content-between flex-column">
            <h6 class="card-title">Punching, Forming, Stamping & Welding</h6>
            <button type="button" class="btn btn-danger btn-md">EXPLORE</button>
          </div>
        </div>
      </div>

      <div className='container my-5'>
        <div className='text-center'>
          <h5>
            Some of the industry-leading brands we are proud to have worked with
          </h5>
        </div>
        <div id='customer-logo-container' className='d-flex flex-column justify-content-between gap-3'>
          <div className='d-flex flex-row justify-content-between'>
            <div className='customer-logo border border-danger'>
              <img src={cs1}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs2}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs3}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs4}></img>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <div className='customer-logo border border-danger'>
              <img src={cs5}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs6}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs7}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs8}></img>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <div className='customer-logo border border-danger'>
              <img src={cs9}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs10}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs11}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs12}></img>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <div className='customer-logo border border-danger'>
              <img src={cs13}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs14}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs15}></img>
            </div>
            <div className='customer-logo border border-danger'>
              <img src={cs16}></img>
            </div>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <div className='customer-logo border border-danger'>
              <img src={cs17}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;