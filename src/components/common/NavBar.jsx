import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div
      className={`sticky top-0 z-50 ${
        isScrolled ? "bg-stone-950/95 shadow-xl" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto">
        <header className="flex justify-between items-baseline py-4">
          <NavLink to={"/"} onClick={scrollToTop} className="text-2xl">
            <span className="text-red-500">Toi</span>tū Te Tiriti
          </NavLink>
          <nav className="flex gap-8 tracking-wide text-xl font-light">
            <NavLink to={"/"} onClick={scrollToTop}>
              Home
            </NavLink>
            <NavLink to={"/about-us"} onClick={scrollToTop}>
              About Us
            </NavLink>
            <NavLink to={"/hikoi"}>Hikoi</NavLink>
            <NavLink to={"/events"}>Events </NavLink>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
