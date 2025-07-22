import React from "react";
import { Mail, Phone } from "lucide-react";

const Home = () => {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-gray-800 dark:bg-black text-white py-8 text-center">
        <h1 className="m-0 text-4xl font-bold">Arman Khan</h1>
        <p className="mt-2 text-xl">
          Web Developer | Designer | Programmer
        </p>
      </header>

      <main className="p-8 max-w-4xl mx-auto space-y-12">
        <section id="about">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to my portfolio! I am a passionate developer with experience
            in building modern web applications. I love solving problems and
            creating beautiful, user-friendly interfaces.
          </p>
        </section>
        <section id="projects">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Projects
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Project One</strong> – A brief description of your project.
            </li>
            <li>
              <strong>Project Two</strong> – A brief description of your project.
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>
        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
            Contact
          </h2>
          <div className="flex items-center justify-center gap-8 text-gray-700 dark:text-gray-300">
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
            </a>.
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;