import React from "react";
import { 
  Mail, 
  Phone, 
  Facebook, 
  Instagram,
  Github, 
  ExternalLink,
  ArrowRight,
  Code,
  Palette,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "/src/assets/photo/profile.png";

const Home = () => {
  const skills = [
    { icon: Code, name: "Development", description: "Modern web technologies" },
    { icon: Palette, name: "Design", description: "User-centered interfaces" },
    { icon: Globe, name: "Integration", description: "Seamless API solutions" }
  ];

  const featuredProjects = [
    {
      title: "Weather Intelligence App",
      description:
        "Advanced weather application featuring real-time data, forecasting, and intuitive UI. Built with React and integrated with WeatherAPI for accurate meteorological information.",
      tech: ["React", "API Integration", "Responsive Design"],
      link: "/projects",
      linkState: { defaultApp: "weather" },
    },
    {
      title: "Nepal News Platform",
      description:
        "Comprehensive news aggregation platform delivering the latest headlines from Nepal. Features dynamic content loading and optimized performance for seamless user experience.",
      tech: ["React", "NewsAPI", "Performance Optimization"],
      link: "/projects",
      linkState: { defaultApp: "news" },
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block">Arman Khan</span>
                  <span className="block text-3xl lg:text-4xl text-blue-300 font-normal mt-2">
                    Full Stack Developer
                  </span>
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                  Crafting exceptional digital experiences through innovative web solutions. 
                  Passionate about clean code, modern design, and user-centric development.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-lg"></div>
                <img
                  src={profilePic}
                  alt="Arman Khan"
                  className="relative w-72 h-72 rounded-full object-cover shadow-2xl ring-4 ring-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Combining technical expertise with creative vision to deliver comprehensive digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-white dark:bg-gray-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with a keen eye for design and a commitment to excellence. 
              With expertise in modern web technologies, I transform complex ideas into elegant, scalable solutions 
              that make a real impact.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-lg transition-colors"
            >
              Learn More About My Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent projects demonstrating technical skills and creative problem-solving
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={project.link}
                    state={project.linkState}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors"
                  >
                    Explore Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm currently available for new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:arman.techiee@gmail.com"
                className="flex items-center justify-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">arman.techiee@gmail.com</div>
                </div>
              </a>
              
              <a
                href="tel:+9779826999632"
                className="flex items-center justify-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <Phone className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white">Phone</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">+977-982-699-9632</div>
                </div>
              </a>
            </div>
            
            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://github.com/Arman-techiee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-800 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/techiee.arman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/techiee.arman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;