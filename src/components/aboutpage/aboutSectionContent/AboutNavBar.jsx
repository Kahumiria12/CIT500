const AboutNavBar = ({ activeSection, setActiveSection }) => {
  const getButtonClasses = (section) => {
    return `text-sm xl:text-lg px-6 py-4 transition duration-300 flex-shrink-0 ${
      activeSection === section
        ? "text-red-500 hover:text-red-400"
        : "hover:text-red-500"
    }`;
  };

  return (
    <>
      {/* Nav Section */}
      <nav className="absolute top-4 xl:top-auto xl:bottom-[4rem] left-[50%] translate-x-[-50%] w-full">
        <ul className="tracking-wide flex justify-center divide-x bg-stone-900/50 rounded-lg w-fit mx-auto">
          <li>
            <button
              onClick={() => setActiveSection("who")}
              className={getButtonClasses("who")}
            >
              Ko wai mātou
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("kaupapa")}
              className={getButtonClasses("kaupapa")}
            >
              Our Kaupapa (Purpose)
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("whakapapa")}
              className={getButtonClasses("whakapapa")}
            >
              Our Whakapapa (History)
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("team")}
              className={getButtonClasses("team")}
            >
              Meet Our Team
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("what")}
              className={getButtonClasses("what")}
            >
              What We Do
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AboutNavBar;
