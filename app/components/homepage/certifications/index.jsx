import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      
      <Image
        src="/section.svg"
        alt="bg"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md uppercase tracking-widest">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
        >
          {certifications.map((certification) => (
            <div className="w-[400px] mx-5" key={certification.id}>
              
              {/* 🔥 FIX: pointer-events issue handle */}
              <div className="pointer-events-auto">
                <GlowCard identifier={`certification-${certification.id}`}>
                  
                  <div className="p-3 relative text-white h-full">

                    {/* 🔥 FIX: background image click block na kare */}
                    <Image
                      src="/blur-23.svg"
                      alt="bg"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80 pointer-events-none"
                    />

                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {certification.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-8 px-3 py-5">
                      
                      <div className="text-violet-500 hover:scale-125 transition">
                        <BsPersonWorkspace size={36} />
                      </div>

                      <div>
                        <p className="text-base sm:text-lg mb-2 font-medium uppercase line-clamp-2">
                          {certification.title}
                        </p>

                        <p className="text-sm sm:text-base">
                          {certification.institution}
                        </p>

                        {/* 🔥 FINAL FIXED LINK */}
                        {certification.link && (
                          <a
                            href={certification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#16f2b3] text-xs sm:text-sm mt-2 inline-block hover:underline font-bold cursor-pointer z-50 relative"
                          >
                            View Certificate 🔗
                          </a>
                        )}
                      </div>

                    </div>
                  </div>

                </GlowCard>
              </div>

            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Certifications;