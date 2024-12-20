import AboutSection from "../components/aboutpage/AboutSection";
import ContactSection from "../components/aboutpage/ContactSection";

const AboutPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Glowing background blob thing */}
      <div className="absolute top-[20%] h-[35rem] w-[40rem] skew-y-6 skew-x-12 rounded-full bg-red-500 blur-2xl opacity-25 animate-blob-move" />
      <div className="absolute right-[0] h-[35rem] w-[40rem] skew-y-4 skew-x-6 rounded-full bg-red-700 blur-2xl opacity-25 animate-blob-move" />

      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
