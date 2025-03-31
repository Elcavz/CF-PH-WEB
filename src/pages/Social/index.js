import './style.css';
import sustainabilitySocial from './assets/sustainability-social.png';
import humanRights from './assets/human-rights.png';
import communityEngagement from './assets/community-engagement.png';
import genderBalance from './assets/gender-balance.png';
import training from './assets/training.png';
import healthAndSafety from './assets/health-and-safety.png';
import workSafety from './assets/work-safety.png';
import edi from './assets/edi.png';

function Social() {
  return (
    <div id='social'>
      <div id='sustainability-social' className='container py-5'>
        <div className='text-center mb-5'>
          <h2>SUSTAINABILITY SOCIAL</h2>
        </div>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <div className='w-50 p-5 py-0'>
            <p>
              "C&F culture is at the heart of our mission to unlock a sustainable future. By fostering an inclusive and collaborative workplace, we inspire diverse perspectives and fresh ideas, driving innovative solutions that create lasting, positive change for all."
            </p>
            <p>
              "Beyond our own workplace, we actively collaborate with partners across our value chain and engage with communities to support local initiatives. By empowering the next generation of talent, we strengthen the foundation for a more sustainable and equitable future. Because together, we are stronger."
            </p>
          </div>
          <img className='img-fluid rounded-3' src={sustainabilitySocial} alt='Sustainability Social' width={500}></img>
        </div>
      </div>
      <hr></hr>
      <div id='human-rights' className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Respect Human Rights</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50'>
            <p>
              "We collaborate with our partners to uphold and respect human rights across our global value chain, ensuring ethical practices at every step."
            </p>
            <img src={humanRights} alt='Human Rights' width={640}></img>
          </div>
        </div>
      </div>
      <hr></hr>
      <div id='community-engagements' className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Community Engagements</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50'>
            <p>
              "We are committed to nurturing and empowering the next generation of talent, ensuring they have the skills and opportunities to support and uplift the communities where we operate."
            </p>
            <img className='rounded-3 img-fluid' src={communityEngagement} alt='Human Rights' width={640}></img>
          </div>
        </div>
      </div>
      <hr></hr>
      <div id='social-goals' className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Social Goals</h2>
        </div>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <img className='img-fluid' src={genderBalance} width={350}></img>
          <img className='img-fluid' src={training} width={350}></img>
          <img className='img-fluid' src={healthAndSafety} width={350}></img>
        </div>
      </div>
      <hr></hr>
      <div id='social-goals' className='container py-5'>
        <div className='d-flex flex-row justify-content-between'>
          <div className='w-50'>
            <h3>Health and Safety Places</h3>
            <img className='img-fluid p-5' src={workSafety} alt='Work Safety'></img>
          </div>
          <div className='w-50'>
            <h3>Equity, Diversity, and Inclusion</h3>
            <img className='img-fluid p-5' src={edi} alt='Equity, Diversity, and Inclusion'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social; 