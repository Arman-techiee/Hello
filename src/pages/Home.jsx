import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "/src/assets/photo/profile.png";

const Home = () => {
  const projects = [
    {
      title: "Weather App",
      description:
        "A simple app to check the current weather in any city. Built with React and the WeatherAPI.",
      link: "/projects",
      linkState: { defaultApp: "weather" },
    },
    {
      title: "Nepal News",
      description:
        "Fetches and displays the latest news headlines about Nepal using the NewsAPI.",
      link: "/projects",
      linkState: { defaultApp: "news" },
    },
  ];

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero/Header Section */}
      <header className="bg-gray-800 dark:bg-black text-white py-16 text-center shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Arman Khan</h1>
          <p className="mt-4 text-xl text-gray-300">
            Web Developer | Designer | Programmer
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-5xl mx-auto space-y-20">
        {/* About Me Section */}
        <section id="about" className="text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img
                src={profilePic}
                alt="Arman Khan"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="md:col-span-2 text-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to my portfolio! I am a passionate developer with
                experience in building modern, responsive, and user-friendly web
                applications. I love tackling complex problems and turning ideas
                into reality through clean and efficient code.
              </p>
              <Link
                to="/about"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Learn More About Me &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-center">
          <h2 className="text-3xl font-bold mb-8">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <Link
                  to={project.link}
                  state={project.linkState}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  View Project &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700 dark:text-gray-300">
            <a
              href="mailto:arman.techiee@gmail.com"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Mail />
              <span>arman.techiee@gmail.com</span>
            </a>
            <a
              href="tel:+9779826999632"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Phone />
              <span>+977-9826999632</span>
            </a>
            <a
              href="https://www.facebook.com/techiee.arman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Facebook />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/techiee.arman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <Instagram />
              <span>Instagram</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;