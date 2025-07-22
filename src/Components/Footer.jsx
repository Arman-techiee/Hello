import React from "react";

const Footer = () => (
  <footer style={{
    background: "#222",
    color: "#fff",
    padding: "2rem 0",
    textAlign: "center",
    marginTop: "auto",
    fontSize: "1rem"
  }}>
    <div style={{ marginBottom: "1rem" }}>
      <a
        href="https://github.com/Arman-techiee"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}
      >
        GitHub
      </a>
      <a
        href="https://www.facebook.com/techiee.arman"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com/techiee.arman"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}
      >
        Instagram
      </a>
      <a
        href="mailto:arman.techiee@gmail.com"
        style={{ color: "#fff", margin: "0 1rem", textDecoration: "none" }}
      >
        Email
      </a>
    </div>
    <div>
      &copy; {new Date().getFullYear()} Arman Khan. All rights reserved.
    </div>
  </footer>
);

export default Footer;