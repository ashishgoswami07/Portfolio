// @flow strict
"use client";

import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import { motion } from 'framer-motion';

function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" } }
  };

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md tracking-widest uppercase">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, type: "spring" }}
           viewport={{ once: true, amount: 0.3 }}
        >
          <ContactForm />
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-3/4 "
        >
          <div className="flex flex-col gap-5 lg:gap-9">
            <motion.p variants={itemVariants} className="text-sm md:text-xl flex items-center gap-3 group">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer shadow-lg group-hover:shadow-[0_0_15px_bg-[#16f2b3]]"
                size={36}
              />
              <span className="group-hover:text-[#16f2b3] transition-colors">{personalData.email}</span>
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm md:text-xl flex items-center gap-3 group">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer shadow-lg"
                size={36}
              />
              <span className="group-hover:text-[#16f2b3] transition-colors">
                {personalData.phone}
              </span>
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm md:text-xl flex items-center gap-3 group">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer shadow-lg"
                size={36}
              />
              <span className="group-hover:text-[#16f2b3] transition-colors">
                {personalData.address}
              </span>
            </motion.p>
          </div>
          <motion.div variants={itemVariants} className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            {personalData.github && (
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:text-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer hover:shadow-[0_0_20px_0_rgba(22,242,179,0.5)]"
                  size={48}
                />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer hover:shadow-[0_0_20px_0_rgba(139,92,246,0.5)]"
                  size={48}
                />
              </Link>
            )}
            {personalData.twitter && (
              <Link target="_blank" href={personalData.twitter}>
                <FaXTwitter
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer hover:shadow-[0_0_20px_0_rgba(29,161,242,0.5)]"
                  size={48}
                />
              </Link>
            )}
            {personalData.stackOverflow && (
              <Link target="_blank" href={personalData.stackOverflow}>
                <FaStackOverflow
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#F48024] hover:text-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer hover:shadow-[0_0_20px_0_rgba(244,128,36,0.5)]"
                  size={48}
                />
              </Link>
            )}
            {personalData.facebook && (
              <Link target="_blank" href={personalData.facebook}>
                <FaFacebook
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer hover:shadow-[0_0_20px_0_rgba(24,119,242,0.5)]"
                  size={48}
                />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;