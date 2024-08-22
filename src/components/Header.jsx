import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";
import { useState } from "react";

function Header({ navbar, activeLink, handleSetActive }) {
  const { changeLanguage, currentTranslations } = useLanguage();
  const { theme, changeTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: `${currentTranslations.home}`, href: "home" },
    { name: `${currentTranslations.aboutMe}`, href: "aboutMe" },
    { name: `${currentTranslations.mySkills}`, href: "mySkills" },
    { name: `${currentTranslations.workflow}`, href: "workflow" },
    { name: `${currentTranslations.projects}`, href: "projects" },
    { name: `${currentTranslations.contact}`, href: "contact" },
  ];

  const themeButtons = ["onyx-black", "dark-night", "emerald-shadow"];
  const languageButtons = [
    {
      src: "../../public/images/england-flag-jpg-xl.jpg",
      alt: "English",
      onClick: () => changeLanguage("en"),
    },
    {
      src: "../../public/images/iran-flag-png-large.png",
      alt: "Farsi",
      onClick: () => changeLanguage("fa"),
    },
    {
      src: "../../public/images/germany-flag-png-large.png",
      alt: "German",
      onClick: () => changeLanguage("de"),
    },
  ];

  return (
    <div
      className={`fixed z-50 w-full p-4 md:p-6 text-white flex justify-between items-center opacity-80 ${
        navbar ? `bg-${theme}-gradient` : ""
      }`}
    >
      {/* Theme buttons */}
      <div className="flex gap-x-2 w-auto md:w-40">
        {themeButtons.map((btnTheme) => (
          <ThemeButton
            key={btnTheme}
            theme={btnTheme}
            onClick={() => changeTheme(btnTheme)}
          />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden block text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-${theme}-gradient md:flex md:flex-1 md:relative md:top-0 md:left-0 md:!bg-none md:space-x-4 md:items-center md:justify-center`}
      >
        {menuItems.map((item) => (
          <ItemMenu
            key={item.href}
            name={item.name}
            href={item.href}
            activeLink={activeLink}
            handleSetActive={handleSetActive}
          />
        ))}
      </ul>

      {/* Language buttons */}
      <div className="flex gap-x-2 md:gap-x-5 w-auto md:w-40">
        {languageButtons.map(({ src, alt, onClick }) => (
          <LanguageButton key={alt} src={src} alt={alt} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}

export default Header;

function ItemMenu({ name, href, activeLink, handleSetActive }) {
  return (
    <li className="text-center md:text-left">
      <a
        href={`#${href}`}
        className={`block md:inline-block hover:bg-gradient-to-r from-[#FF7262]/90 to-[#8B16FF]/90 py-2 px-3 rounded-xl ${
          activeLink === href
            ? "bg-gradient-to-r from-[#FF7262]/90 to-[#8B16FF]/90 "
            : ""
        }`}
        onClick={() => handleSetActive(href)}
      >
        {name}
      </a>
    </li>
  );
}

const ThemeButton = ({ theme, onClick }) => {
  return (
    <button
      className={`w-7 h-7 border-2 border-white rounded-full bg-${theme}`}
      onClick={onClick}
    ></button>
  );
};

const LanguageButton = ({ onClick, src, alt }) => {
  return (
    <button onClick={onClick}>
      <img className="w-6 h-4" src={src} alt={alt} />
    </button>
  );
};
