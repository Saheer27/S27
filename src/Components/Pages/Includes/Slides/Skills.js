import React from "react";
import html_logo from "../../../../Assets/Modules/img/html_logo.png";
import css_logo from "../../../../Assets/Modules/img/css-3_logo.png";
import js_logo from "../../../../Assets/Modules/img/js_logo.png";
import react_logo from "../../../../Assets/Modules/img/react_logo.png";
import bootstrap_logo from "../../../../Assets/Modules/img/bootstrap_logo.png";
import laravel_logo from "../../../../Assets/Modules/img/laravel_logo.png";
import php_logo from "../../../../Assets/Modules/img/php_logo.png";
import mysql_logo from "../../../../Assets/Modules/img/mysql_logo.png";
import git_logo from "../../../../Assets/Modules/img/git_logo.png";
import skills from "../../../../Assets/Modules/img/skills.png";

const Skills = ({ skillSection, colorTheme }) => {
  return (
    <>
      <div className="skills" ref={skillSection}>
        <div className="container">
          <h3 className={`heading ${colorTheme}`}>
            Skills &nbsp;
            <img src={skills} alt="skills" />
          </h3>
          <div className="row">
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={html_logo} alt="html_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">HTML</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={css_logo} alt="css_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">CSS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={js_logo} alt="js_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">JavaScript</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={react_logo} alt="react_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">React JS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={bootstrap_logo} alt="bootstrap_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">Bootstrap-5</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={laravel_logo} alt="laravel_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">Laravel</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={php_logo} alt="php_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">PHP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={mysql_logo} alt="mysql_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">MySQL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`skillflexBox ${colorTheme}`}>
                <div className="row">
                  <div className="col">
                    <img src={git_logo} alt="git_logo" />
                  </div>
                  <div className="col">
                    <div className="textSkills">GIT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
