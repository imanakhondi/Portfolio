import useLanguage from "../hooks/useLanguage";

function Footer({ sections }) {
  const { currentTranslations } = useLanguage();
  return (
    <section
      className="relative flex flex-col justify-center items-center "
      id="contact"
      ref={(el) => (sections.current[5] = el)}
    >
      <FooterImage
        className="z-10 mb-8"
        src="images/Group (1).png"
        alt="Group"
      />
      <div className="absolute z-20 text-white">
        <FooterText
          heading={currentTranslations.thankYou}
          subheading={currentTranslations.leaveReview}
        />
      </div>
      <FooterImage
        className="absolute bottom-0 right-0"
        src="images/sim.png"
        alt="Vector (1)"
      />
      <FooterImage
        className="absolute bottom-0 right-0 left-0 "
        src="images/footer-bg.png"
        alt="Vector (1)"
      />
    </section>
  );
}

export default Footer;

function FooterText({ heading, subheading }) {
  return (
    <>
      <h1 className="text-5xl md:text-8xl font-bold">{heading}</h1>
      <span className="text-center block w-full mt-3">{subheading}</span>
    </>
  );
}

function FooterImage({ alt, src, className }) {
  return <img className={className} src={src} alt={alt} />;
}
