import React from "react";
import { Link } from "react-router-dom";
import Ecommerce from "../Image/ecomarce.jpeg";
import Blogging from "../Image/blogmanagment.jpeg";
import TechMapperzCrm from "../Image/techmapperzcrm.jpeg"

export default function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      image: Ecommerce,
      about:
        "An online shopping platform like Flipkart with product listing, cart, and secure checkout.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      link: "https://github.com/babitap22/Product-Management-pr4",
    },
    {
      name: "Blogging Website",
      image: Blogging,
      about:
        "A blogging site with user authentication and CRUD operations for posts.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/babitap22/miniBloggingSite",
    },
    {
      name: "CRM Software",
      image: TechMapperzCrm,
      about:
        "A CRM tool to manage leads, clients, and tasks efficiently for small businesses.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      link: "https://unitycrm.techmapperz.com/login",
    },
   
  ];

  return (
    <section className="hero py-16 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
              />

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-black mb-3">{project.about}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* "Give Me More" Button */}
        <div className="text-center mt-12">
          <Link
            to="/all-projects"
            className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            Give Me More
          </Link>
        </div>
      </div>
    </section>
  );
}
