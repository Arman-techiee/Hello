import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Arman Khan
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold mt-8 mb-4">
            Bachelor of Information Technology Student
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Texas College of Management and IT
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
              Student
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
              Developer
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
              Researcher
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-20">
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
              Professional Summary
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="text-center leading-relaxed text-xl mb-6">
                Dedicated Bachelor of Information Technology student with a passion for innovative technology solutions, 
                research excellence, and practical application of cutting-edge computing concepts. Committed to bridging 
                the gap between academic theory and real-world implementation.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
                  <p className="text-sm">Exploring emerging technologies and developing creative solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Academic Excellence</h3>
                  <p className="text-sm">Commitment to rigorous learning and research methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Core Competencies
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                icon: "💻",
                color: "from-blue-500 to-cyan-500",
                skills: [
                  "React.js & Modern JavaScript",
                  "Full-Stack Web Development",
                  "HTML5, CSS3 & Responsive Design",
                  "RESTful API Integration",
                  "Version Control (Git)",
                  "Agile Development Practices"
                ]
              },
              {
                title: "Research & Analysis",
                icon: "🔬",
                color: "from-purple-500 to-pink-500",
                skills: [
                  "Technology Research & Innovation",
                  "Academic Writing & Documentation",
                  "Data Analysis & Interpretation",
                  "Critical Thinking & Problem Solving",
                  "Literature Review & Synthesis",
                  "Research Methodology"
                ]
              },
              {
                title: "Network & Systems",
                icon: "🌐",
                color: "from-green-500 to-emerald-500",
                skills: [
                  "Network Protocols & Architecture",
                  "System Administration",
                  "IT Infrastructure Design",
                  "Cybersecurity Fundamentals",
                  "Network Configuration & Troubleshooting",
                  "Cloud Computing Basics"
                ]
              }
            ].map((competency, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`w-20 h-20 bg-gradient-to-r ${competency.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg`}>
                    {competency.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                    {competency.title}
                  </h3>
                  <ul className="space-y-3">
                    {competency.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${competency.color} rounded-full mr-4 mt-2 flex-shrink-0`}></div>
                        <span className="text-sm leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Philosophy */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Academic Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 text-blue-800 dark:text-blue-300">
                Theory Meets Practice
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                I believe that true understanding comes from combining rigorous theoretical knowledge with 
                hands-on practical application. Every concept learned in the classroom becomes a building 
                block for innovative real-world solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-6 text-purple-800 dark:text-purple-300">
                Research Excellence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                Passionate about pushing the boundaries of technology through systematic research, 
                innovative thinking, and collaborative problem-solving that contributes to the 
                advancement of information technology.
              </p>
            </div>
          </div>
        </section>

        {/* Current Initiatives */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Current Initiatives
          </h2>
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Academic Projects
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Advanced React applications with modern architecture patterns",
                    "Network security research and system optimization studies",
                    "Interactive educational tools and learning platforms",
                    "Full-stack development with database integration"
                  ].map((project, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Learning Objectives
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Enterprise-level networking protocols and advanced system administration",
                    "Full-stack development mastery with modern frameworks and databases",
                    "Advanced research methodologies and technical communication",
                    "Cloud computing architectures and DevOps practices"
                  ].map((goal, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Future Vision
          </h2>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-2xl">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Technology Leadership & Innovation
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="text-center leading-relaxed text-lg mb-6">
                  My academic journey at Texas College of Management and IT is the foundation for becoming 
                  a transformative technology leader. I envision a career that seamlessly integrates 
                  cutting-edge development, groundbreaking research, and robust network solutions.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">Innovation</h4>
                    <p className="text-sm">Leading research initiatives in emerging technologies</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                    <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Impact</h4>
                    <p className="text-sm">Creating solutions that address real-world challenges</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
                    <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Excellence</h4>
                    <p className="text-sm">Pursuing continuous learning and professional growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;