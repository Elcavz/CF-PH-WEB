import './style.css';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import ktImg1 from './assets/kt_img1.png';
import ktImg2 from './assets/kt_img2.png';
import ktImg3 from './assets/kt_img3.png';

function Environmental() {
  return (
    <div id='environmental'>
      <div className='d-flex flex-row align-items-center vh-100'>
        <div className='d-flex flex-row align-items-center justify-content-between flex-wrap h-75 w-100'>
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
      <div id='key-targets'>
        <div className='text-center mb-5'>
          <h1>Key Targets:</h1>
        </div>
        <div className='d-flex justify-content-evenly flex-wrap mb-4'>
          <img className='img-fluid rounded-4' src={ktImg1} width={500}></img>
          <img className='img-fluid rounded-4' src={ktImg2} width={500}></img>
          <img className='img-fluid rounded-4' src={ktImg3} width={500}></img>
        </div>
      </div>
      <div className='pt-5'>
        <div className='text-center'>
          <h1>Working For The Global Environment</h1>
        </div>
      </div>
    </div>
  )
}

export default Environmental; 