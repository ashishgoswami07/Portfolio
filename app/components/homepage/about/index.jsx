// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 lg:order-1"
        >
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase tracking-widest">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed font-light">
            {personalData.description}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt={personalData.name}
              className="relative rounded-lg transition-all duration-1000 grayscale group-hover:grayscale-0 hover:scale-110 cursor-pointer object-cover z-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;