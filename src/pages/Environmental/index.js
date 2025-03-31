import './style.css';
import img1 from './assets/img-1.png';
import img2 from './assets/img-2.png';
import img3 from './assets/img-3.png';
import ktImg1 from './assets/kt_img1.png';
import ktImg2 from './assets/kt_img2.png';
import ktImg3 from './assets/kt_img3.png';
import carbonNeutral from './assets/carbon_neutral.png';
import acb from './assets/acb.png';
import re from './assets/re.png';
import ei from './assets/ei.png';
import rc from './assets/rc.png';
import bi from './assets/bi.png';
import environmentalNature from './assets/environmental_nature.png';

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
          <h2>Key Targets:</h2>
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
          <h2>Working For The Global Environment</h2>
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
          <h2>Becoming Carbon-Neutral Business</h2>
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
          <h2>Carbon Reduction Roadmap For C&F Operations</h2>
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
          <h2>Resource Efficiency Through Innovation</h2>
        </div>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          <div className='col'>
            <div class="card">
              <img src={acb} class="card-img-top img-fluid" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Adopting Circular Business:</h5>
                <p class="card-text">Practices is a significant step toward sustainability and achieving a 50% improvement in resource and water use by 2050.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card">
              <img src={re} class="card-img-top img-fluid" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Resource Efficiency:</h5>
                <p class="card-text">Circular practices can minimize waste and enhance resource efficiency, leading to cost savings over time.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card">
              <img src={ei} class="card-img-top img-fluid" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Environmental Impact:</h5>
                <p class="card-text">Reducing resource and water use can significantly decrease your environmental footprint, contributing to global sustainability efforts.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card">
              <img src={rc} class="card-img-top img-fluid" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Regulatory Compliance:</h5>
                <p class="card-text">As regulations around sustainability tighten, adopting these practices can help ensure compliance and avoid potential penalties.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class="card">
              <img src={bi} class="card-img-top img-fluid" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Brand Image</h5>
                <p class="card-text">Demonstrating a commitment to sustainability can enhance your brand reputation, attracting eco-conscious consumers and investors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='d-sm-flex flex-row flex-wrap justify-content-between'>
          <div className='w-50 p-5 border border-dark'>
            <div className='text-center mb-5'>
              <h3>Carbon Reduction Roadmap For C&F Operations</h3>
            </div>
            <p>
              Becoming more circular means reducing waste and optimizing resource use across our operations. By refining our manufacturing processes, installing on-site recycling facilities, and reusing materials between business sites, we are minimizing the amount of unused resources that end up as waste.
            </p>
            <p>
              This approach aligns with our broader commitment to achieving zero waste to landfill by 2030 from our manufacturing sites. Additionally, we are improving water efficiency through continuous monitoring, controlling leakage, and reusing cooling water and purified wastewater, further advancing our sustainability goals.
            </p>
          </div>
          <div className='w-50 p-5 border border-dark'>
            <div className='text-center mb-5'>
              <h3>Innovating our Business Model</h3>
            </div>
            <p>
              To further reduce waste, we are transforming the way our products are shipped, used, and disposed of. C&F Manufacturing Phils. Corp. is introducing innovative business models, such as subscription-based services, sharing models, and pay-per-use systems, which promote longer product life cycles and reduce resource consumption.
            </p>
            <p>
              Additionally, we are collaborating with partners across our value chain to implement programs for recycling, repairing, and reselling used products, helping to close the loop and reduce environmental impact.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Minimizing Our Impact On Nature</h2>
        </div>
        <div className='d-flex flex-row flex-wrap'>
          <div className='w-50 p-5 pt-0'>
            <p>
              Defining your impact on biodiversity and aligning your operations with planetary boundaries can help ensure a more sustainable future. What steps are you considering to assess your impact.
            </p>
          </div>
          <img className='img-fluid' src={environmentalNature} alt='Minimizing Our Impact On Nature' width={450}></img>
        </div>
      </div>
    </div>
  )
}

export default Environmental; 