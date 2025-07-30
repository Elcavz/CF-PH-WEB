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
import supplierDiversityProgram from './assets/supplier-diversity-program.png';
import supplierSustainabilityComplaint2024 from './assets/supplier-sustainability-complaint-2024.png';
import crlCalabarquezCorp from './assets/CRL-Calabarquez-Corp.png';
import crlCalabarquezCorp2 from './assets/CRL-Calabarquez-Corp-2.png';
import crlCalabarquezCorp3 from './assets/CRL-Calabarquez-Corp-3.png';
import wem2024 from './assets/WEM-2024.png';
import wem2 from './assets/WEM-2024-2.png';
import wem3 from './assets/WEM-2024-3.png';
import fourthQuarterDomesticWasteWater2024Result1 from './assets/2024-4th-Quarter-Domestic-Wastewater-Result1.png';
import fourthQuarterDomesticWasteWater2024Result2 from './assets/2024-4th-Quarter-Domestic-Wastewater-Result2.png';
import certificateOfTreatment2024 from './assets/certificate-of-treatment-2024.png';
import recCertificate from './assets/REC-Certificate.png';

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
          {/* <img className='img-fluid rounded-4' src={ktImg2} width={500}></img> */}
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
          From 2019 to 2024, C&F reduced its CO₂ intensity (per unit of sales) by 57.11% through strategic initiatives, including process automation, operational efficiency improvements, investments in energy-efficient assets, electrification, and electricity decarbonization.

          Building on this progress, we are committed to further reducing our CO₂ intensity by up to 75% by 2027, reinforcing our dedication to sustainability and environmental stewardship.

          Additionally, in 2024, C&F procured 600 Renewable Energy Certificates (RECs) to support clean energy generation. This milestone will soon be reflected on our website as part of our transparent sustainability reporting.
        </p>
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
      <section className='container py-5'>
        <div className='text-center'>
          <h2>GHG Emission Value/Inventory</h2>
        </div>
        <table class="table table-bordered border-dark mt-4">
          <thead>
            <tr>
              <th colSpan={7} className='text-center'>C&F GHG Emission Report</th>
            </tr>
            <tr>
              <th>Sr. No.</th>
              <th>Item</th>
              <th>Base/Target</th>
              <th colSpan={4} className='text-center'>Actual data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="centered">1</td>
              <td>Base year (YYYY)</td>
              <td class="centered">2019</td>
              <td class="centered">2022</td>
              <td class="centered">2023</td>
              <td class="centered">2024</td>
              <td class="centered">2025</td>
            </tr>
            <tr>
              <td class="centered">1.1</td>
              <td>Scope 1 (tons)</td>
              <td class="centered">686</td>
              <td class="centered">527.4</td>
              <td class="centered">510</td>
              <td class="centered">305</td>
              <td class="centered ongoing">ongoing</td>
            </tr>
            <tr>
              <td class="centered">1.2</td>
              <td>Scope 2 (tons)</td>
              <td class="centered">1423</td>
              <td class="centered">1442.42</td>
              <td class="centered">1879.23</td>
              <td class="centered">1876.31 <span className='alert alert-warning m-2 p-2'>Included 600 REC</span></td>
              <td class="centered ongoing">ongoing</td>
            </tr>
            <tr>
              <td class="centered">2.1</td>
              <td>Target CO₂ Intensity Reduction (%)</td>
              <td></td>
              <td class="centered">-20%</td>
              <td class="centered negative-value">-30%</td>
              <td class="centered negative-value">-40%</td>
              <td class="centered negative-value">-50%</td>
            </tr>
            <tr>
              <td class="centered">2.2</td>
              <td>Actual CO₂ Intensity Reduction (%)</td>
              <td></td>
              <td class="centered negative-value">-33%</td>
              <td class="centered negative-value">-42%</td>
              <td class="centered">57.11%</td>
              <td class="centered ongoing">ongoing</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-bordered border-dark mt-5">
          <thead>
            <tr>
              <th colspan="3" class="text-center">Scope 3 - Ongoing Calculation</th>
            </tr>
            <tr>
              <th>S No.</th>
              <th>Flow</th>
              <th>CO2e MT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Downstream delivery</td>
              <td class="number-cell">388.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Upstream</td>
              <td class="number-cell">215.00</td>
            </tr>
            <tr class="total-row">
              <td colspan="2" className='text-center'>Total</td>
              <td class="number-cell"><b>603.00</b></td>
            </tr>
          </tbody>
        </table>

        <section className='py-5 px-3 container'>
          <div className='text-center'>
            <h2>REC CERTIFICATE</h2>
          </div>
          <div className='d-flex flex-wrap flex-row justify-content-evenly mt-3'>
            <img className='img-fluid' src={recCertificate} height={600} width={600}></img>
          </div>
          <div className='mt-5'>
            <h3>Production Device Details</h3>
            <table class="table table-bordered border-dark">
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Country of Origin</th>
                  <th>Energy Source</th>
                  <th>Technology</th>
                  <th>Supported</th>
                  <th>Commissioning Date</th>
                  <th>Carbon (CO<sub>2</sub> / MWh)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magat Hydroelectric Power Plant</td>
                  <td>Philippines</td>
                  <td>Hydro-electric</td>
                  <td>Dam</td>
                  <td>No</td>
                  <td>1983-08-14</td>
                  <td>0.000000</td>
                </tr>
              </tbody>
            </table>

            <h3>Redeemed Certificates</h3>
            <table class="table table-bordered border-dark">
              <thead>
                <tr>
                  <th>From Certificate ID</th>
                  <th>To Certificate ID</th>
                  <th>Number of Certificates</th>
                  <th>Offset Attributes</th>
                  <th>Period of Production</th>
                  <th>Issuer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0000-0221-5881-7368.010000</td>
                  <td>0000-0221-5881-7393.009999</td>
                  <td>25.000000</td>
                  <td>Incl</td>
                  <td>2024-06-26 - 2024-07-25</td>
                  <td>The Green Certificate Company (Central Issuer)</td>
                </tr>
                <tr>
                  <td>0000-0221-5889-1364.460000</td>
                  <td>0000-0221-5889-1939.459999</td>
                  <td>575.000000</td>
                  <td>Incl</td>
                  <td>2024-07-26 - 2024-08-25</td>
                  <td>The Green Certificate Company (Central Issuer)</td>
                </tr>
              </tbody>
            </table>
            <div className='text-center mt-4'>
              <h3>Auditor Notes</h3>
              <br></br>
              <p>
                This statement is proof of the secure and unique redemption of the I-RECs stated above for the named beneficiary to be reported
                against consumption in the country during the reporting year stated. I-RECs are assigned to a beneficiary at redemption and cannot be
                further assigned to a third party. No other use of these I-RECs is valid under the I-REC Standard.
                Where offset attributes are 'incl' the device registrant, who exclusively holds the environmental attribute rights, has undertaken never
                to release carbon offsets in association with these MWh; 'excl' means carbon offsets relating to these MWh may be traded
                independently at some point in the future.
                Thermal plants emit carbon as part of the combustion process. While this is not zero carbon, it is generally recognised as carbon neutral
                where the source is recent biomass.
              </p>
            </div>
          </div>
        </section>
      </section>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>YEAR 2024 CONSUMPTION</h2>
        </div>
        <table className='table table-bordered border-dark mt-4'>
          <tbody>
            <tr>
              <td><b>ELECTRICITY</b></td>
              <td><b>3,371,900 KWH</b></td>
            </tr>
            <tr>
              <td><b>DIESEL</b></td>
              <td><b>121,205 LITER</b></td>
            </tr>
            <tr>
              <td><b>WATER</b></td>
              <td><b>22,023 LITER</b></td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>SUSTAINABLE PROCUREMENT KPI 2024</h2>
        </div>
        <table class="table table-bordered border-dark mt-4">
          <thead>
            <tr>
              <th className='text-center'>KPI</th>
              <th>2024 Target</th>
              <th>YTD Actual</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="kpi-name">ESG Assessment of New Suppliers</td>
              <td>100%</td>
              <td>95%</td>
              <td class="status-ontrack">On Track</td>
            </tr>
            <tr>
              <td class="kpi-name">Local Sourcing by Spend</td>
              <td>≥ 60%</td>
              <td>62%</td>
              <td class="status-achieved">Achieved</td>
            </tr>
            <tr>
              <td class="kpi-name">Supplier Code Compliance</td>
              <td>100%</td>
              <td>100%</td>
              <td class="status-achieved">Achieved</td>
            </tr>
            <tr>
              <td class="kpi-name">Spend on Sustainable Materials</td>
              <td>≥ 75%</td>
              <td>90%</td>
              <td class="status-exceeded">Exceeded</td>
            </tr>
            <tr>
              <td class="kpi-name">High-Risk Supplier Audits</td>
              <td>75%</td>
              <td>95%</td>
              <td class="status-exceeded">Exceeded</td>
            </tr>
            <tr>
              <td class="kpi-name">Procurement Staff ESG Training</td>
              <td>2 sessions</td>
              <td>2 sessions</td>
              <td class="status-achieved">Achieved</td>
            </tr>
            <tr>
              <td class="kpi-name">CO₂ Reduction from Transport</td>
              <td>10%</td>
              <td>12%</td>
              <td class="status-exceeded">Exceeded</td>
            </tr>
            <tr>
              <td class="kpi-name">Paperless Procurement Transactions</td>
              <td>100%</td>
              <td>100%</td>
              <td class="status-achieved">Achieved</td>
            </tr>
            <tr>
              <td class="kpi-name">Supplier Diversity (SMEs, Women-led)</td>
              <td>30%</td>
              <td>33%</td>
              <td class="status-achieved">Achieved</td>
            </tr>
            <tr>
              <td class="kpi-name">Grievance Resolution Time (Avg. Days)</td>
              <td>≤ 10 days</td>
              <td>8 days</td>
              <td class="status-achieved">Achieved</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-bordered border-dark">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>KPI</th>
              <th>2022</th>
              <th>2023</th>
              <th>2024</th>
              <th>Target 2025</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>% of Tier 1 Suppliers with ISO 14001 Certification</td>
              <td>45%</td>
              <td>57%</td>
              <td>63%</td>
              <td>75%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>% of Suppliers Audited for Environmental Criteria</td>
              <td>22%</td>
              <td>34%</td>
              <td>94%</td>
              <td>100%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Procurement Spend on Local Suppliers</td>
              <td>58%</td>
              <td>61%</td>
              <td>64%</td>
              <td>≥65%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Average Supplier Sustainability Score (Internal)</td>
              <td>68/100</td>
              <td>73/100</td>
              <td>77/100</td>
              <td>≥80</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Supplier Code of Conduct</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Supplier Contract</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Corrective Action/ Capacity Building</td>
              <td>75%</td>
              <td>80%</td>
              <td>90%</td>
              <td>100%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Supplier Risk Assessment</td>
              <td>62%</td>
              <td>76%</td>
              <td>94%</td>
              <td>100%</td>
              <td>%</td>
            </tr>
            <tr>
              <td>9</td>
              <td>C&F Buyers Training</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>%</td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr></hr>
      <section className='p-5'>
        <div className='d-flex flex-row justify-content-between flex-wrap'>
          <div>
            <h3>SUPPLIER DIVERSITY PROGRAM</h3>
            <img className='img-fluid my-3' src={supplierDiversityProgram}></img>
            <div className='mt-2'>
              <table class="table table-bordered border-dark">
                <thead>
                  <tr>
                    <th>Diversity Program</th>
                    <th>Description</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="program-name">WBE</td>
                    <td>Women Owned Business</td>
                    <td class="percentage-cell">25%</td>
                  </tr>
                  <tr>
                    <td class="program-name">LBTBE</td>
                    <td>LGBTQ+ Owned Business</td>
                    <td class="percentage-cell">2%</td>
                  </tr>
                  <tr>
                    <td class="program-name">SME</td>
                    <td>Small Midsize Enterprise</td>
                    <td class="percentage-cell">25%</td>
                  </tr>
                  <tr>
                    <td class="program-name">SBE</td>
                    <td>Small Business Enterprise</td>
                    <td class="percentage-cell">43%</td>
                  </tr>
                  <tr>
                    <td class="program-name">MBE</td>
                    <td>Minority Owned Business</td>
                    <td class="percentage-cell">0%</td>
                  </tr>
                  <tr>
                    <td class="program-name">VBE</td>
                    <td>Veteran Owned Business</td>
                    <td class="percentage-cell">2%</td>
                  </tr>
                  <tr>
                    <td class="program-name">DBE</td>
                    <td>Disability/Veteran Owned Business</td>
                    <td class="percentage-cell">2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3>SUPPLIER DIVERSITY PROGRAM</h3>
            <img className='img-fluid my-3' src={supplierSustainabilityComplaint2024}></img>
            <div className='mt-4'>
              <table class="table table-bordered border-dark mt-3">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Target Supplier Compliant</th>
                    <th>Actual Supplier Compliant</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="description-cell">Supplier Code of Conduct</td>
                    <td class="number-cell">52</td>
                    <td class="number-cell">52</td>
                    <td class="percentage-cell perfect-score">100%</td>
                  </tr>
                  <tr>
                    <td class="description-cell">Supplier Contract</td>
                    <td class="number-cell">52</td>
                    <td class="number-cell">52</td>
                    <td class="percentage-cell perfect-score">100%</td>
                  </tr>
                  <tr>
                    <td class="description-cell">Sustainability Assessment</td>
                    <td class="number-cell">52</td>
                    <td class="number-cell">49</td>
                    <td class="percentage-cell high-score">94%</td>
                  </tr>
                  <tr>
                    <td class="description-cell">Sustainability On-Site Audit</td>
                    <td class="number-cell">52</td>
                    <td class="number-cell">49</td>
                    <td class="percentage-cell high-score">94%</td>
                  </tr>
                  <tr>
                    <td class="description-cell">Corrective Action/Capacity Building</td>
                    <td class="number-cell">52</td>
                    <td class="number-cell">47</td>
                    <td class="percentage-cell high-score">90%</td>
                  </tr>
                  <tr>
                    <td class="description-cell">Supplier Risk Assessment</td>
                    <td class="number-cell">52</td>
                    <td class="number-cell">49</td>
                    <td class="percentage-cell high-score">94%</td>
                  </tr>
                  <tr>
                    <td class="description-cell">C&F Buyers Training</td>
                    <td class="number-cell">3</td>
                    <td class="number-cell">3</td>
                    <td class="percentage-cell perfect-score">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* <section className='py-5 px-3'>
        <div className='text-center'>
          <h2>AMBIENT AIR REPORT 2024</h2>
        </div>
        <div className='d-flex flex-wrap flex-row justify-content-evenly mt-3'>
          <img className='img-fluid' src={crlCalabarquezCorp} height={600} width={600}></img>
          <img className='img-fluid' src={crlCalabarquezCorp2} height={600} width={600}></img>
          <img className='img-fluid border border-dark' src={crlCalabarquezCorp3} height={600} width={600}></img>
        </div>
      </section>
      <hr></hr>
      <section className='py-5 px-3'>
        <div className='text-center'>
          <h2>WEM 2024</h2>
        </div>
        <div className='d-flex flex-wrap flex-row justify-content-evenly mt-3'>
          <img className='img-fluid' src={wem2024} height={600} width={600}></img>
          <img className='img-fluid' src={wem2} height={600} width={600}></img>
          <img className='img-fluid border border-dark' src={wem3} height={600} width={600}></img>
        </div>
      </section>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>2024 4TH QUARTER DOMESTIC WASTEWATER</h2>
        </div>
        <div className='d-flex flex-wrap flex-row justify-content-evenly mt-3'>
          <div className='mt-4'>
            <h3>Result 1</h3>
            <img className='img-fluid' src={fourthQuarterDomesticWasteWater2024Result1} height={560} width={560}></img>
          </div>
          <div className='mt-4'>
            <h3>Result 2</h3>
            <img className='img-fluid' src={fourthQuarterDomesticWasteWater2024Result2} height={560} width={560}></img>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className='container py-5'>
        <div className='text-center'>
          <h2>CERTIFICATE OF TREATMENT 2024</h2>
          <img className='img-fluid border border-dark mt-4' src={certificateOfTreatment2024} height={480} width={480}></img>
        </div>
      </section>
      <hr></hr> */}
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