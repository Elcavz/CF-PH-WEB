import './style.css';
import sustainabilitySocial from './assets/sustainability-social.png';
import humanRights from './assets/human-rights.png';
import communityEngagement from './assets/community-engagement.png';
import genderBalance from './assets/gender-balance.png';
import training from './assets/training.png';
import healthAndSafety from './assets/health-and-safety.png';
import workSafety from './assets/work-safety.png';
import edi from './assets/edi.png';
import internalDiversityKpi from './assets/internal-diversity-kpi.png';

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
      <hr></hr>
      <section id='labor-and-human-rights-kpi' className='container py-5'>
        <div className='text-center'>
          <h2>LABOR AND HUMAN RIGHTS KPIs (2024)</h2>
        </div>
        <div className='my-3'>
          <table class="table table-bordered border-dark table-striped">
            <thead>
              <tr>
                <th>KPI</th>
                <th>2024 Target</th>
                <th>YTD Actual</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>% of workforce with formal employment contracts</td>
                <td>100%</td>
                <td>100%</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>% of employees receiving annual rights and ethical training</td>
                <td>100%</td>
                <td>100%</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>Number of reported child/forced labor cases</td>
                <td>0</td>
                <td>0</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>Lost Time Injury Frequency Rate (LTIFR)</td>
                <td>≤1.5</td>
                <td>0.69</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>Gender diversity in leadership positions</td>
                <td>≥30%</td>
                <td>55%</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>Grievance resolution rate within 10 days</td>
                <td>≥90%</td>
                <td>92%</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>Workplace satisfaction survey response rate</td>
                <td>≥75%</td>
                <td>85%</td>
                <td class="status-achieved">Achieved</td>
              </tr>
              <tr>
                <td>% of subcontracted labor verified for compliance</td>
                <td>≥90%</td>
                <td>100%</td>
                <td class="status-exceeded">Exceeded</td>
              </tr>
              <tr>
                <td>Percentage of facilities with completed DEI assessments</td>
                <td>100%</td>
                <td>100%</td>
                <td class="status-achieved">Achieved</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container mt-5">
          <div className='text-center'>
            <h2>TRAINING MONITORING</h2>
          </div>
          <div class="table-responsive">
            <table class="table border-dark table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>YEAR</th>
                  <th>TARGET (No. of Employees)</th>
                  <th>ACTUAL (No. of Employees)</th>
                  <th>Average hours of training per employee</th>
                  <th>Percentage % (Employee attended the training)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2023</td>
                  <td>350.00</td>
                  <td>335.00</td>
                  <td>88.00</td>
                  <td>95.71%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2024</td>
                  <td>503.00</td>
                  <td>500.00</td>
                  <td>96.00</td>
                  <td>99.40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>INTERNAL DIVERSITY KPI</h2>
        </div>
        <img className='img-fluid' src={internalDiversityKpi}></img>
      </section>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>LIVING WAGE METRICS/2024 WAGE LEVEL ASSESSMENT</h2>
        </div>
        <table class="table table-bordered border-dark mt-4">
          <thead>
            <tr>
              <th>Indicator</th>
              <th>Value</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Percentage of direct employees covered by a living wage benchmarking analysis</td>
              <td>100%</td>
              <td class="notes-cell">All direct employees included in the scope of internal HR assessment.</td>
            </tr>
            <tr>
              <td>Percentage of direct employees paid below the living wage</td>
              <td>60–70%</td>
              <td class="notes-cell">Majority of machine operators and entry-level roles earn below <span class="bold-text">P18,000/month</span>.</td>
            </tr>
            <tr>
              <td>Percentage of all employees paid below living wage, including direct and non-employee workers</td>
              <td>65–75%</td>
              <td class="notes-cell">Includes outsourced roles such as janitorial and security services.</td>
            </tr>
            <tr>
              <td>Percentage of average wage gap for direct employees paid below the living wage against benchmark</td>
              <td>20–30%</td>
              <td class="notes-cell">The wage gap calculated based on average pay vs. living wage threshold.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Social; 