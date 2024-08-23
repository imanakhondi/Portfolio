import { useEffect, useState } from "react";
import useLanguage from "../hooks/useLanguage";

function AboutMe({ sections }) {
  const [counters, setCounters] = useState({
    projectsCompleted: 0,
    customers: 0,
    experiences: 0,
    certification: 0,
  });
  const { currentTranslations } = useLanguage();

  useEffect(() => {
    const config = [
      { key: "projectsCompleted", max: 10, interval: 100 },
      { key: "customers", max: 8, interval: 50 },
      { key: "experiences", max: 2, interval: 800 },
      { key: "certification", max: 5, interval: 200 },
    ];

    const timers = config.map(({ key, max, interval }) => {
      return setInterval(() => {
        setCounters((prevCounters) => {
          if (prevCounters[key] < max) {
            return { ...prevCounters, [key]: prevCounters[key] + 1 };
          } else {
            clearInterval(timers[key]);
            return prevCounters;
          }
        });
      }, interval);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section
      className="relative flex flex-col justify-center items-center bg-hero-pattern"
      id="aboutMe"
      ref={(el) => (sections.current[1] = el)}
    >
      <div className=" container xl:max-w-screen-xl w-full p-5">
        <div className="flex flex-col md:flex-row gap-x-5">
          <ProfileImage />
          <AboutText currentTranslations={currentTranslations} />
        </div>
      </div>
      <div className="container xl:max-w-screen-lg  w-full md:p-5">
        <StatisticsGrid
          currentTranslations={currentTranslations}
          counters={counters}
        />
      </div>
      <img
        className="absolute -bottom-32 right-0 w-1/4 max-w-xl"
        src="images/Gradients.png"
        alt="Vector (1)"
      />
    </section>
  );
}

export default AboutMe;

function ProfileImage() {
  return (
    <div className="w-full bg-userImage bg-center	bg-cover p-5 md:p-10	flex justify-center">
      <img
        src="images/ImanAkhondi.png"
        alt=""
        className="max-w-80 rounded-full self-center"
      />
    </div>
  );
}

function AboutText({ currentTranslations }) {
  return (
    <div className="w-full p-5 md:p-10 flex flex-col gap-y-5">
      <span className="text-white">{currentTranslations.welcome}</span>
      <h1 className="custom-gradient-heading bg-clip-text text-transparent font-bold text-7xl leading-[100px] inline-block">
        {currentTranslations.name}
      </h1>
      <p className="text-white text-lg">{currentTranslations.description}</p>
    </div>
  );
}

function StatisticsGrid({ currentTranslations, counters }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      <SummaryOfStatistics
        title={currentTranslations.projectsCompleted}
        summary={counters.projectsCompleted}
      />
      <SummaryOfStatistics
        title={currentTranslations.happyCustomers}
        summary={counters.customers}
      />
      <SummaryOfStatistics
        title={currentTranslations.yearsOfExperiences}
        summary={counters.experiences}
      />
      <SummaryOfStatistics
        title={currentTranslations.certificationsEarned}
        summary={counters.certification}
      />
    </div>
  );
}

function SummaryOfStatistics({ summary, title }) {
  return (
    <div className="w-full p-2 flex flex-col items-center gap-y-5">
      <h1 className="custom-gradient inline-block text-transparent bg-clip-text font-bold text-4xl">
        {summary}+
      </h1>
      <span className="text-white text-center">{title}</span>
    </div>
  );
}
