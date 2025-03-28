import './style.css';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import ktImg1 from './assets/kt_img1.png';
import ktImg2 from './assets/kt_img2.png';
import ktImg3 from './assets/kt_img3.png';
import carbonNeutral from './assets/carbon_neutral.png';

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
        <div className='d-flex justify-content-evenly flex-wrap mb-5'>
          <img className='img-fluid rounded-4' src={ktImg1} width={500}></img>
          <img className='img-fluid rounded-4' src={ktImg2} width={500}></img>
          <img className='img-fluid rounded-4' src={ktImg3} width={500}></img>
        </div>
      </div>
      <hr></hr>
      <div className='py-5'>
        <div className='text-center mb-5'>
          <h1>Working For The Global Environment</h1>
        </div>
        <div className='container'>
          <p className='fs-3'>
            C&F Manufacturing Phils. Corp. is dedicated to addressing societal challenges, with a strong focus on minimizing our environmental impact. Our commitment to decarbonization is central to our operations, driving us to reduce emissions across the entire business.
          </p>
          <p className='fs-3'>
            We aim to create positive change by actively pursuing net-zero goals. This commitment shapes our commercial strategies, as we seek partnerships and foster innovation to promote a sustainable future for everyone. By aligning our efforts with broader environmental objectives, we strive to make a meaningful contribution to the well-being of the planet and society.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className='py-5'>
        <div className='text-center mb-5'>
          <h1>Becoming Carbon-Neutral Business</h1>
        </div>
        <div className='container d-flex flex-wrap flex-row'>
          <p className='fs-3 w-50'>
            C&F Manufacturing Phils. Corp. is committed to achieving carbon neutrality at our operating sites by 2030. This ambitious plan underscores our dedication to addressing environmental challenges and promoting sustainability. Through innovation and strategic partnerships, we aim to make a positive impact on both our business and the broader community.
          </p>
          <div className='w-50'>
            <img className='img-fluid' src={carbonNeutral}></img>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h1>Carbon Reduction Roadmap For C&F Operations</h1>
        </div>
        <p className='fs-3'>
          From 2019 to 2024, C&F has successfully reduced CO₂ intensity (per unit of sales) by 50.25% through process automation, efficiency improvements, energy-efficient assets, electrification, and electricity decarbonization. Moving forward, we aim to further reduce CO₂ intensity by up to 75%, reinforcing our commitment to sustainability and environmental responsibility.
        </p>
        <table className='table table-striped border border-dark'>
          <thead>
            <tr className='text-center'>
              <th colSpan={3} className='border border-dark'>Target</th>
              <th colSpan={3} className='border border-dark'>Achieved Emission Reduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-dark'>1</td>
              <td className='border border-dark'>Base Year (YYYY)</td>
              <td className='border border-dark'>2019</td>
              <td className='border border-dark'>2022</td>
              <td className='border border-dark'>2023</td>
              <td className='border border-dark'>2024</td>
            </tr>
            <tr>
              <td className='border border-dark'>2.1</td>
              <td className='border border-dark'>GHG Intensity</td>
              <td className='border border-dark'>0.000248118</td>
              <td className='border border-dark'>0.00166934</td>
              <td className='border border-dark'>0.000144802</td>
              <td className='border border-dark'>0.00012345</td>
            </tr>
            <tr>
              <td className='border border-dark'>2.2</td>
              <td className='border border-dark'>GHG Intensity % Reduction (50% or above) target 2025</td>
              <td className='border border-dark'>50%</td>
              <td className='border border-dark'>33%</td>
              <td className='border border-dark'>41.64%</td>
              <td className='border border-dark'>50.25%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h1>Carbon Reduction Roadmap For C&F Operations</h1>
        </div>
        
      </div>
    </div>
  )
}

export default Environmental; 