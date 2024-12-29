"use client"; // Ensures it's a client-side component

import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import 'animate.css';

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-6xl w-[320px] mx-auto font-semibold p-4 mb-4 text-center dark:text-white text-black">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-6 md:grid md:grid-cols-8 gap-6 place-items-center">
        {/* Education Section */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden mb-6 animate__animated animate__fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4 ml-4">
              <h2 className="text-2xl font-bold dark:text-white/80 text-black/80">Education</h2>
              <p className="text-lg dark:text-white/70 text-black/70 mt-2">
                Im currently a Postgraduate MCA final year with 8.8 CGPA & I hold a degree in B.Com with computer application with 7.8 CGPA.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4 ml-4">
              <h2 className="text-2xl font-bold dark:text-white/80 text-black/80">Technical Skills</h2>
              <p className="text-lg dark:text-white/70 text-black/70 mt-2">
                As a web designer, I excel at crafting responsive, user-friendly interfaces and delivering efficient design solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4 ml-4">
              <h2 className="text-2xl font-bold dark:text-white/80 text-black/80">Experience</h2>
              <p className="text-lg dark:text-white/70 text-black/70 mt-2">I have a diverse portfolio of projects</p>
            </div>
          </div>
        </div>

        {/* Problem-Solving Section */}
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden mb-6 animate__animated animate__fadeInUp animate__delay-3s">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4 ml-4">
              <h2 className="text-2xl font-bold dark:text-white/80 text-black/80">Problem-Solving</h2>
              <p className="text-lg dark:text-white/70 text-black/70 mt-2">I approach challenges with a logical and systematic mindset</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/18HfdmUK9uKUC1tKSiWL93TEF-HQ_e2jN/view?usp=sharing"
          target="_blank"
          download="My_CV.pdf"
          className="px-6 py-3 bg-orange-400 text-white font-bold text-lg rounded-lg shadow-md hover:bg-purple-500 transition duration-300 animate__animated animate__pulse animate__infinite"
        >
          View My CV
        </a>
      </div>
    </div>
  );
};

export default About;
