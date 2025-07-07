"use client";
import Image from "next/image";
import React from "react";

const frontendSkills = [
  { name: "HTML", logo: "/html.jpg", percent: 90 },
  { name: "CSS", logo: "/css.png", percent: 85 },
  { name: "JavaScript", logo: "/js.png", percent: 80 },
  { name: "React", logo: "/react.png", percent: 85 },
  { name: "Figma", logo: "/figmas.png", percent: 75 },
];

const backendSkills = [
  { name: "Node.js", logo: "/node js.png", percent: 80 },
  { name: "Express.js", logo: "/exp..png", percent: 75 },
  { name: "MongoDB", logo: "/mongo.png", percent: 70 },
  { name: "Next.js", logo: "/nextjs.png", percent: 85 },
];

const SkillSection = () => {
  return (
    <section id="skill" className="px-4 pt-20 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white-800 mb-12">My Skills</h2>

      {/* Frontend Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white-600 mb-6">
          Frontend Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frontendSkills.map((skill) => (
            <div key={skill.name} className="text-center">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={100}
                height={100}
                className="mx-auto rounded-md shadow-sm object-contain"
              />
              <p className="mt-3 font-semibold text-white-800">{skill.name}</p>
              <p className="text-sm text-white-600">{skill.percent}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VS Separator */}
      <div className="text-3xl font-bold text-white-400 my-8">VS</div>

      {/* Backend Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white-600 mb-6">
          Backend Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {backendSkills.map((skill) => (
            <div key={skill.name} className="text-center">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={100}
                height={100}
                className="mx-auto rounded-md shadow-sm object-contain"
              />
              <p className="mt-3 font-semibold text-white-800">{skill.name}</p>
              <p className="text-sm text-white-600">{skill.percent}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
