import React from "react";
import CocreateERP from "../Image/CocreateERP.jpeg"
import CocreateLab from "../Image/CocreateLab.jpeg"
import Itmc from "../Image/itmc.jpeg"
import ManusherGharBari from "../Image/ManusherGhar.jpeg"
import SecondResturent from "../Image/secondresturent.jpeg"
import Shrc from "../Image/shrc.jpeg"
import Techmapperz from "../Image/techmapperz.jpeg"
import TechMapperzCrm from "../Image/techmapperzcrm.jpeg"
import WeddingIndia from "../Image/Weddingindia.jpeg"
import Ecommerce from "../Image/ecomarce.jpeg"
import Blogging from "../Image/blogmanagment.jpeg"
import Inventory from "../Image/inventory.jpeg"
import BookManagement from "../Image/bookmanagenent.jpeg"
import Internship from "../Image/internship.jpeg"
import UrlShortner  from "../Image/urlshortner.jpeg"
import Vega from "../Image/photovega.jpeg"
import DigitalClock from "../Image/digitalclock.jpeg"
import LoginOut from "../Image/loginlogout.jpeg"
// import DignTechee from "../Image/"
import Optymyz from "../Image/optimyse.jpeg"




import { Link } from "react-router-dom";

export default function Project() {
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
        "Building strong customer relationships to enhance loyalty and drive sales through effective interaction management. Primarily focused on a front-end experience that allows users to explore and filter engaging blog content.",
      tech: ["HTML5","Bootstrap","CSS3","JavaScript","PHP","CSS3"],
      link: "https://unitycrm.techmapperz.com/login",
    },
    {
      name: "ERP System",
      image: CocreateERP,
      about:
        "Spearheaded the design and development of Website using CoCreateLab’s React JS, HTML, CSS, and Tailwind CSS, Node js, AWS, resulting in a modern and user-friendly interface  Implemented responsive web design practices, ensuring optimal user and collaborated with crossfunctional teams to integrate Node JS for server-side functionalities",
      tech: ["React","TailWind CSS","MongoDB","Node.js","Express.js","HTML5","Bootstrap","CSS3","Javascript","authentication and authorization","Bcrypt","Multer","JWT"],
      // link: "https://github.com/babitap22/erp",
    },
    // {
    //   name: "Weather App",
    //   image: "/projects/weather.png",
    //   about:
    //     "A real-time weather forecasting application using OpenWeather API.",
    //   tech: ["React", "Node.js", "CSS", "API"],
    //   link: "https://github.com/babitap22/weather-app",
    // },
    {
      name: "Inventory Management",
      image: Inventory,
      about:
        "My personal portfolio website showcasing skills, projects, and experience.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://github.com/babitap22/portfolio",
    },
    {
      name: "Books Management System",
      image: BookManagement,
      about:
        "A system like Goodreads to manage books, reviews, and ratings.",
      tech: ["Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/Priyanka9120/Project-03",
    },
    {
      name: "Internship Portal",
      image: Internship,
      about:
        "A platform for colleges and students to manage internship opportunities.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Avverma9/Intern-Project-2",
    },
    // {
    //   name: "Blogging Website",
    //   image: "/projects/chat.png",
    //   about:
    //     "A real-time chat application with socket.io for instant messaging.",
    //   tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    //   link: "https://github.com/babitap22/chat-app",
    // },
    {
      name: "URL Shortner",
      image: UrlShortner ,
      about:
        "A productivity tool to create, assign, and track tasks with reminders.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://github.com/babitap22/ScalableURLShortner-",
    },

    {
      name: "Vega",
      image: Vega,
      about:
        "A productivity tool to create, assign, and track tasks with reminders.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://github.com/babitap22/CaptionCanvas",
    },

    {
      name: "Manusher GharBari",
      image: ManusherGharBari,
      about:
        "Focused mostly on the Front-end, integrated blog APIs that allow users to read and filter interesting blogs.",
      tech: ["HTML5","Bootstrap","CSS3","Javascript","PHP"],
      link: "https://manusherghorbari.com/",
    },

    {
      name: "Digital Clock",
      image: DigitalClock ,
      about:
        "A productivity tool to create, assign, and track tasks with reminders.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://github.com/babitap22/task-manager",
    },


    {
      name: "LogIn/Logout",
      image: LoginOut,
      about:
        "A productivity tool to create, assign, and track tasks with reminders.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://github.com/babitap22/task-manager",
    },

    {
      name: "Second Resturent(Ecommerce)",
      image: SecondResturent,
      about:
        "The site  appears to be a restaurant-focused eCommerce site built with Elementor and equipped with a payment gateway.",
      tech: ["WordPress"],
      link: "https://second-resturent.techmapperz.com/",
    },

    {
      name: "Wedding India",
      image: WeddingIndia,
      about:
        "A productivity tool to create, assign, and track tasks with reminders.",
      tech: ["Next","TailWind CSS","REST API","HTML5","Bootstrap","MongoDB","Node.js","JavaScript","CSS3"],
      link: "https://wedingindia.com/",
    },

    // {
    //   name: "DesignTechee",
    //   image: "/projects/task.png",
    //   about:
    //     "A productivity tool to create, assign, and track tasks with reminders.",
    //   tech: ["React", "Redux", "Node.js", "MongoDB"],
    //   link: "https://github.com/babitap22/task-manager",
    // },

    {
      name: "ITMC System",
      image: Itmc,
      about:
        "Static Website Of IT Company and it provides all IT Services.",
      tech: ["HTML5","Bootstrap","CSS3","JavaScript","PHP"],
      link: "https://www.itmcsystems.com/",
    },

    {
      name: "TechMapperz",
      image: Techmapperz,
      about:
        "The site includes services, case studies, and client testimonials. Front-end components were crafted with 97% accuracy using HTML, CSS, React, and JavaScript, boosting user engagement by 15%.",
      tech: ["HTML5","Bootstrap","TailWind CSS","CSS3","React","JavaScript","Redux","Chakra UI","React Router","MongoDB","Node.js","Express.js","ThunderClient"],
      link: "https://www.techmapperz.com/",
    },


    {
      name: "SHRC",
      image: Shrc,
      about:
        "Implemented quality assurance, improving performance by 25% and reducing downtime by 20%. Designed RESTful APIs with PHP and MySQL, executing CRUD operations for effective data handling and integration.",
      tech: ["HTML5","CSS3","JavaScript","Bootstrap","PHP"
],
      link: "https://shrcindia.in/",
    },

    {
      name: "Cocreate Labs",
      image: CocreateLab,
      about:
        "Created a website for admin, mentor, and student roles, managing users, content, and courses. Developed front-end components using HTML, CSS, React, and JavaScript, reducing user-reported issues by 15%. Designed RESTful APIs ensuring robust performance.",
      tech: ["React","TailWind CSS,","MongoDB","Node.js","Express.js","RESTful API","JavaScript","CRUD","HTML5","Bootstrap","CSS3"
],
      link: "https://cocreatelabs.in/",
    },

    {
      name: "Optimyz Learning",
      image:  Optymyz ,
      about:
        "A productivity tool to create, assign, and track tasks with reminders.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://optimyzlearning.com/",
    },
  ];

  return (
    <>
      <section className="hero pt-24 py-16 bg-gray-50" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{project.about}</p>

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

          {/* Go Home Button */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Go Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
