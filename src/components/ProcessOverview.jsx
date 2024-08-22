import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";

function ProcessOverview({ sections }) {
  const { currentTranslations } = useLanguage();

  const processData = [
    {
      titleKey: `${currentTranslations.planningAnalysis}`,
      imageUrl: "images/Empathize.png",
    },
    {
      titleKey: `${currentTranslations.designImplementation}`,
      imageUrl: "images/Define.png",
    },
    {
      titleKey: `${currentTranslations.interactiveDevelopment}`,
      imageUrl: "images/Ideate.png",
    },
    {
      titleKey: `${currentTranslations.testingOptimization}`,
      imageUrl: "images/Test.png",
    },
    {
      titleKey: `${currentTranslations.deploymentMaintenance}`,
      imageUrl: "images/Prototype.png",
    },
  ];

  return (
    <section
      className="relative flex flex-col justify-center items-center mt-5"
      id="workflow"
      ref={(el) => (sections.current[3] = el)}
    >
      <h2 className="font-semibold text-white text-2xl md:text-3xl lg:text-5xl">
        {currentTranslations.workflowTitle}
      </h2>
      <div className=" container xl:max-w-screen-xl w-full p-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {processData.map(({ titleKey, imageUrl }) => {
            return (
              <ProcessElement
                key={titleKey}
                title={titleKey}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
        <img
          className="absolute bottom-0 -left-8 w-1/4 max-w-xl"
          src="images/Group 202.png"
          alt="Vector (1)"
        />
      </div>
    </section>
  );
}

export default ProcessOverview;

function ProcessElement({ imageUrl, title }) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center justify-center gap-y-5 w-full p-10 border border-white/20 rounded-3xl bg-${theme}-gradient  text-white`}
    >
      <img className="w-20" src={imageUrl} alt={title} />
      <span className="text-center">{title}</span>
    </div>
  );
}
