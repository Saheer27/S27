import { React, useEffect, useRef, useState } from "react";
import NavBar from "./Includes/Layouts/NavBar";
import About from "./Includes/Slides/About";
import Skills from "./Includes/Slides/Skills";
import Experience from "./Includes/Slides/Experience";
import MyInfo from "./Includes/Slides/MyInfo";
import Footer from "./Includes/Slides/Footer";
import ChatBot from "./Includes/Layouts/ChatBot";
import { useInView } from "react-intersection-observer";
import Loader from "./Includes/Layouts/Loader";

const HomePage = () => {
  const aboutSection = useRef(null);
  const skillSection = useRef(null);
  const experienceSection = useRef(null);
  const myInfoSection = useRef(null);
  const [colorTheme, setColorTheme] = useState("dark");
  const [questAnswers, setQuestAnswers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [components, setComponents] = useState(true);

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: myInfoRef, inView: myInfoInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoader(false);
  //     setComponents(true);
  //   }, 2500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <div className="S27">
        <div className={`Bg-Container ${colorTheme}`}>
          {/* {loader && <Loader />} */}
          {components && (
            <>
              <NavBar
                aboutSection={aboutSection}
                skillSection={skillSection}
                experienceSection={experienceSection}
                myInfoSection={myInfoSection}
                setColorTheme={setColorTheme}
                colorTheme={colorTheme}
              />
              <About
                aboutSection={aboutSection}
                colorTheme={colorTheme} />
              <ChatBot
                setQuestAnswers={setQuestAnswers}
                colorTheme={colorTheme}
              />
              <Skills 
                skillSection={skillSection} 
                colorTheme={colorTheme} />
              <Experience
                reff={experienceRef}
                inView={experienceInView}
                experienceSection={experienceSection}
                colorTheme={colorTheme}
              />
              <MyInfo
                reff={myInfoRef}
                inView={myInfoInView}
                myInfoSection={myInfoSection}
                questAnswers={questAnswers}
                colorTheme={colorTheme}
              />
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
