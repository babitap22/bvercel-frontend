import React from "react";



import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaAws,
  FaWordpress,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiChakraui,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
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
       icon: <SiExpress className="text-white w-12 h-12" />,
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
    <section id="skills" className="alter py-16 bg-gray-50 md:">
      {/* Skills Section */}
     {/* Skills Section */}
          <div className="mt-16" >
            <h2 className="text-3xl font-bold text-center mb-10 text-white">
              My Skills
            </h2>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-2.5 md:px-0">
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
                  <p className="mt-3 text-lg font-medium text-white">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
    </section>
  );
}
