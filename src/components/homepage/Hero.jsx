import HeroIMG from "../../images/heroIMG-noBG.png";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero-section" className="relative z-10 container mx-auto">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center justify-center h-[calc(100vh-64px)]"
      >
        <img
          src={HeroIMG}
          alt="Hero Image"
          className="max-w-xs sm:max-w-sm md:max-w-md"
        />
        <div>
          <p className="max-w-lg text-lg italic text-stone-100/90">
            Te Tiriti o Waitangi (The Treaty of Waitangi), is a foundational
            agreement for everyone living in Aotearoa New Zealand. It provides
            us all with a shared foundation and a sense of belonging.
          </p>
          <div className="flex flex-col items-center mt-12 p-2 cursor-pointer">
            <a href="#treaty-section-1">
              <ArrowDown
                className="self-center animate-bounce pointer-events-none"
                size={32}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
