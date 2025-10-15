import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await res.json();
        setStatus(errorData.error || "Something went wrong!");
      }
    } catch (error) {
      setStatus("Failed to send message. Server not responding.");
    }
  };

  return (
    <section className="alter py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h2>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Section - Heading */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Let’s Create Something <br /> Amazing Together 🚀
            </h3>
            <p className="text-lg text-gray-600">
              Have an idea, project, or just want to say hi? I’d love to hear
              from you. Fill out the form and let’s connect!
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">📞 Quick Contact</h4>
              <div className="flex gap-3 text-md justify-center md:justify-start text-gray-700">
                {/* Email */}
                <a
                  href="mailto:babitapradhanindia@gmail.com"
                  className="flex items-center gap-2 hover:text-indigo-600"
                >
                  <FaEnvelope className="text-xl" />
                  {/* <span>babitapradhanindia@gmail.com</span> */}
                </a>

                {/* Phone */}
                <a
                  href="tel:+919875524799"
                  className="flex items-center gap-2 hover:text-indigo-600"
                >
                  <FaPhone className="text-xl" />
                  {/* <span>+91 98755 24799</span> */}
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 space-y-6 p-8 rounded-2xl shadow"
          >
            {/* Name */}
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-[#ce8ed1]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-[#ce8ed1]"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-[#ce8ed1]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:bg-[#ce8ed1]"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-40 bg-[#7F1384] border-2 text-white py-3 rounded-4xl font-semibold hover:bg-[#ce8ed1] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Status Message */}
        {status && (
          <p className="mt-6 text-center text-gray-700 font-medium">{status}</p>
        )}
      </div>
    </section>
  );
}
