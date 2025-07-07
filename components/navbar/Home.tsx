"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto"
    >
      {/* Left: Photo */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/pramod.png" // replace with your image
          alt="Pramod Tharu"
          width={300}
          height={600}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-white-800">
          I'm <span className="text-red-500">Pramod Tharu</span>
        </h1>

        <h2 className="text-xl text-white-600 h-6">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Figma Designer",
              "Creative Thinker",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <a
          href="/PRAMOD THARU.pdf" // replace with your resume path
          download
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
