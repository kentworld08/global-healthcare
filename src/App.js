import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./header.css";
import VideoPlayer from "./videoPlayer";
import SupplierIntelligence from "./supplierIntelligence";
import SupplyRiskManagement from "./supplyRiskManagement";
import SupplyChainRiskManagement from "./supplyChainRiskManagement";
import SupplySolutionLinks from "./supplySolutionLinks";
import ContactUs from "./contactUs";
import Aos from "aos";
import "aos/dist/aos.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeSection: "home",
      showVideo: false,
    };
  }

  handleToggleModal = () => {
    this.setState((prevState) => ({
      showVideo: !prevState.showVideo,
    }));
  };

  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    Aos.init({
      duration: 1000,
      offset: 50,
      once: true,
    });
  }

  render() {
    const { activeSection } = this.state;
    return (
      <div className="globalHealthCareContainer">
        <nav className="navBar">
          <div className="navbar-container">
            <div
              className="brand"
              onClick={() => this.setActiveSection("home")}
            >
              {" "}
              <img src="/image/logo-favicon.png" />
              <h1>Global Healthcare</h1>
            </div>
            <button
              className="menu-toggle"
              onClick={this.toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
            <ul className={`nav-links ${this.state.isOpen ? "open" : ""}`}>
              <li>
                <a href="#home" onClick={() => this.setActiveSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  onClick={() => this.setActiveSection("company")}
                  className={activeSection === "company" ? "active-link" : ""}
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => this.setActiveSection("about")}
                  className={activeSection === "about" ? "active-link" : ""}
                >
                  About
                </a>
              </li>
              <li
                className="contactbtn"
                onClick={() => this.setActiveSection("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </nav>
        {activeSection === "home" && (
          <div>
            <section className="landingPage">
              <div className="landingPageIntro">
                <h2>Shape the Future as a Healthcare Hero</h2>
                <h1>
                  You don’t just dream of a stronger and resilient healthcare
                  you build it.
                </h1>
                <button
                  className="btn-lg open-modal-btn"
                  onClick={this.handleToggleModal}
                >
                  Watch Video <i className="fa-solid fa-play"></i>
                </button>
              </div>
              <aside className="imgCover">
                <img src="/image/hero-person.png" alt="hero-person"></img>
              </aside>
            </section>
            <section className="vision" data-aos="fade-up">
              <div className="empty"></div>
              <div className="visionContent">
                <h2>With Exceptional Insight</h2>
                <h1>
                  Gain complete visibility into your entire multi-tier supplier
                  network and drive smarter, faster decisions with precision and
                  clarity
                </h1>
              </div>
            </section>
            <section className="AnalyticalSuperpowers" data-aos="fade-up">
              <div className="AnalyticalSuperpowersIntro ">
                <h2>Advanced Analytical Capabilities</h2>
                <h1>
                  To derive insights, assess risks, and mitigate disruptions
                  before they arise to ensure seamless operations...
                </h1>
                <button
                  className="btn-lg"
                  onClick={() => this.setActiveSection("about")}
                >
                  Learn More
                </button>
              </div>
              <div className="AnalyticalContainer">
                <aside className="AnalyticalSuperpowersModule">
                  <img src="/image/Alert 01.webp" alt="alert1" />
                  <img src="/image/Alert 02.webp" alt="alert2" />
                  <img src="/image/Alert 03.webp" alt="alert3" />
                  <img src="/image/Alert 04.webp" alt="alert4" />
                  <img src="/image/Alert 05.webp" alt="alert5" />
                  <img src="/image/Alert 06.webp" alt="alert6" />
                  <img src="/image/Alert 07.webp" alt="alert7" />
                  <img src="/image/Alert 08.webp" alt="alert8" />
                  <img src="/image/Alert 09.webp" alt="alert9" />
                  <img src="/image/Alert 10.webp" alt="alert10" />
                </aside>
              </div>
            </section>
            <section className="moderntechnology" data-aos="fade-up">
              <div className="moderntechnologyintro">
                <h2>Innovative Technologies</h2>
                <h1>
                  To enable efficient collaboration within your organization
                  across the healthcare sector....
                </h1>
              </div>
              <aside className="moderntechnologyimage"></aside>
            </section>
            <section className="supplychain" data-aos="fade-up">
              <aside className="supplychainimage"></aside>
              <div className="supplychainintro">
                <h1>...and across your supply chain.</h1>
              </div>
            </section>
            <section className="decision" data-aos="fade-up">
              <div className="decisionIntro">
                <h1>
                  To drive strategic decisions, reduce risk exposure, and build
                  long term resilience.
                </h1>
                <button
                  className="btn-n"
                  onClick={() => this.setActiveSection("company")}
                >
                  Learn More
                </button>
              </div>
              <aside className="decisionImageContainer">
                <div className="decisionImagewraper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    width="400"
                    height="400"
                  >
                    <g fill="none" strokeWidth="8">
                      <circle cx="100" cy="100" r="90" stroke="#a15cc3" />
                      <circle
                        cx="100"
                        cy="100"
                        r="60"
                        stroke="rgb(22, 176, 207)"
                      />
                      <circle cx="100" cy="100" r="30" stroke="#ffffff" />
                    </g>
                  </svg>
                </div>
              </aside>
            </section>
            <section data-aos="fade-up">
              <VideoPlayer />
            </section>
            <section>
              <div className="riskAssessment">
                <img
                  className="riskAssessmentImage-1"
                  src="https://global.craft.co/wp-content/themes/craftco/static/images/bg-hero-top-left.png"
                  alt="hero-top-left"
                />
                <div className="supplyRiskAssessment">
                  <h1>Secure your NO-COST Supplier Risk Assessment today.</h1>
                  <p>
                    Connect with our experts to evaluate the risk factors most
                    crucial to your global healthcare network. Learn how the
                    platform can assist in ongoing monitoring, prioritize risks
                    by their potential impact, and strengthen the resilience of
                    your healthcare.
                  </p>
                </div>
                <div className="riskAssessmentImageContainer"></div>
              </div>
            </section>
            <section className="solutionContainer" data-aos="fade-up">
              <div className="solutions">
                <h1>Learn more about Global Healthcare solutions</h1>
              </div>
              <div className="solutionIntro">
                <SupplySolutionLinks />
                <Routes>
                  <Route
                    exact="true"
                    path="/SupplierIntelligence"
                    element={<SupplierIntelligence />}
                  />
                  <Route
                    exact="true"
                    path="/supplyChainRiskManagement"
                    element={<SupplyChainRiskManagement />}
                  />
                  <Route
                    exact="ture"
                    path="/SupplyRiskManagement"
                    element={<SupplyRiskManagement />}
                  />
                </Routes>
              </div>
            </section>
            <section className="RiskCategories" data-aos="fade-up">
              <div className="RiskCategoriesIntro">
                <div className="RiskCategoriesIntroText">
                  <h2>Risk Factors</h2>
                  <h1>
                    Gain a comprehensive overview of supplier health with more
                    than
                    <strong> 500 data points</strong> across essential risk
                    factors.
                  </h1>
                </div>

                <div className="RiskCategoriesIntroBoxContainer">
                  <div className="RiskCategoriesIntroBox">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Pillar-2-Icon.svg"
                      alt="pillar"
                    />
                    <h1>Cybersecurity</h1>
                  </div>
                  <div className="RiskCategoriesIntroBox">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Platform_Risk_Icon_5.svg"
                      alt="risk-icon"
                    />
                    <h1>Environmental and Social Government</h1>
                  </div>
                  <div className="RiskCategoriesIntroBox">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Platform_Risk_Icon_1.svg"
                      alt="risk"
                    />
                    <h1>Financial</h1>
                  </div>
                  <div className="RiskCategoriesIntroBox">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Platform_Risk_Icon_3.svg"
                      alt="icon"
                    />
                    <h1>Geopolitical</h1>
                  </div>
                  <div className="RiskCategoriesIntroBox">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Platform_Risk_Icon_2.svg"
                      alt="introbox"
                    />
                    <h1>Regulatory & Compliance</h1>
                  </div>
                </div>
              </div>
              <aside className="RiskCategoriesImg"></aside>
            </section>
            <section className="customer" data-aos="zoom-in">
              <div className="customerModule">
                <div className="customerSpotlightContainer">
                  <div className="customerIntro">
                    <h1>CUSTOMER SPOTLIGHT</h1>
                    <p>
                      "There are many tools available, but we chose Global
                      Healthcare for its intuitive intelligence platform
                      tailored to healthcare sector. In healthcare procurement,
                      it's essential to have detailed insights into our
                      suppliers. The platform provides comprehensive supplier
                      profiles, daily alerts, and continuously adapts to our
                      organization's specific needs. Global Healthcare equips us
                      with measurable, objective KPIs for each supplier."
                    </p>
                    <h2>Julia Fining</h2>
                    <p>Head of Procurement Excellence, Hapag Lioyd</p>
                  </div>
                  <div className="custmerImg">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Logo_2.png"
                      alt="logo-2"
                    />
                  </div>
                </div>
                <div className="customerSpotlightContainer">
                  <div className="customerIntro">
                    <h1>CUSTOMER SPOTLIGHT</h1>
                    <p>
                      "Global Healthcare has been a crucial partner in
                      transforming our approach to risk management and
                      resilience within the healthcare sector. Furthermore,
                      Global Healthcare has been instrumental in centralizing
                      vital healthcare intelligence and due diligence, fostering
                      a new era of collaboration across our teams through
                      integrated commenting, threading, and documentation."
                    </p>
                    <h2>Department of Defense</h2>
                  </div>
                  <div className="custmerImg">
                    <img
                      src="https://global.craft.co/wp-content/uploads/2023/12/image-17.png"
                      alt="img-17"
                    />
                  </div>
                </div>
                <div className="customerSpotlightContainer">
                  <div className="customerIntro">
                    <h1>CUSTOMER SPOTLIGHT</h1>
                    <p>
                      "Global Healthcare has been a transformative partner for
                      TSB, enabling us to enhance our supplier risk monitoring
                      processes. With Global Healthcare, we have developed a
                      holistic understanding of risk, improving our ability to
                      address supplier challenges effectively. This
                      collaboration strengthens our commitment to maintaining
                      robust risk management practices within the ever-evolving
                      global healthcare landscape."
                    </p>
                    <h2>TSB</h2>
                  </div>
                  <div className="custmerImg">
                    <img
                      src="https://global.craft.co/wp-content/uploads/2023/12/image-16.png"
                      alt="img-16"
                    />
                  </div>
                </div>
              </div>
              <div className="LearningMore">
                <h1>Learn More</h1>
              </div>

              <div className="learnMoreContainer">
                <div className="article">
                  <h1>Article</h1>

                  <p>
                    Craft Appoints technology and Supply Chain Luminaries to
                    Advisory Board
                  </p>
                  <h2>Read Now</h2>
                </div>
                <div className="article">
                  <h1>Article</h1>
                  <p>
                    The U.S. Department of Energy Selects Craft to Protect
                    Federal Investments from Foreign Influence
                  </p>
                  <h2>Read Now</h2>
                </div>
                <div className="article">
                  <h1>Article</h1>
                  <p>
                    Craft Named "Top 50 Providers to Watch" By Spend Matters
                  </p>
                  <h2>Read Now</h2>
                </div>
              </div>
            </section>
          </div>
        )}
        {activeSection === "contact" && (
          <section data-aos="fade-up" className="contactSection">
            <div className="contactFormText">
              <h1>Contact Us</h1>
              <p>
                Discover how the Global Healthcare platform empowers you to
                continuously monitor and prioritize challenges based on their
                impact on healthcare operations, enabling you to effectively
                mitigate risks and enhance resilience across the healthcare
                ecosystem.
              </p>
            </div>

            <ContactUs />
          </section>
        )}
        {activeSection === "company" && (
          <div>
            <section className="companypage">
              <div className="companypageIntro">
                <h2>Culture & Careers</h2>
                <h1>
                  Our collective mission is to advance responsible and
                  sustainable global healthcare systems, promoting ethical
                  practices, minimizing environmental impact, and contributing
                  to a healthier, more resilient world for everyone.
                </h1>
                <button
                  className="btn-lg open-modal-btn"
                  onClick={this.handleToggleModal}
                >
                  Watch Video <i className="fa-solid fa-play"></i>
                </button>
              </div>
              <aside className="companyImgCover"></aside>
            </section>
            <section className="valuesLeadSection">
              <div className="valuesLead">
                <h1>Our Values Drive Our Success</h1>
                <p>
                  To advance our mission, we have cultivated a supportive and
                  excellence focused environment that prioritizes innovation,
                  collaboration, humility, and accountability. We value the
                  unique contributions of every individual and believe that,
                  together, we can make a transformative impact on global
                  healthcare both locally and globally.
                </p>
              </div>
            </section>
            <section className="EmployeeSpotlightSection">
              <div className="EmployeeSpotlightContainer">
                <div className="EmployeeSpotlightText">
                  <h1>Employee Spotlight</h1>
                  <p>
                    "Global Healthcare serves as a hub for innovative
                    initiatives and advanced technology. I’ve had the honor of
                    developing solutions to critical healthcare challenges,
                    which have evolved into impactful tools now utilized by
                    healthcare providers and organizations worldwide. Our
                    commitment to innovation is at the heart of our mission,
                    fostering a seamless collaboration between our healthcare
                    solutions and product development teams to drive meaningful
                    advancements and transformative features forward." <br />
                    <br />
                    <span className="highlight">David Miller</span>
                    <br />
                    Project Manager
                  </p>
                </div>
                <div className="EmployeeSpotlightImage"></div>
              </div>
            </section>
            <section>
              <div className="riskAssessment">
                <img
                  className="riskAssessmentImage-1"
                  src="https://global.craft.co/wp-content/themes/craftco/static/images/bg-hero-top-left.png"
                  alt="bg-hero-top-left"
                />
                <div className="lifeAtGlobalHealthcare">
                  <h1>
                    Where commitment aligns with vision for a healthier, more
                    sustainable global healthcare future.
                  </h1>
                  <p>
                    We are a diverse and dedicated team of professionals—ranging
                    from healthcare technologists and data scientists to medical
                    experts and operational specialists. While advancing global
                    healthcare is a critical mission, we foster a culture of
                    warmth, collaboration, and innovation. This unique approach
                    strengthens partnerships, enhances teamwork, and drives the
                    development of transformative solutions to improve health
                    outcomes worldwide.
                  </p>
                </div>
                <div className="riskAssessmentImageContainer">
                  <img
                    className="globalhealth"
                    src="/image/life-at-global-healthcare.jpg"
                    alt="global-health"
                  />
                </div>
              </div>
            </section>
            <section>
              <div className="employeesBenefit">
                <h1>Employee Benefits</h1>
                <div className="benefitListContainer">
                  <ul className="benefitList">
                    <li>Unlimited PTO</li>
                    <li>401k Plan</li>
                    <li>Hybrid Hub Strategy</li>
                    <li>Flexible Work Hours</li>
                    <li>Parental Leave</li>
                    <li>99% Benefits Coverage</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="EmployeePerspectiveSection">
              <div className="EmployeePerspectiveContainer">
                <div className="EmployeePerspectiveText">
                  <h1>Employee Spotlight</h1>
                  <p>
                    " Global Healthcare stands out by prioritizing staff
                    well-being, promoting collaboration, and embracing diverse
                    perspectives, cultivating an outstanding and inclusive
                    culture. "<br />
                    <br />
                    <span className="highlight">Victoria Hill</span>
                    <br />
                    Chief Marketing Officer
                  </p>
                </div>
                <div className="EmployeePerspectiveImage"></div>
              </div>
            </section>
            <section className="locationSection">
              <div className="locationTitle">
                <h1>Our Locations</h1>
              </div>
              <div className="locationContainer">
                <div className="locationContent">
                  <img src="/image/seatle.jpg" alt="arizona" />
                  <div className="location">
                    <strong>Arizona</strong>
                    <p>
                      Our headquarters in Arizona is located in the iconic
                      Chancery building, just steps from the Montgomery Street
                      transit hub and a brief stroll from the renowned Ferry
                      Building.
                    </p>
                  </div>
                </div>
                <div className="locationContent">
                  <img src="/image/london.jpg" alt="about-employees7" />
                  <div className="location">
                    <strong>London</strong>
                    <p>
                      Our london hub is expanding rapidly. While we currently do
                      not have a dedicated office in the area, but the team gets
                      together regularly for happy hours and events.
                    </p>
                  </div>
                </div>
                <div className="locationContent">
                  <img src="/image/san francisco.webp" alt="about-employees6" />
                  <div className="location">
                    <strong>San Francisco</strong>
                    <p>
                      Our central hub is based in San Francisco, where we
                      maintain a strategically positioned office that is both
                      accessible and conveniently located for our team of
                      dedicated professionals.
                    </p>
                  </div>
                </div>
                <div className="locationContent">
                  <img src="/image/Austin.jpg" alt="about-employees11" />
                  <div className="location">
                    <strong> Canada</strong>
                    <p>
                      We have a growing presence in canada. While we don't yet
                      have an office, join our team and contribute to building
                      our future presence in the city.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === "about" && (
          <div>
            <section data-aos="fade-up" className="section">
              <div className="contentContainer">
                <div className="textContainer">
                  <h1 className="title">
                    Global Healthcare is your trusted partner in building
                    resilience and driving excellence across healthcare systems
                    worldwide.
                  </h1>
                  <button
                    className="btn-n open-modal-btn"
                    onClick={this.handleToggleModal}
                  >
                    Watch Video
                  </button>
                </div>
                <div className="imageContainer"></div>
              </div>
            </section>
            <section>
              <div className="globalOrganizationContainer">
                <div className="globalOrganizationTextContent">
                  <p>
                    In an era where disruptions are increasingly frequent,
                    complex, and impactful, global healthcare organizations
                    require a sophisticated solution to gain a deeper
                    understanding of their operational ecosystems.
                  </p>
                  <p>
                    <strong className="highlight">
                      Global Healthcare serves as your partner in fostering
                      resilience across critical healthcare networks.
                    </strong>
                    We enable organizations to enhance operational efficiency
                    and continuity through the industry's most reliable and
                    comprehensive data infrastructure, combined with advanced
                    risk management capabilities.
                  </p>
                  <p>
                    Our intuitive platform delivers
                    <strong className="highlight">360-degree visibility</strong>
                    to evaluate and optimize interconnected networks,
                    <strong className="highlight">AI-powered insights</strong>
                    to proactively address potential challenges, and
                    collaborative tools to refine strategic initiatives. These
                    features empower healthcare professionals to mitigate risks,
                    uphold ethical standards, and maintain seamless service
                    delivery even in dynamic regulatory environments.
                  </p>
                  <p>
                    With Global Healthcare, professionals across the healthcare
                    spectrum can ensure operational excellence, strengthen
                    stakeholder confidence, and advance organizational
                    resilience with clarity and precision.
                  </p>
                </div>
              </div>
            </section>
            <section className="ceoSection">
              <div className="ceoContainer">
                <div className="ceoImage"></div>
                <div className="ceoTextContnet">
                  <p>
                    At Global Healthcare, our mission is to enhance resilience
                    across healthcare systems worldwide. By delivering
                    actionable insights to healthcare leaders and operational
                    professionals, we empower faster, smarter decision-making
                    and more effective service delivery. What sets Global
                    Healthcare apart is our robust data infrastructure,
                    seamlessly integrated with an advanced risk management
                    engine, complemented by intuitive and adaptable workflows
                    all housed within a flexible, scalable, and user friendly
                    platform. We are proud to support some of the most prominent
                    organizations in the global healthcare industry. <br />
                    <br />
                    <span className="highlight">Daniel Taylor</span>
                    <br />
                    CEO, Global healthcare
                  </p>
                </div>
              </div>
            </section>
            <section className="customer" data-aos="zoom-in">
              <div className="customerModule">
                <div className="customerSpotlightContainer">
                  <div className="customerIntro">
                    <h1>CUSTOMER SPOTLIGHT</h1>
                    <p>
                      "There are many tools available, but we chose Global
                      Healthcare for its intuitive intelligence platform
                      tailored to healthcare sector. In healthcare procurement,
                      it's essential to have detailed insights into our
                      suppliers. The platform provides comprehensive supplier
                      profiles, daily alerts, and continuously adapts to our
                      organization's specific needs. Global Healthcare equips us
                      with measurable, objective KPIs for each supplier."
                    </p>
                    <h2>Julia Fining</h2>
                    <p>Head of Procurement Excellence, Hapag Lioyd</p>
                  </div>
                  <div className="custmerImg">
                    <img
                      src="	https://global.craft.co/wp-content/uploads/2023/12/Logo_2.png"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="customerSpotlightContainer">
                  <div className="customerIntro">
                    <h1>CUSTOMER SPOTLIGHT</h1>
                    <p>
                      "Global Healthcare has been a crucial partner in
                      transforming our approach to risk management and
                      resilience within the healthcare sector. Furthermore,
                      Global Healthcare has been instrumental in centralizing
                      vital healthcare intelligence and due diligence, fostering
                      a new era of collaboration across our teams through
                      integrated commenting, threading, and documentation."
                    </p>
                    <h2>Department of Defense</h2>
                  </div>
                  <div className="custmerImg">
                    <img
                      src="https://global.craft.co/wp-content/uploads/2023/12/image-17.png"
                      alt="globalhealth"
                    />
                  </div>
                </div>
                <div className="customerSpotlightContainer">
                  <div className="customerIntro">
                    <h1>CUSTOMER SPOTLIGHT</h1>
                    <p>
                      "Global Healthcare has been a transformative partner for
                      TSB, enabling us to enhance our supplier risk monitoring
                      processes. With Global Healthcare, we have developed a
                      holistic understanding of risk, improving our ability to
                      address supplier challenges effectively. This
                      collaboration strengthens our commitment to maintaining
                      robust risk management practices within the ever-evolving
                      global healthcare landscape."
                    </p>
                    <h2>TSB</h2>
                  </div>
                  <div className="custmerImg">
                    <img
                      src="https://global.craft.co/wp-content/uploads/2023/12/image-16.png"
                      alt="customerimg"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="leadershipSection">
              <div className="leadershipTitle">
                <h1>Leadership Team</h1>
              </div>
              <div className="leadershipTeams">
                <div className="team">
                  <img
                    src="/image/about-employees1.jpg"
                    alt="about-employees1"
                  />
                  <div className="employee__Name-position">
                    <strong>Michael Carter</strong>
                    <p>Chief Operating Officer </p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees2.jpg"
                    alt="about-employees2"
                  />
                  <div className="employee__Name-position">
                    <strong>Hannah Miller</strong>
                    <p>Chief Medical Officer</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees3.jpg"
                    alt="about-employees3"
                  />
                  <div className="employee__Name-position">
                    <strong>Grace Allen</strong>
                    <p>Chief Information Officer </p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees4.jpg"
                    alt="about-employees4"
                  />
                  <div className="employee__Name-position">
                    <strong> Alisa Nicole</strong>
                    <p>Interview Manager</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees5.jpg"
                    alt="about-employees5"
                  />
                  <div className="employee__Name-position">
                    <strong>Ryan Walker</strong>
                    <p>Head of Global Health Programs</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees6.jpg"
                    alt="about-employees6"
                  />
                  <div className="employee__Name-position">
                    <strong>Brandon clifford</strong>
                    <p>Director of Public Health</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees7.jpg"
                    alt="about-employees7"
                  />
                  <div className="employee__Name-position">
                    <strong>Olivia Davis</strong>
                    <p>Chief Innovation Officer</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees8.jpg"
                    alt="about-employees8"
                  />
                  <div className="employee__Name-position">
                    <strong>Helms Sebastian</strong>
                    <p>Training manager</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees9.jpg"
                    alt="about-employees9"
                  />
                  <div className="employee__Name-position">
                    <strong>Mark Harris</strong>
                    <p>Director of Human Resources</p>
                  </div>
                </div>
                <div className="team">
                  <img
                    src="/image/about-employees11.jpg"
                    alt="about-employees11"
                  />
                  <div className="employee__Name-position">
                    <strong> Brian Piers</strong>
                    <p>Head of Global Health Programs</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="riskAssessment">
                <img
                  className="riskAssessmentImage-1"
                  src="https://global.craft.co/wp-content/themes/craftco/static/images/bg-hero-top-left.png"
                  alt="hero-top-left"
                />
                <div className="supplyRiskAssessment">
                  <h1>Life at Global Healthcare</h1>
                  <p>
                    We are a dynamic and dedicated team of professionals,
                    including healthcare technologists, data scientists, and
                    operational leaders. While advancing global healthcare
                    systems is a critical mission, our culture thrives on
                    warmth, collaboration, and innovation. This unique approach
                    fosters meaningful partnerships, enhances teamwork, and
                    drives the creation of transformative healthcare solutions.
                  </p>
                  <button
                    className="btn-lg"
                    onClick={() => this.setActiveSection("company")}
                  >
                    Learn More
                  </button>
                </div>
                <div className="riskAssessmentImageContainer"></div>
              </div>
            </section>
            <section className="locationSection">
              <div className="locationTitle">
                <h1>Our Locations</h1>
              </div>
              <div className="locationContainer">
                <div className="locationContent">
                  <img src="/image/seatle.jpg" alt="arizona" />
                  <div className="location">
                    <strong>Arizona</strong>
                    <p>
                      Our headquarters in Arizona is located in the iconic
                      Chancery building, just steps from the Montgomery Street
                      transit hub and a brief stroll from the renowned Ferry
                      Building.
                    </p>
                  </div>
                </div>
                <div className="locationContent">
                  <img src="/image/london.jpg" alt="about-employees7" />
                  <div className="location">
                    <strong>London</strong>
                    <p>
                      Our london hub is expanding rapidly. While we currently do
                      not have a dedicated office in the area, but the team gets
                      together regularly for happy hours and events.
                    </p>
                  </div>
                </div>
                <div className="locationContent">
                  <img src="/image/san francisco.webp" alt="about-employees6" />
                  <div className="location">
                    <strong>San Francisco</strong>
                    <p>
                      Our central hub is based in San Francisco, where we
                      maintain a strategically positioned office that is both
                      accessible and conveniently located for our team of
                      dedicated professionals.
                    </p>
                  </div>
                </div>
                <div className="locationContent">
                  <img src="/image/Austin.jpg" alt="about-employees11" />
                  <div className="location">
                    <strong> Canada</strong>
                    <p>
                      We have a growing presence in canada. While we don't yet
                      have an office, join our team and contribute to building
                      our future presence in the city.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        <div>
          {this.state.showVideo && (
            <div className="modal-overlay " onClick={this.handleToggleModal}>
              <div className="modal-content">
                <div className="video-container">
                  <div className="video-overlay-text">
                    Global Healthcare Insights
                  </div>
                  <div
                    className="video-close-btn close-btn"
                    onClick={this.handleToggleModal}
                  >
                    X
                  </div>
                  <video
                    width="700"
                    height="400"
                    controls
                    autoPlay
                    style={{ borderRadius: "10px" }}
                  >
                    <source
                      src="/videos/GlobalHealthcare-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
                Our goal is to ensure access to superior health services,
                leveraging advanced technologies and a patient-centered
                approach. From preventive care to specialized treatments, Global
                Healthcare stands at the forefront of improving lives and
                promoting well-being across the globe.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home" onClick={() => this.setActiveSection("home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#company"
                    onClick={() => this.setActiveSection("company")}
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => this.setActiveSection("about")}
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <form className="subscription-form">
                <button onClick={() => this.setActiveSection("contact")}>
                  Contact Us
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Healthcare.org. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
