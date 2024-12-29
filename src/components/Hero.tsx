"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profile from "../assets/Profile.png";


const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

    <div className="absolute rounded-[50%] w-[3000px] h-[3000px] top-[550px] left-[50%] 
               -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942_100%)]"></div>

     
     <div className="relative">
     <motion.div
          className="text-8xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and shifted down
          animate={{ opacity: 1, y: 0 }}  // Final state: fully visible and at normal position
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Akshara</h1>
        </motion.div>

        {/* Animated Cursor */}
        <motion.div
          className="hidden md:block absolute left-[1120px] top-[170px]"
          drag
        >
              <Image 
              src={cursor}
              height="170"
              width="170"
              alt="cursor"
              className=""
              draggable="false"
              />
        </motion.div>

        <motion.div
        className="hidden md:block absolute left-[220px] top-[170px]"
        drag
        >
              <Image 
              src={lightning}
              height="120"
              width="120"
              alt="cursor"
              className=""
              draggable="false"
              />
        </motion.div>
     
        <motion.p
          className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Web Designer with expertise in Front-end web development UI/UX design, Digital Marketing, and proficiency in Figma, Git, and Photoshop.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src={profile}
            alt="profile picture"
            className="h-auto w-auto mx-auto mt-8"
          />
        </motion.div>
  </div>

  </div>
  )
}

export default Hero
