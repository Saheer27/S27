import React, { useState } from "react";
import S27 from "../../../../Assets/Modules/img/S27.png";
import showMore from "../../../../Assets/Modules/img/show_more.png";
import ColorThemeIcon from "../../../../Assets/Modules/img/rgb.png";
import InputButton from "../../../UI/InputButton";
import Button from "../../../UI/Button";

const NavBar = ({
  aboutSection,
  skillSection,
  experienceSection,
  myInfoSection,
  setColorTheme,
  colorTheme,
}) => {
  const [navModalShow, setNavModalShow] = useState(false);

  const handleNavModal = () => {
    setNavModalShow(!navModalShow);
  };

  const handleColorThemeDark = (e) => {
    setColorTheme("dark");
    document.documentElement.style.setProperty("--primary", "#07031b");
    document.documentElement.style.setProperty("--secondary", "#F6FFDE");
    document.documentElement.style.setProperty("--dynamic", "#61F4DE");
  };

  const handleColorThemeLight = (e) => {
    setColorTheme("light");
    document.documentElement.style.setProperty("--primary", "#FFFAF0");
    document.documentElement.style.setProperty("--secondary", "#36464e");
    document.documentElement.style.setProperty("--dynamic", "#ff0000");
  };

  const HandleScrollRef = (ref) => {
    if (navModalShow === true) {
      setNavModalShow(!navModalShow);
    }
    if (ref.current) {
      const yOffset = 80;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.error("Ref is not pointing to a DOM element");
    }
  };

  return (
    <>
      <div className={`navBar ${navModalShow ? "hide" : "show"}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={`S27-logo ${colorTheme}`}>
                <img src={S27} alt="logo" />
              </div>
              <div className="text">
                <span>S27</span>
              </div>
              <div className="dropdown-color-theme">
                <img
                  src={ColorThemeIcon}
                  className="color-theme-icon"
                  alt="logo"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a onClick={handleColorThemeDark}>Dark Mode </a>
                  </li>
                  <li>
                    <a onClick={handleColorThemeLight}>Light Mode</a>
                  </li>
                </ul>
              </div>
              <div className={`circleDot ${colorTheme}`}>
                <img src={showMore} onClick={handleNavModal} alt="show-more" />
              </div>
              <InputButton
                type="button"
                className="navButtons"
                value="ABOUT"
                onClick={() => HandleScrollRef(aboutSection)}
              />
              <InputButton
                type="button"
                className="navButtons"
                value="SKILLS"
                onClick={() => HandleScrollRef(skillSection)}
              />
              <InputButton
                type="button"
                className="navButtons"
                value="EXPERIENCE"
                onClick={() => HandleScrollRef(experienceSection)}
              />
              <InputButton
                type="button"
                className="navButtons"
                value="CONTACT"
                onClick={() => HandleScrollRef(myInfoSection)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`navBarContainer ${navModalShow ? "show" : "hide"}`}>
        <div className="modalContent">
          <div className="row">
            <div className="col">
              <div className={`S27-logoMob ${colorTheme}`}>
                <img src={S27} alt="logo" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <InputButton
                type="button"
                className="navButtonsPopUp"
                value="ABOUT"
                onClick={() => HandleScrollRef(aboutSection)}
              />
            </div>
            <div className="col">
              <InputButton
                type="button"
                className="navButtonsPopUp"
                value="SKILLS"
                onClick={() => HandleScrollRef(skillSection)}
              />
            </div>
            <div className="col">
              <InputButton
                type="button"
                className="navButtonsPopUp"
                value="EXPERIENCE"
                onClick={() => HandleScrollRef(experienceSection)}
              />
            </div>
            <div className="col">
              <InputButton
                type="button"
                className="navButtonsPopUp"
                value="CONTACT"
                onClick={() => HandleScrollRef(myInfoSection)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button
              className="closeButton bi bi-arrow-left justify-content-center"
              onClick={handleNavModal}
            >
              {" "}
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
