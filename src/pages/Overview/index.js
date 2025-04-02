import test from './assets/Overview_pic.png';

function Overview() {
  return (
    <div className="bg-dark">
      <div className="container bg-white">
        <div className="d-flex flex-column justify-content-between">
          <div className='p-5 d-flex justify-content-center align-items-center'>
            <img className='img-fluid' src={test}></img>
          </div>
          <h4>C&F Group – Corporate Social Responsibility (CSR) Overview</h4>
          <p>C&F Group is committed to sustainability, ethical business practices, and positive social impact. Our CSR strategy aligns with global environmental and social goals while driving innovation and long-term business sustainability.
          </p>
          <h5>1. Environmental Responsibility</h5>
          <p>We prioritize sustainable practices to reduce our environmental footprint, including Carbon Footprint Reduction, Sustainable Manufacturing & Supply Chain, Waste Management & Circular Economy and Water & Resource Conservation.
          </p>
          <h5>2. Social Responsibility</h5>
          <p>C&F Group is dedicated to creating a positive impact on employees, communities, and stakeholders.</p>
          <h5>3. Ethical & Economic Responsibility</h5>
          <p>We uphold integrity, transparency, and accountability in all business operations.</p>
        </div>
        <div className='mt-2'>
          <h5>Our Commitment</h5>
          <p className='m-0 pb-3'>C&F Group believes that responsible business practices are key to long-term success. Through continuous improvement, collaboration, and innovation, we strive to create a positive impact on the planet and society while maintaining business excellence.</p>
        </div>
        <p className='m-0'>
          C&F is proud to partner with the UN Global Compact (UNGC) to strengthen our commitment to sustainability. Together, we’re working toward a more equitable and responsible future because we believe that caring for people and the planet is at the heart of meaningful progress.
        </p>
      </div>
    </div>
  )
}

export default Overview;