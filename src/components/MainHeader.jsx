import { useEffect, useState } from "react";
import Header from "./Header";
import useLanguage from "../hooks/useLanguage";

function MainHeader({ sections, activeLink, setActiveLink }) {
  const [navbar, setNavbar] = useState(false);
  const { currentTranslations, language } = useLanguage();

  const handleSetActive = (id) => {
    setActiveLink(id);
  };

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 66);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <section>
      <Header
        navbar={navbar}
        activeLink={activeLink}
        handleSetActive={handleSetActive}
      />
      <div
        className="relative h-screen flex flex-col justify-center items-center "
        id="home"
        ref={(el) => (sections.current[0] = el)}
      >
        <HeroBackgroundImages />
        <img className="z-10 mb-8" src="images/Group (1).png" alt="Group" />
        <HeroSectionContent
          currentTranslations={currentTranslations}
          language={language}
        />
      </div>
    </section>
  );
}

export default MainHeader;

const HeroBackgroundImages = () => {
  return (
    <>
      <img
        className="absolute top-0 left-0 w-1/2 max-w-xl"
        src="images/Vector.png"
        alt="Vector"
      />
      <img
        className="absolute top-0 right-0 w-1/2 max-w-xl"
        src="images/Vector (1).png"
        alt="Vector (1)"
      />
    </>
  );
};

const HeroSectionContent = ({ currentTranslations, language }) => {
  return (
    <div className="absolute z-20 text-white">
      <span>2024</span>
      <h1 className="text-5xl md:text-8xl font-bold">
        {currentTranslations.portfolio}
      </h1>
      <span
        className={` block w-full mt-3 ${
          language === "fa" ? "text-left" : "text-right"
        }`}
      >
        {currentTranslations.job}
      </span>
    </div>
  );
};
