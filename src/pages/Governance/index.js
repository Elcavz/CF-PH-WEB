import './style.css';
import sustainabilityGovernance from './assets/sustainability-governance.png';
import framework from './assets/framework.png';
import businessEthics from './assets/business-ethics.png';
import taxCompliance from './assets/tax-compliance.png';
import holdingHands from './assets/holding-hands.png';
import wrong from './assets/wrong.png';

function Governance() {
  return (
    <div id='governance'>
      <div id='sustainability-social' className='py-5 mx-5'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <div className='p-5 py-0 d-flex align-items-center'>
            <div className='bg-dark h-50 p-5 d-flex align-items-center text-white rounded-4'>
              <h3 className='fw-bold'>
                Sustainability - Governance
              </h3>
            </div>
          </div>
          <img className='img-fluid rounded-3' src={sustainabilityGovernance} alt='Sustainability Social' width={800}></img>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Creating Impact Through Responsible Leadership</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50'>
            <p>
              Good governance is a cornerstone of effective sustainability practices. It ensures that organizations not only meet their immediate goals but also contribute to long-term environmental, social, and economic resilience. Strong governance provides the structure, processes, and accountability needed to embed sustainability into decision-making and operations.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Framework For Promoting Sustainability</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50'>
            <p>
              A clear organizational framework is essential for the successful delivery of strategy and the achievement of sustainability targets. By establishing a well-defined governance structure, you ensure that your commitments to transparency and accountability are not just ideals but are actively realized in day-to-day operations. This framework serves as a foundation for aligning actions with values, enabling you to track progress, address challenges, and demonstrate results to key stakeholders—including employees, shareholders, and the communities in which you operate.
            </p>
          </div>
        </div>
        <img className='img-fluid' src={framework} alt='Framework'></img>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h2>Our Governance Approach</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-75'>
            <p><span className='fw-bold'>Corporate governance</span> is essential for ensuring that the company is managed in a way that is accountable, transparent, and in the best interests of its stakeholders. Implementing strong corporate governance practices helps the company attract investment, ensure regulatory compliance, minimize risks, and support sustainable growth.</p>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <div className='w-50'>
            <h5>Ethical Standards and Corporate Social Responsibility (CSR)</h5>
            <p>Good corporate governance goes beyond legal compliance and financial oversight. Ethical conduct, environmental responsibility, and social contributions are increasingly seen as integral to long-term success. For <span className='fw-bold'>C&F Manufacturing Phil’s Corp</span>, CSR can include both <span className='fw-bold'>environmental sustainability</span> (minimizing waste, reducing emissions) and <span className='fw-bold'>social initiatives</span> (employee welfare, community involvement).</p>
            <h5>Code of Ethics:</h5>
            <ul>
              <li>Develop and enforce a <span className='fw-bold'>Code of Conduct</span> that outlines acceptable business practices and ethical behavior for employees, suppliers, and the board.</li>
              <li>Encourage a culture of <span className='fw-bold'>integrity</span> where management and employees are incentivized to act ethically and responsibly.</li>
            </ul>
            <h5>Corporate Social Responsibility (CSR):</h5>
            <ul>
              <li>Incorporate <span className='fw-bold'>sustainability initiatives</span> into manufacturing processes (e.g., reducing energy consumption, minimizing waste, adopting sustainable materials).</li>
              <li>Engage in community projects, invest in local development, and promote <span className='fw-bold'>ethical labor practices</span>.</li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='row row-cols-2'>
          <div className='p-5'>
            <h5>Business Ethics</h5>
            <p>
              C&F is committed to responsible business practices.
              The C&F Group Code of Ethics and Business Conduct sets high standards for business practices and compliance, and spells out decision-making procedures and actions for all C&F Group executives and employees.
            </p>
          </div>
          <img className='img-fluid' src={businessEthics} alt='Business Ethics'></img>
          <img className='img-fluid' src={taxCompliance} alt='Business Ethics'></img>
          <div className='p-5'>
            <h5>Tax Compliance</h5>
            <p>
              As a responsible business, we manage our global tax responsibilities in keeping with our mission and values.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-4'>
          <h2>Human Rights</h2>
        </div>
        <div className='d-flex justify-content-center my-4'>
          <div className='w-50'>
            <p>
              C&F has established comprehensive and robust policies to respect the human rights of workers throughout our value chain. This includes our Human Rights Risk Management Implementation Manual, produced in accordance with the UN Guiding Principles on Business and Human Rights. Further details can be found on our Social page.
            </p>
          </div>
        </div>
        <div className='text-center mb-4'>
          <h2>Conflict Minerals Procurement</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50'>
            <p>
              We investigate and respond to issues relating to conflict minerals across our business to minimize human-rights risk in the procurement of minerals. This compliments C&F's Group policy for Responsible Supply Chain of Minerals.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='text-center mb-4'>
          <h2>Working With Integrity</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50 mb-4'>
            <p>
              C&F Manufacturing Phils. Corp. is committed to creating an environment in which every employee feels safe and can perform at their best.
            </p>
          </div>
        </div>
        <div className='text-center mb-4'>
          <h2>Applying Ethical Standards In Our Day-to-day Work</h2>
        </div>
        <div className='d-flex justify-content-center my-4'>
          <div className='w-50'>
            <p>
              The C&F Manufacturing Phils. Corp. leads the One Compliance Program, a program for global compliance initiatives. We also conduct annual training for all employees to build understanding of our code of conduct and how they apply day-to-day.
            </p>
          </div>
        </div>
        <div className='text-center mb-4'>
          <h2>Understanding and Addressing Risk</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='w-50'>
            <p>
              C&F Manufacturing Phils. Corp. conducts comprehensive ethics and compliance risk assessments for all Group companies every three years. We also regularly review and identify concerns with any third parties with whom C&F does business.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='container py-5'>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
          <div className='w-50 d-flex flex-row flex-wrap justify-content-between'>
            <img className='img-fluid' src={holdingHands} alt='Encouraging Openness'></img>
            <div className='d-flex align-items-center'>
              <h5 className='m-0'>Encouraging openness</h5>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='w-50 d-flex flex-row flex-wrap justify-content-between'>
            <img className='img-fluid' src={wrong} alt='Encouraging Openness'></img>
            <div className='d-flex align-items-center w-50'>
              <h5 className='m-0'>We are committed to ensuring our employees feel safe to speak up and share concerns without fear of retaliation. We have established the C&F Global Compliance Hotline as a grievance mechanism available to C&F Group employees, business and procurement partners.</h5>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>ETHICS KPI 2024</h2>
        </div>
        <table class="table table-bordered border-dark mt-3">
          <thead>
            <tr>
              <th>Type of Concern</th>
              <th>No. of Cases</th>
              <th>Status</th>
              <th>Action Taken</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="concern-type">Workplace Misconduct</td>
              <td class="zero-cases">0</td>
              <td class="na-status">N/A</td>
              <td class="na-status">N/A</td>
            </tr>
            <tr>
              <td class="concern-type">Harassment Complaints</td>
              <td class="zero-cases">0</td>
              <td class="na-status">N/A</td>
              <td class="na-status">N/A</td>
            </tr>
            <tr>
              <td class="concern-type">Conflict of Interest</td>
              <td class="zero-cases">0</td>
              <td class="na-status">N/A</td>
              <td class="na-status">N/A</td>
            </tr>
            <tr>
              <td class="concern-type">Discrimination Reports</td>
              <td class="zero-cases">0</td>
              <td class="na-status">N/A</td>
              <td class="na-status">N/A</td>
            </tr>
            <tr>
              <td class="concern-type">Ethics Hotline Reports</td>
              <td class="zero-cases">0</td>
              <td class="na-status">N/A</td>
              <td class="na-status">N/A</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='mb-5'>
        <div class="container">
          <div className='text-center'>
            <h2>ETHICS TRAINING MONITORING</h2>
          </div>
          <div class="table-responsive">
            <table class="table border-dark table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>YEAR</th>
                  <th>TARGET (No. of Employees)</th>
                  <th>ACTUAL (No. of Employees)</th>
                  <th>Percentage % (Employee attended the training)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2022</td>
                  <td>250.00</td>
                  <td>250.00</td>
                  <td>100.00%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2023</td>
                  <td>350.00</td>
                  <td>350.00</td>
                  <td>100.00%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2024</td>
                  <td>503.00</td>
                  <td>503.00</td>
                  <td>100.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container mt-5">
          <div className='text-center'>
            <h2>CORRUPTION INCIDENTS</h2>
          </div>
          <div class="table-responsive">
            <table class="table border-dark table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Year</th>
                  <th>TARGET</th>
                  <th>ACTUAL</th>
                  <th>PERCENTAGE %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2022</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2023</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2024</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container mt-5">
          <div className='text-center'>
            <h2>WHISTLE BLOWING INCIDENTS</h2>
          </div>
          <div class="table-responsive">
            <table class="table border-dark table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Year</th>
                  <th>TARGET</th>
                  <th>ACTUAL</th>
                  <th>PERCENTAGE %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2022</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2023</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2024</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container mt-5">
          <div className='text-center'>
            <h2>INFORMATION SECURITY INCIDENTS</h2>
          </div>
          <div class="table-responsive">
            <table class="table border-dark table-bordered">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Year</th>
                  <th>TARGET</th>
                  <th>ACTUAL</th>
                  <th>PERCENTAGE %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2022</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2023</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2024</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td class="percentage">0.00%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Governance;