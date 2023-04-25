import React from "react";
import hero from "../../assets/hero.png";
import laptop from '../../assets/laptop.jpg'
import { logos } from "../../Data";
import { motion } from "framer-motion";

import Image from 'next/image'

const Home = () => {
  const logos = ['duke', 'berkeley', 'mit', 'stanford', 'princeton', 'gt'];
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          {/* <div className="font-bold text-xs text-Teal mb-4">
            {" "}
            your e-learning partner
          </div> */}
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            The new way <br /> to learn programming <br /> <span className="text-Teal">(for absolutely free)</span>
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Empower yourself with free online learning resources for software engineering and computer science - all in one place.
          </p>
          <div className="mt-6">
            {/* <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button> */}
            {/* <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button> */}
          </div>
        </div>
        <div className="md:w-[40%]">
          {/* <img src={hero} alt="" /> */}
        </div>
      </div>
      <br />
      <br />
      <div>
        <p className="text-center text-xl">
          We curate free courses from reputable universities like{" "}
          <span className="text-Teal">
            MIT, Stanford, and Princeton
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={`./logos/${logo}.png`} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
