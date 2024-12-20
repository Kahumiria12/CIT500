import HikoiIMG from "../../images/hikoi_1.png";
import HongiIMG from "../../images/hongi.png";
import AwarenessIMG from "../../images/awareness.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HikoiContent = () => {
  return (
    <div className="overflow-y-auto">
      <div className="relative z-10 container mx-auto">
        <div className="h-[calc(100vh-64px)] py-12 px-6 flex flex-col items-center w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="mx-auto italic max-w-4xl text-center text-lg xl:text-xl leading-tight font-extralight tracking-wider"
          >
            From 10 November to 19 November 2024, the Hīkoi for Toitū te Tiriti
            took place, uniting communities across Aotearoa to stand against a
            proposed bill that would redefine the principles of Te Tiriti o
            Waitangi. This movement echoed the legacy of past marches,
            advocating for the protection of Māori rights and the integrity of
            Te Tiriti. With every step, participants reaffirmed their commitment
            to justice, equity, and upholding the mana of tangata whenua.
          </motion.p>
          <motion.section
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="grid xl:grid-cols-3 gap-4 w-full"
          >
            {/* Hikoi */}
            <div className="mt-24 mx-auto">
              <img
                src={HikoiIMG}
                alt="Image of Hikoi"
                className="max-w-sm rounded"
              />
              <p className="text-sm mt-4 text-center max-w-sm">
                <span className="text-red-400 ">Encouraging Action:</span>{" "}
                Inspiring individuals and organizations to actively uphold the
                principles of Te Tiriti.
              </p>
            </div>

            {/* Hongi */}
            <div className="mt-24 mx-auto">
              <img
                src={HongiIMG}
                alt="Image of Hikoi"
                className="max-w-sm rounded"
              />
              <p className="mt-4 text-sm text-center max-w-sm">
                <span className="text-red-400">
                  Strengthening Relationships:
                </span>{" "}
                Building meaningful partnerships between tangata whenua (Māori)
                and tangata tiriti (non-Māori) to foster mutual respect and
                shared purpose.
              </p>
            </div>

            {/* Awareness */}
            <div className="mt-24 mx-auto">
              <img
                src={AwarenessIMG}
                alt="Image of Hikoi"
                className="max-w-sm rounded"
              />
              <p className="mt-4 text-sm text-center max-w-sm">
                <span className="text-red-400">Promoting Understanding:</span>{" "}
                Raising awareness about the significance of Te Tiriti o Waitangi
                and its role in shaping a just and equitable society.
              </p>
            </div>
          </motion.section>
          <div className="py-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="relative mt-12 group"
            >
              <div className="bg-gradient-to-r from-red-800 to to-red-700 absolute inset-0 z-0 blur-sm opacity-50 animate-tilt group-hover:blur-md group-hover:opacity-100 transition-all duration-1000 group-hover:duration-150" />
              <NavLink
                to={"/events"}
                className="bg-stone-950 px-2 py-1 rounded relative z-10 flex items-center tracking-wider font-light text-red-100 group-hover:text-red-300 transition-colors duration-150"
              >
                <p>Check out upcoming events</p>
                <ChevronRight size={20} />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HikoiContent;
