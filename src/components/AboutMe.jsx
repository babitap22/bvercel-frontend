import React from "react";
import Image2 from "../Image/Image2.jpeg";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  // FaWordpress,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiChakraui,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function AboutMe() {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500 w-12 h-12" />,
    },
    { name: "React", icon: <FaReact className="text-blue-500 w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-blue-700 w-12 h-12" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 w-12 h-12" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 w-12 h-12" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700 w-12 h-12" />,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-500 w-12 h-12" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600 w-12 h-12" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500 w-12 h-12" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-600 w-12 h-12" />,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="text-teal-500 w-12 h-12" />,
    },
    // {
    //   name: "WordPress",
    //   icon: <FaWordpress className="text-blue-500 w-12 h-12" />,
    // },

    // Fallback styled badges
    {
      name: "Agile",
      icon: (
        <span className="w-12 h-12 flex items-center justify-center bg-blue-200 text-blue-800 font-bold rounded-lg">
          Ag
        </span>
      ),
    },
    {
      name: "CI/CD",
      icon: (
        <span className="w-12 h-12 flex items-center justify-center bg-green-200 text-green-800 font-bold rounded-lg">
          CI
        </span>
      ),
    },
    {
      name: "ThunderClient",
      icon: (
        <span className="w-12 h-12 flex items-center justify-center bg-purple-200 text-purple-800 font-bold rounded-lg">
          TC
        </span>
      ),
    },
  ];

  return (
    <section className="alter w-full bg-gray-50 py-12 px-6" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Photo */}
        <div className="flex justify-center">
          <img
            src={Image2}
            alt="Babita Pradhan"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: About Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hi, I’m <span className="font-semibold">Babita Pradhan</span>, from
            Kolkata. I’m a Software Developer with over 2 years of frontend and
            1 year of full-stack experience, specializing in JavaScript. On the
            frontend, I work with React, HTML, CSS, and Tailwind, while on the
            backend I use Next.js, Node.js, Express.js, and MongoDB for
            databases. I’m experienced with GitHub for collaboration and follow
            Agile methodology to deliver scalable, high-performing applications.
            Beyond web development, I have a keen interest in robotics, which
            fuels my passion for problem-solving and innovation.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              }}
              className="flex flex-col items-center justify-center p-6 bg-black rounded-2xl shadow transition cursor-pointer"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium text-gray-700">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
