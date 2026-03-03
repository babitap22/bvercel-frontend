import React from "react";
import Profile from "../Image/profile_image.jpeg";
import Resume from '../Image/Babita Pradhan.pdf'



import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa6"; // Using FontAwesome v6 for X(Twitter)
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiStackoverflow,
  SiHackerrank,
} from "react-icons/si";

// import { FaEnvelope, FaPhone } from "react-icons/fa6";

import { FaArrowDown } from "react-icons/fa"; // Arrow icon

export default function HeroSection() {
  return (
    <section className="hero w-full pt-[40px] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16  text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-4 md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-medium ">👋 Welcome to my world</h2>
        <h1 className="text-4xl font-bold ">Hi, I'm Babita</h1>
        <h3 className="text-xl font-semibold">I am a Software Developer</h3>
        <p className="text-white leading-relaxed">
          I build responsive and dynamic web applications using modern
          technologies. With a passion for coding and problem-solving, I enjoy
          creating meaningful digital experiences that help businesses and
          individuals succeed.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 text-white rounded-2xl shadow-md hover:bg-indigo-700 transition"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-2 bg-indigo-600 text-white rounded-2xl shadow-md hover:bg-gray-300 transition"
          >
            Projects
          </a>
        </div>

        <div className="items-center gap-8">
          {/* Code Media */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">💻 Code Media</h4>
            <div className="flex gap-5 text-2xl justify-center md:justify-start text-white">
              <a
                href="https://github.com/babitap22"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-black" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/babitaprad7tbz/"
                target="_blank"
                rel="noreferrer"
              >
                <SiGeeksforgeeks className="hover:text-green-600" />
              </a>
              <a
                href="https://leetcode.com/u/BabitaPradhan/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode className="hover:text-orange-500" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/babitapradhanin1"
                target="_blank"
                rel="noreferrer"
              >
                <SiHackerrank className="hover:text-green-500" />
              </a>
              <a
                href="https://stackoverflow.com/users/28138407/babita-pradhan"
                target="_blank"
                rel="noreferrer"
              >
                <SiStackoverflow className="hover:text-blue-500" />
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">🌐 Social Media</h4>
            <div className="flex gap-5 text-2xl justify-center md:justify-start text-white">
              <a
                href="https://www.linkedin.com/in/babita-pradhan/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-blue-700" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                <FaDiscord className="hover:text-indigo-600" />
              </a>
              <a
                href="https://youtube.com/@technicalbabita?si=yyOeiPY2MbbTzKi1"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="hover:text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/babita_pradhan.official/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a
                href="https://x.com/BabitaP35313889"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="hover:text-black" />
              </a>
              <a
                href="https://www.facebook.com/share/1BaV2SVh3m/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Photo */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-10 mb-6 md:mb-0">
        <img
          src={Profile}
          alt="Babita"
          className="w-40 md:w-96 aspect-square object-cover rounded-full shadow-lg border-4 border-indigo-500"
        />
      </div>
      {/* Scroll Down Arrow */}
      <div className="absolute hidden md:block bottom-6 left-1/2 transform -translate-x-1/2 ">
        <a href="#about">
          <FaArrowDown className=" funarrow text-3xl text-indigo-600 animate-bounce cursor-pointer hover:text-indigo-800 transition " />
        </a>
      </div>
    </section>
  );
}
