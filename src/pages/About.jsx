import React from "react";

const About = () => {
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="p-8 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Arman Khan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
            Full-Stack Developer & UI/UX Designer
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Professional Overview
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am a dedicated Full-Stack Developer with extensive experience in modern web technologies 
              and a strong foundation in user-centered design principles. My expertise spans front-end 
              development with React and JavaScript, back-end solutions with Node.js, and creating 
              intuitive user experiences through thoughtful UI/UX design.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a proven track record of delivering scalable web applications and collaborating 
              effectively in agile development environments, I am committed to writing clean, 
              maintainable code and staying current with industry best practices and emerging technologies.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Core Competencies
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Frontend Development",
                skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"]
              },
              {
                category: "Backend Development", 
                skills: ["Node.js", "REST APIs", "Database Design", "Server Architecture", "Authentication"]
              },
              {
                category: "Tools & Methodologies",
                skills: ["Git & GitHub", "Agile Development", "UI/UX Design", "Testing", "Performance Optimization"]
              }
            ].map((competency) => (
              <div key={competency.category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  {competency.category}
                </h3>
                <ul className="space-y-2">
                  {competency.skills.map((skill) => (
                    <li key={skill} className="text-gray-700 dark:text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Professional Approach
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                Development Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, scalable code that prioritizes maintainability and performance. 
                My approach emphasizes thorough planning, iterative development, and continuous refactoring 
                to ensure robust and efficient solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                Collaboration & Growth
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I thrive in collaborative environments where ideas can be shared and refined. I'm committed 
                to continuous learning, staying updated with the latest technologies, and contributing to 
                team knowledge through code reviews and technical discussions.
              </p>
            </div>
          </div>
        </section>

        {/* Career Objectives */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Career Focus
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My career is focused on building innovative web solutions that solve real-world problems 
              while delivering exceptional user experiences. I am particularly interested in projects 
              that challenge conventional approaches and require creative problem-solving. I look forward 
              to contributing to dynamic teams where I can apply my technical expertise while continuing 
              to grow as a developer and technology professional.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;