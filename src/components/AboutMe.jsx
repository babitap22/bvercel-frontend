import React from "react";
import Image2 from "../Image/Image2.jpeg";


export default function AboutMe() {
  

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
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-white leading-relaxed">
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

     
    </section>
  );
}
