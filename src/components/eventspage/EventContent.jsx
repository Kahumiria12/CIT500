import MaoriCircle from "../../images/maori-circle-noBG.png";
import { motion } from "framer-motion";

const EventContent = () => {
  return (
    <div className=" overflow-y-scroll">
      <div className="h-[calc(100vh-64px)] relative z-10 container mx-auto py-12 flex flex-col items-center w-full">
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl font-light font-italiana"
        >
          Events
        </motion.h1>

        {/* Event BLobs section */}
        <section className="mt-24 pb-12 text-center w-full">
          {/* Blobs */}
          <div className="flex flex-col gap-12 lg:gap-0 items-center lg:flex-row justify-around mt-6">
            {/* Submissions */}
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative overflow-hidden rounded-full h-[20rem] w-[20rem] flex justify-center group "
            >
              <div className="absolute group-hover:scale-110 transition-all duration-1000">
                <div className="relative">
                  {/* Maori Circle Overlay BG */}
                  <div className="absolute bg-stone-950 inset-0 opacity-75" />
                  <img src={MaoriCircle} />
                </div>
              </div>
              <div className="flex flex-col gap-12 py-8 z-10">
                <h3 className="text-2xl opacity-90 tracking-wide">
                  Submissions
                </h3>
                <div className="opacity-90">
                  <p className="italic tracking-wider">
                    Public submissions are now being called for the Principles
                    of the Treaty of Waitangi Bill.
                  </p>
                  <p className="mt-4">
                    <a
                      href="https://www.parliament.nz/en/ECommitteeSubmission/54SCJUST_SCF_227E6D0B-E632-42EB-CFFE-08DCFEB826C6/CreateSubmission"
                      target="_blank"
                      className="underline hover:text-red-400"
                    >
                      Click here
                    </a>{" "}
                    to complete your submission
                  </p>
                  <p className="mt-12 opacity-75">Closes on Jan 07 2025</p>
                </div>
              </div>
            </motion.div>

            {/* Workshops */}
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="relative overflow-hidden rounded-full h-[20rem] w-[20rem] flex justify-center group"
            >
              <div className="absolute group-hover:scale-110 transition-all duration-1000">
                <div className="relative">
                  {/* Maori Circle Overlay BG */}
                  <div className="absolute bg-stone-950 inset-0 opacity-75" />
                  <img src={MaoriCircle} />
                </div>
              </div>
              <div className="flex flex-col gap-12 py-8 z-10">
                <h3 className="text-2xl opacity-90 tracking-wide">Workshops</h3>
                <div className="opacity-90">
                  <p className="italic tracking-wider">
                    Find an event in your local area to get together with
                    others.
                  </p>
                  <p className="mt-8">
                    <a
                      href="https://our.actionstation.org.nz/calendars/together-for-te-tiriti-events?page=1"
                      target="_blank"
                      className="underline hover:text-red-400"
                    >
                      Click here
                    </a>{" "}
                    for more information
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Remembering the principles of Te Tiriti o Waitangi  */}
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative overflow-hidden rounded-full h-[20rem] w-[20rem] flex justify-center items-center group"
            >
              <div className="absolute group-hover:scale-110 transition-all duration-1000">
                <div className="relative">
                  {/* Maori Circle Overlay BG */}
                  <div className="absolute bg-stone-950 inset-0 opacity-75" />
                  <img src={MaoriCircle} />
                </div>
              </div>
              <div className="py-8 z-10">
                <h3 className="text-4xl opacity-90 text-center tracking-wide flex">
                  Coming soon...
                </h3>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventContent;
