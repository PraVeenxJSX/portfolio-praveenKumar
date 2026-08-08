import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Protecting Personal Health Care Records Using Blockchain</h4>
                <h5>Academic Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Implemented cost-effective solutions, resulting in a 20% reduction in project
              expenses. Streamlined project workflows, enhancing overall efficiency by 25%.
              Led a team in successfully delivering a complex engineering project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Prediction Of Road Accident Using Data Mining</h4>
                <h5>Academic Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed project timeliness effectively. Spearheaded the adoption of cutting-edge
              engineering software, improving project accuracy by 15%. Successfully enhanced
              project success rates by 10%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Portfolio</h4>
                <h5>Full Stack Projects</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed multiple full-stack applications including Chat website, E-Commerce
              platform, and Real Estate website using MERN Stack. Implemented responsive UI/UX,
              backend authentication, and database management with MongoDB and MySQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
