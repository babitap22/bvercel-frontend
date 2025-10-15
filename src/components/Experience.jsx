import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "Urgent IT Solutions",
      location: "Noida, India",
      designation: "Full-Stack Developer",
      duration: "Jul 2024 – Present",
      about:
        "Collaborating with cross-functional teams to design and implement responsive web interfaces using React.js and Tailwind CSS. Focused on building scalable, maintainable codebases, ensuring pixel-perfect UI across devices and browsers. Managing Git workflows, code reviews, and deployment pipelines to deliver features efficiently. Contributing to performance optimization and accessibility improvements.",

      skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "Git", "Deployment"],
    },
    {
      company: "Techmapperz Pvt. Ltd.",
      location: "Kolkata, India",
      designation: "Full Stack Developer",
      duration: "Mar 2023 – Jul 2024",
      about:  "Built and deployed full-stack applications integrating React.js frontend with Node.js and Express backend. Designed and developed dynamic dashboards and CRM systems to improve client business operations. Collaborated closely with product managers and designers to enhance usability, implement new features, and ensure high performance. Mentored junior developers on coding best practices and efficient Git usage.",
      
        skills: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Git",
        "HTML",
        "CSS",
      ],
    },
    // {
    //   company: "FunctionUp",
    //   location: "Remote",
    //   designation: "Backend Developer Trainee",
    //   duration: "Jun 2022 – Feb 2023",
    //   about:
    //     "Developed backend APIs for e-commerce, blogging,  and college internship platforms with JWT authentication and MongoDB.",
    //   skills: ["Node.js", "Express.js", "MongoDB", "JWT", "AWS S3"],
    // },
  ];

  return (
    <section className="alter py-16 bg-white" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          My Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {/* Top Row: Company + Designation */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {exp.company} - {exp.designation}
                </h3>
                <span className="text-gray-400">{exp.duration}</span>
              </div>

              {/* Location */}
              <p className="text-gray-300 mb-3">
                📍 <span className="font-medium">{exp.location}</span>
              </p>

              {/* About */}
              <p className="text-gray-200 mb-4">{exp.about}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
