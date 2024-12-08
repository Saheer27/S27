import React from "react";
import achieve from "../../../../Assets/Modules/img/achieve.png";
import school from "../../../../Assets/Modules/img/school.png";
import college from "../../../../Assets/Modules/img/college.png";
import internship from "../../../../Assets/Modules/img/internship.png";
import id_card from "../../../../Assets/Modules/img/id-card.png";
import trainee from "../../../../Assets/Modules/img/trainee.png";
import hss from "../../../../Assets/Modules/img/hss.png";

const Experience = ({ experienceSection, colorTheme, inView, reff }) => {
  return (
    <>
      <div className="experience" ref={experienceSection}>
        <div ref={reff} className="container">
          <h3 className={`heading ${colorTheme}`}>
            My Journey &nbsp;
            <img src={achieve} alt="achieve" />
          </h3>
          <div className="TimelineContainer">
            <div
              className={`Timeline-horizontal-line ${inView ? "in-view" : ""}`}
            ></div>
            <div className="row">
              <div className="col">
                <div
                  className={`Box Timeline-left-1 ${colorTheme} ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <div className="Timeline-circle Timeline-circle-left">
                    <img src={id_card} alt="id_card" />
                  </div>
                  <h5>Jr React/Laravel Developer </h5>
                  <em>Oct 2023 – Present</em>
                  <p>
                    Vandalay Business Solutions Private Limited
                    <br />
                    <i className="bi bi-geo-alt-fill"></i> Kochi, Kerala
                  </p>
                </div>
              </div>

              <div className="col">
                <div
                  className={`Box Timeline-right-2 ${colorTheme} ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <div className="Timeline-circle Timeline-circle-right">
                    <img src={trainee} alt="trainee" />
                  </div>
                  <h5>Web Developer Trainee </h5>
                  <em>May 2023 – Oct 2023</em>
                  <p>
                    Vandalay Business Solutions Private Limited
                    <br />
                    <i className="bi bi-geo-alt-fill"></i> Kochi, Kerala
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className={`Box Timeline-left-3 ${colorTheme} ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <div className="Timeline-circle Timeline-circle-left">
                    <img src={internship} alt="internship" />
                  </div>
                  <h5>Project Intern</h5>
                  <em>Mar 2022 – Jun 2022</em>
                  <p>
                    Queuetech solutions
                    <br />
                    <i className="bi bi-geo-alt-fill"></i> Mangalore, Karnataka
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className={`Box Timeline-right-4 ${colorTheme} ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <div className="Timeline-circle Timeline-circle-right">
                    <img src={college} alt="college" />
                  </div>
                  <h5>Bachelors in Computer Application (BCA)</h5>
                  <em>Jul 2019 – Apr 2023</em>
                  <p>
                    Srinivas University, Mangalore, Karnataka
                    <br />
                    CGPA : 8.45
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className={`Box Timeline-left-5 ${colorTheme} ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <div className="Timeline-circle Timeline-circle-left">
                    <img src={hss} alt="hss" />
                  </div>
                  <h5>Higher Secondary Education</h5>
                  <em>Jul 2017 – Mar 2019</em>
                  <p>
                    Dhakeerath English Medium Higher Secondary School, Kasaragod
                    <br />
                    CGPA : 7.5
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className={`Box Timeline-right-6 ${colorTheme} ${
                    inView ? "in-view" : ""
                  }`}
                >
                  <div className="Timeline-circle Timeline-circle-right">
                    <img src={school} alt="school" />
                  </div>

                  <h5>SSLC</h5>
                  <em>Jun 2017</em>
                  <p>
                    ESSA English Medium School, Kasaragod
                    <br />
                    CGPA : 9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
