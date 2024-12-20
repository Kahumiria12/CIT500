import { useState } from "react";
import { motion } from "framer-motion";
import AboutNavBar from "./aboutSectionContent/AboutNavBar";
import WhoContent from "./aboutSectionContent/WhoContent";
import KaupapaContent from "./aboutSectionContent/KaupapaContent";
import WhakapapaContent from "./aboutSectionContent/WhakapapaContent";
import MeetTeamContent from "./aboutSectionContent/MeetTeamContent";
import WhatWeDoContent from "./aboutSectionContent/WhatWeDoContent";

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState("who");

  const renderContent = () => {
    switch (activeSection) {
      case "who":
        return <WhoContent />;
      case "kaupapa":
        return <KaupapaContent />;
      case "whakapapa":
        return <WhakapapaContent />;
      case "team":
        return <MeetTeamContent />;
      case "what":
        return <WhatWeDoContent />;
      default:
        return null;
    }
  };

  return (
    <div className="container px-2 mx-auto h-[calc(100vh-64px)] z-10">
      <div className="relative flex w-full h-full">
        {/* Animated Dynamic Content */}
        <motion.div
          key={activeSection} // Ensure animation re-runs on section change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-light"
        >
          {renderContent()}
        </motion.div>

        {/* NavBar */}
        <AboutNavBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default AboutSection;
