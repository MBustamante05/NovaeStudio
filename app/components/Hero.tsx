'use client'
import FanSlider from "./GsapImageSlider";
import { Navbar } from "./Navbar";
import { ServiceBtn } from "./UI/ServiceBtn";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="relative bg-black py-10 min-h-screen h-full">
      <section className="text-white py-28 text-center mx-auto space-y-6 ">
        <Navbar />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 z-10"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            {"Create Stunning Moments".split(" ").map((word, index) => (
              <motion.span key={index} className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <h1 className="text-6xl font-bold text-white mb-4">
            {"with AI-Powered Design".split(" ").map((word, index) => (
              <motion.span key={index} className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 6) * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <p className="text-gray-400 text-lg">
            Turn your ideas into high-quality visuals in seconds,
          </p>
          <p className="text-gray-400 text-lg mb-5">no design skills needed.</p>
          {/* <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full border border-white/20 transition-all duration-300">
          More info →
        </button> */}
          <ServiceBtn />
        </motion.div>
        <FanSlider />
      </section>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-80 rounded-full blur-3xl opacity-50 pointer-events-none bg-gradient-to-r from-yellow-500 via-purple-500 to-red-500 z-10"
      />
    </div>
  );
};
