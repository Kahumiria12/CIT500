import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import hikoi from "../../videos/hikoi.mp4";
import treatySectionTwoImage from "../../images/treatySectionTwoImage-noBG.png";

const TreatyInfo = () => {
  const sectionOneTextRef = useRef(null);
  const sectionTwoTextRef = useRef(null);

  const isInView = useInView(sectionOneTextRef, { once: true });
  const isInViewSectionTwo = useInView(sectionTwoTextRef, { once: true });

  const controls = useAnimation();
  const secondControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (isInViewSectionTwo) {
      secondControls.start("visible");
    }
  }, [isInView, isInViewSectionTwo]);

  const animationVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative z-10">
      {/* Section 1 */}
      <section
        id="treaty-section-1"
        className="scroll-mt-[64px] h-[calc(100vh-64px)] border-t-4 border-red-950/50"
      >
        <div className="relative h-full w-full">
          {/* Overlay BG */}
          <div className="absolute inset-0 bg-black/75 z-10" />

          {/* Text over video */}
          <motion.p
            ref={sectionOneTextRef}
            variants={{
              hidden: { opacity: 0, y: "-25%", x: "-50%" },
              visible: { opacity: 1, y: "-50%" },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="absolute top-[50%] left-[50%] z-20 text-red-100 font-semibold tracking-wide text-center text-xl md:text-2xl w-full max-w-sm sm:max-w-lg md:max-w-2xl leading-relaxed"
          >
            <span className="font-extrabold text-red-800">Toitū te Tiriti</span>{" "}
            is a movement in Aotearoa (New Zealand) that aims to uphold and
            strengthen{" "}
            <a
              href="https://teara.govt.nz/en/te-tiriti-o-waitangi-the-treaty-of-waitangi/print"
              target="_blank"
              className="font-bold underline"
            >
              Te Tiriti o Waitangi
            </a>{" "}
            (the Treaty of Waitangi). The movement is centered in Te Ao Māori
            and has been called for by Te Pāti Māori (The Māori Party).
          </motion.p>

          {/* Video playing in bg */}
          <video
            src={hikoi}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="treaty-section-2"
        className="h-[calc(100vh-64px)] pb-6 md:pb-0 border-t-4 border-red-950/50"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col-reverse md:flex-row-reverse justify-center md:justify-between items-center h-full">
            <motion.div
              ref={sectionTwoTextRef}
              variants={animationVariants}
              initial="hidden"
              animate={secondControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col items-center md:items-start justify-center"
            >
              <p className="max-w-md md:max-w-xl text-lg text-center font-bold md:font-normal md:text-left md:text-xl lg:text-2xl mb-4">
                Some of the goals of the Toitū te Tiriti movement include:
              </p>
              <ul className="italic tracking-wide font-light md:text-lg space-y-4 max-w-sm self-start list-disc md:mt-6 ml-12">
                <li>Opposing the Treaty Principles Bill</li>
                <li>
                  Retaining reference to Te Tiriti o Waitangi in the education
                  sector&apos;s guiding documents
                </li>
                <li>
                  Retaining access to PLD for teachers to improve their cultural
                  and language skills
                </li>
                <li>Building union cultural capacity</li>
              </ul>
            </motion.div>
            <motion.img
              variants={animationVariants}
              initial="hidden"
              animate={secondControls}
              transition={{ duration: 1, delay: 0.5 }}
              src={treatySectionTwoImage}
              className="max-w-[16rem] mb-6 md:mb-0 md:mr-12 md:pl-6 lg:max-w-full"
            ></motion.img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatyInfo;
