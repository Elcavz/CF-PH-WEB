import './style.css';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';

function Environmental() {
  return (
    <div id='environmental'>
      <div className='d-flex flex-row align-items-center vh-100'>
        <div className='d-flex flex-row align-items-center justify-content-between h-75 w-100'>
          <img className='img-fluid h-100' src={img1} alt='Environmental Image 1'></img>
          <div id='card' className='w-25 h-100 text-center d-flex flex-column justify-content-center p-3'>
            <h1 className='fw-bold'>SUSTAINABILITY - ENVIRONMENTAL</h1>
            <i><p>"The greatest threat to our planet is the belief that someone else will save it."</p></i>
            <div className='text-end'>
              <span>- Robert Swan</span>
            </div>
          </div>
          <img className='img-fluid h-100' src={img2} alt='Environmental Image 2'></img>
          <img className='img-fluid h-100' src={img3} alt='Environmental Image 3'></img>
        </div>
      </div>
    </div>
  )
}

export default Environmental; 