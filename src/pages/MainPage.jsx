import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import ProjectsGallery from "../components/ProjectsGallery";
import ProcessOverview from "../components/ProcessOverview";
import SkillsOverview from "../components/SkillsOverview";
import AboutMe from "../components/AboutMe";
import MainHeader from "../components/MainHeader";

function MainPage() {
  const [activeLink, setActiveLink] = useState("");
  const sections = useRef([]);

  useEffect(() => {
    const currentSections = sections.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    currentSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <MainHeader
        sections={sections}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <AboutMe sections={sections} />
      <SkillsOverview sections={sections} />
      <ProcessOverview sections={sections} />
      <ProjectsGallery sections={sections} />
      <Footer sections={sections} />
    </>
  );
}

export default MainPage;
