"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Food Ordering System",
    image: "/projects/foodapp.png",
    tech: ["Next.js", "MongoDB", "Express", "Tailwind"],
    live: "https://your-live-link.com",
    github: "https://github.com/your-github",
  },
  {
    title: "E-Commerce Handmade",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    live: "https://your-ecom-site.com",
    github: "https://github.com/your-github-ecom",
  },
  {
    title: "Expense Tracker",
    image: "/projects/expensetracker.png",
    tech: ["React Native", "Firebase", "Chart.js"],
    live: "https://your-expense-app.com",
    github: "https://github.com/your-expense-app",
  },
];

const ProjectSection = () => {
  return (
    <section id="project" className="px-4 pt-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">
                {project.tech.join(" | ")}
              </p>
              <div className="flex space-x-4">
                <Link
                  href={project.live}
                  target="_blank"
                  className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Live
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 text-sm"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
