import Hero from "../components/homepage/Hero";
import TreatyInfo from "../components/homepage/TreatyInfo";

const HomePage = () => {
  return (
    <div>
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-red-900/20 via-50% to-stone-950 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Hero />
      <TreatyInfo />
    </div>
  );
};

export default HomePage;
