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
                <h4>Data Analyst / Data Engineer</h4>
                <h5>EXL Services · Visa Client</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building scalable ETL pipelines and dynamic Airflow workflows for
              transactional data. Automating PySpark quality checks and delivering
              Python and Power BI insights for portfolio optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst / Engineer</h4>
                <h5>FPT Software Vietnam</h5>
              </div>
              <h3>2022—23</h3>
            </div>
            <p>
              From February 2022 to November 2023, developed automated Python,
              SQL, Airflow, and Spark pipelines for
              logistics and retail clients. Built Power BI dashboards and reduced
              pipeline execution time by 30% through query and job optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database & Data Engineer</h4>
                <h5>Cognizant Technology</h5>
              </div>
              <h3>2017—19</h3>
            </div>
            <p>
              Managed relational databases, designed data solutions, and tuned
              advanced SQL to reduce query response times by 30%. Led Python ETL
              migration for a high-volume e-commerce order processing system.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Marshal Sales Corporation</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Applied Python, SQL, statistical techniques, visualization, and
              database skills to analyze business data and support reporting and
              decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
