import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";

const projects = [
  { imageUrl: "images/freelancer-app.png" },
  { imageUrl: "images/refahi.png" },
  {
    imageUrl: "images/sport-taybad.png",
    href: "https://sport-taybad.vercel.app/",
    zIndex: "z-40",
  },
  {
    imageUrl: "images/rick-and-morty.png",
    zIndex: "z-40",
    href: "https://rick-and-morty-drab-eight.vercel.app",
  },
];

function ProjectsGallery({ sections }) {
  const { currentTranslations } = useLanguage();
  return (
    <section
      className="relative flex flex-col justify-center items-center mt-32 "
      id="projects"
      ref={(el) => (sections.current[4] = el)}
    >
      <h2 className="font-semibold text-white text-2xl md:text-3xl lg:text-5xl">
        {currentTranslations.checkMyWork}
      </h2>
      <div className=" container xl:max-w-screen-xl w-full p-5 mt-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {projects.map(({ imageUrl, zIndex, href }, index) => {
            return (
              <SampleOfWork
                key={index}
                imageUrl={imageUrl}
                zIndex={zIndex}
                href={href}
              />
            );
          })}
        </div>
        <img
          className="absolute -bottom-32 -left-8 w-1/4 max-w-xl"
          src="images/star.png"
          alt="Vector (1)"
        />
      </div>
    </section>
  );
}

export default ProjectsGallery;

function SampleOfWork({ imageUrl, zIndex = "", href = "" }) {
  const { theme } = useTheme();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center gap-y-5 w-full p-5 border border-white/20 rounded-3xl bg-${theme}-rgba-gradient text-white ${zIndex}`}
    >
      <img src={imageUrl} alt="" />
    </a>
  );
}
