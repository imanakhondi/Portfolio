import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind",
  "Styled Components",
  "React",
  "React Query",
  "Github",
  "Vitest",
];

const tools = [
  { imageUrl: "images/html.png" },
  { imageUrl: "images/css.png" },
  { imageUrl: "images/java-script.png" },
  { imageUrl: "images/science.png" },
  { imageUrl: "images/github.png" },
  { imageUrl: "images/visual-studio.png" },
];

const SkillsOverview = ({ sections }) => {
  const { theme } = useTheme();
  const { currentTranslations } = useLanguage();

  const experienceData = [
    {
      date: `${currentTranslations.present}`,
      jobTitle: `${currentTranslations.frontendDev}`,
      company: `${currentTranslations.aradCorp}`,
    },
    {
      date: "2021 - 2022",
      jobTitle: `${currentTranslations.frontendDev}`,
      company: `${currentTranslations.freelance}`,
    },
    {
      date: "2020 - 2021",
      jobTitle: `${currentTranslations.careenMgr}`,
      company: `${currentTranslations.careenCorp}`,
    },
    {
      date: "2014 - 2020",
      jobTitle: `${currentTranslations.fuelSysRep}`,
      company: `${currentTranslations.welfareComplex}`,
    },
  ];

  return (
    <section
      className="relative flex flex-col justify-center items-center"
      id="mySkills"
      ref={(el) => (sections.current[2] = el)}
    >
      <div className="container xl:max-w-screen-xl w-full p-5 mt-16">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5">
          <div
            className={`w-full md:w-3/5 p-10 rounded-3xl bg-${theme}-gradient text-white`}
          >
            <h3 className="font-bold text-3xl mb-3">
              {currentTranslations.skills}
            </h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div
            className={`w-full md:w-2/5 p-10 rounded-3xl text-white bg-${theme}-gradient`}
          >
            <h3 className="font-bold text-3xl mb-3">
              {currentTranslations.tools}
            </h3>
            <div className="grid grid-rows-2 grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <ToolItem key={index} imageUrl={tool.imageUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container xl:max-w-screen-xl w-full p-5 pt-0">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5">
          <div
            className={`w-full md:w-2/5 lg:w-1/4 p-10 rounded-3xl bg-${theme}-gradient text-white`}
          >
            <h3 className="font-bold text-3xl mb-3">
              {currentTranslations.profiles}
            </h3>
            <div className="flex items-center md:justify-between gap-x-5">
              <ProfileLink
                url="https://github.com/imanakhondi"
                imageSrc="images/my-github.png"
              />
              <ProfileLink
                url="https://www.linkedin.com/in/iman-akhondi"
                imageSrc="images/SN-linkedin.png"
              />
              <ProfileLink
                url="https://www.instagram.com/imanakhondi.ir/"
                imageSrc="images/SN-instagram.png"
              />
            </div>
            <ContactInfo />
          </div>
          <div
            className={`w-full md:w-3/5 lg:w-3/4 p-10 rounded-3xl bg-${theme}-gradient text-white`}
          >
            <h3 className="font-bold text-3xl mb-3">
              {currentTranslations.experience}
            </h3>
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
              {experienceData.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <EducationSection translations={currentTranslations} />
    </section>
  );
};

export default SkillsOverview;

function EducationSection({ translations }) {
  return (
    <div className="container xl:max-w-screen-xl w-full p-5 pt-0">
      <div className="flex gap-x-5">
        <div
          className={`w-full p-10 rounded-3xl bg-${translations.theme}-gradient text-white`}
        >
          <h3 className="font-bold text-3xl mb-3">{translations.education}</h3>
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-2 md:col-span-1 flex flex-col justify-around">
              <div className="flex items-center">
                <img src="images/Education.png" alt="" />
              </div>
              <div className="flex items-center">
                <img src="images/Certification.png" alt="" />
              </div>
            </div>
            <div className="col-span-8 md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <EducationItem
                year="2007 - 2011"
                degree={translations.bachelorDegree}
                institution={translations.payamNurUni}
              />
              <EducationItem
                year="2023"
                degree={translations.htmlIntro}
                institution={translations.sololearn}
              />
              <EducationItem
                year="2023"
                degree={translations.cssIntro}
                institution={translations.sololearn}
              />
              <EducationItem
                year="2024"
                degree={translations.reactBasics}
                institution={translations.courseraMeta}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationItem({ year, degree, institution }) {
  return (
    <div>
      <span className="text-[#7E7979] text-sm">{year}</span>
      <h3 className="text-xl">{degree}</h3>
      <span className="text-[#7E7979]">{institution}</span>
    </div>
  );
}

function SkillItem({ skill }) {
  return <div className="text-center">{skill}</div>;
}

function ToolItem({ imageUrl }) {
  return (
    <div className="w-14 h-14">
      <img src={imageUrl} alt="" />
    </div>
  );
}

function ProfileLink({ url, imageSrc }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#1F1F1F]/50"
    >
      <img src={imageSrc} alt="" className="w-10 h-10" />
    </a>
  );
}

function ContactInfo() {
  return (
    <div>
      <div className="flex items-center gap-x-2 mt-7">
        <img src="images/email.png" alt="" />
        <span>akhondiiman@gmail.com</span>
      </div>
      <div className="flex items-center gap-x-3 mt-2">
        <img src="images/phone.png" alt="" />
        <span>0098 935 645 1716</span>
      </div>
    </div>
  );
}

function ExperienceItem({ date, jobTitle, company }) {
  return (
    <div>
      <span
        className={`text-sm ${
          date === "Present" ? "text-[#FF705F]" : "text-[#7E7979]"
        }`}
      >
        {date}
      </span>
      <h3 className="text-xl">{jobTitle}</h3>
      <span className="text-[#7E7979]">{company}</span>
    </div>
  );
}
