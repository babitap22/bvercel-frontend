import React from "react";

export default function ThankYou() {
  return (
    <section className="hero py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-200">
            <span className="text-4xl">🙏</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Thank You for Visiting!
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-8">
          I truly appreciate you taking the time to explore my work.  
          Your support means a lot. Let’s stay connected and create something extraordinary together! 🚀
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="inline-block bg-[#7F1384] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#ce8ed1] transition"
        >
          Get In Touch Again
        </a>
      </div>
    </section>
  );
}
