import React from "react";

const About = () => {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Who I Am
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hello! I'm Arman Khan, a passionate Web Developer, Designer, and
            Programmer with a knack for creating dynamic and user-friendly web
            applications. My journey into the world of code started with a
            curiosity for how things work on the internet, and it has since
            evolved into a full-fledged passion for building elegant and
            efficient solutions to complex problems.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I thrive in collaborative environments and am always eager to learn
            new technologies and methodologies to stay at the forefront of web
            development.
          </p>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {[
              "React",
              "Node.js",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "HTML5 & CSS3",
              "Git & GitHub",
              "REST APIs",
              "UI/UX Design",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="journey">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            My Journey
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My professional path has been a rewarding one, filled with
            continuous learning and growth. I started with foundational web
            technologies and have since delved into modern JavaScript frameworks
            and backend development. Each project has been an opportunity to not
            only apply my skills but also to understand the intricate dance
            between functionality and user experience. I'm excited about what
            the future holds and the new challenges I'll get to tackle.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;