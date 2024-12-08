import React from "react";
import AboutBlkBG from "../../../../Assets/Modules/img/AboutBG.png";
import about_me from "../../../../Assets/Modules/img/about_me.png";

const About = ({ aboutSection, colorTheme }) => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={AboutBlkBG} className="Profile-img" alt="profile-img" />
            </div>
            <div className="col">
              <div className="Bio">
                <h2 className="txtName">
                  <b>MOHAMMED SAHEER C A</b>
                </h2>
                <h5 className="txtRole">- Web Developer</h5>
              </div>
            </div>
          </div>
          <div className="row" ref={aboutSection}>
            <div className="about-content">
              <h3 className={`heading ${colorTheme} pb-2`}>
                About Me &nbsp;
                <img src={about_me} alt="about-me-icon" />
              </h3>
              <p>
                Welcome to my corner of the web! I’m Mohammed Saheer C A, a
                dedicated and passionate professional with a Bachelor’s degree
                in Computer Applications (BCA). Originally hailing from the
                picturesque town of Kasaragod, I’m currently based in the
                vibrant city of Kochi.
              </p>

              <p>
                With 1.2 years of hands-on experience at Vandalay Business
                Solutions Private Limited Company, I’ve honed my skills and
                gained valuable insights into the world of technology and
                innovation. My journey has been driven by a commitment to
                excellence and a deep interest in solving complex problems
                through technology.
              </p>

              <p>
                Feel free to explore my website to learn more about my work,
                experiences, and the projects I’m passionate about. Thank you
                for stopping by!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
