"use client";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 pt-20 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto"
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-white-800">About Me</h2>
        <p className="text-white-600 text-lg leading-relaxed">
          I'm <strong>Pramod Tharu</strong>, a passionate MERN Stack Developer
          with a flair for clean UI design and performance-driven coding. I also
          design intuitive user interfaces using Figma and enjoy turning complex
          problems into simple, beautiful, and intuitive designs.
        </p>
        <p className="text-white-600 text-lg">
          My journey started with curiosity and grew into a career in building
          modern web apps with scalable backend systems. I love teamwork,
          problem-solving, and continuous learning.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/about.jpg" // Replace with your image
          alt="About Pramod Tharu"
          width={350}
          height={350}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
