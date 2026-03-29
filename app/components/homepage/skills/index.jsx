// @flow strict
"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md tracking-widest uppercase">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full my-12"
      >
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.10] cursor-pointer"
              key={id}>
              
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none group-hover:border-violet-500 group-hover:shadow-[0_0_20px_0_rgba(139,92,246,0.3)] transition-all duration-500 relative z-10">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-6">
                  <div className="h-8 sm:h-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                    {skillsImage(skill)?.src ? (
                      <Image
                        src={skillsImage(skill).src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-violet-500/10 rounded-full flex items-center justify-center text-[10px] text-violet-500">
                        {skill.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg font-medium group-hover:text-[#16f2b3] transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
};

export default Skills;