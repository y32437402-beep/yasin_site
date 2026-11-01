
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Programming.css";

const tools = [
  {
    title: "HTML5",
    description: "ساختار صفحات وب",
    icon: "html",
    color: "#ff7043",
    tag: "STRUCTURE",
  },
  {
    title: "CSS3",
    description: "طراحی و استایل صفحات",
    icon: "css",
    color: "#42a5f5",
    tag: "DESIGN",
  },
  {
    title: "JavaScript",
    description: "تعامل و منطق وب",
    icon: "javascript",
    color: "#fdd835",
    tag: "INTERACTION",
  },
  {
    title: "React",
    description: "ساخت رابط کاربری مدرن",
    icon: "react",
    color: "#61dafb",
    tag: "FRONTEND",
  },
  {
    title: "Node.js",
    description: "اجرای JavaScript در سمت سرور",
    icon: "node",
    color: "#8bc34a",
    tag: "RUNTIME",
  },

];

function ToolIcon({ type }) {
  const common = {
    width: 54,
    height: 54,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "html":
      return (
        <svg {...common}>
          <path d="M12 6h40l-4 44-16 8-16-8L12 6Z" />
          <path d="M22 19h22l-1 8H23l1 7h18l-2 12-8 4-8-4-1-6" />
        </svg>
      );

    case "css":
      return (
        <svg {...common}>
          <path d="M12 6h40l-4 44-16 8-16-8L12 6Z" />
          <path d="M22 19h22l-1 8H24l-1 7h18l-2 12-8 4-8-4-1-6" />
        </svg>
      );

    case "javascript":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="50" height="50" rx="7" />
          <path d="M29 25v19c0 5-3 8-8 8-3 0-6-2-7-5" />
          <path d="M37 45c2 4 5 6 9 6s7-2 7-6c0-4-3-5-8-7-4-2-6-4-6-7 0-4 3-7 8-7 3 0 5 1 7 3" />
        </svg>
      );

    case "react":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="4" fill="currentColor" />
          <ellipse cx="32" cy="32" rx="27" ry="11" />
          <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="27" ry="11" transform="rotate(120 32 32)" />
        </svg>
      );

    case "node":
      return (
        <svg {...common}>
          <path d="m32 5 24 14v26L32 59 8 45V19L32 5Z" />
          <path d="m22 24 10-6 10 6v16l-10 6-10-6V24Z" />
          <path d="m22 24 10 6 10-6M32 30v16" />
        </svg>
      );

    case "vscode":
      return (
        <svg {...common}>
          <path d="m44 6 12 6v40l-12 6L18 37l-8 7-5-4V24l5-4 8 7L44 6Z" />
          <path d="m18 27 26-21v46L18 37M10 20l8 7v10l-8 7" />
        </svg>
      );

    default:
      return null;
  }
}

function Programming() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .tool-card"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="programming-page">
      <div className="programming-background" aria-hidden="true">
        <div className="background-glow glow-one" />
        <div className="background-glow glow-two" />
        <div className="background-grid" />
      </div>

      <section className="programming-intro reveal">
        <div className="card">
          <img
            className="image"
            alt="فضانورد"
            src="https://uiverse.io/astronaut.png"
          />



          <div className="icons">
            <Link className="contact-button" to="/contact">
              <span>ارتباط با من</span>
              <span className="button-arrow" aria-hidden="true">↗</span>
            </Link>

            <button
              className="projects-button"
              type="button"
              onClick={() =>
                document.getElementById("projects-section")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <span>پروژه‌های من</span>
              <span className="button-arrow" aria-hidden="true">↓</span>
            </button>
          </div>
        </div>
      </section>

      <section className="tools-section" id="tools-section">
        <div className="tools-heading reveal">
          <span className="section-kicker">MY WORKSPACE</span>
          <h2>ابزارهای <span>من</span></h2>
          <p>

          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <article
              className="tool-card"
              key={tool.title}
              style={{
                "--tool-color": tool.color,
                "--tool-delay": `${index * 110}ms`,
              }}
            >
              <div className="tool-card-top">
                <span className="tool-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="tool-tag">{tool.tag}</span>
              </div>

              <div className="tool-icon">
                <ToolIcon type={tool.icon} />
              </div>

              <div className="tool-info">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </div>

              <div className="tool-card-bottom">
                <span>ابزار موردعلاقه</span>
                <span className="tool-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects-section" className="projects-section">
        <div className="loader reveal">
          <div className="container">
            <div className="moon">
              <div className="crater crater1" />
              <div className="crater crater2" />
              <div className="crater crater3" />
              <div className="crater crater4" />
              <div className="crater crater5" />
              <div className="shadow" />
              <div className="eye eye-l" />
              <div className="eye eye-r" />
              <div className="mouth" />
              <div className="blush blush1" />
              <div className="blush blush2" />
            </div>

            <div className="orbit">
              <div className="rocket">
                <div className="window" />
                <div className="fire" />
                <div className="gas" />
                <div className="gas" />
                <div className="gas" />
                <div className="gas" />
                <div className="gas" />
                <div className="gas" />
                <div className="gas" />
              </div>
            </div>

            <div className="curve">
              <svg viewBox="0 0 500 500" aria-hidden="true">
                <defs>
                  <path
                    id="projects-loading-path"
                    d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                  />
                </defs>
                <text>
                  <textPath href="#projects-loading-path">
                    ...loading...
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="coming-soon">
            <h2>پروژه‌هام به‌زودی .....🚀</h2>

          </div>
        </div>
      </section>
      <Link className="contact-button2" to="/contact">
        <span>ارتباط با من</span>
        <span className="button-arrow" aria-hidden="true">↗</span>
      </Link>
    </main>

  );
}

export default Programming;
