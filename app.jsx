import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "C", "SQL"];

const contactLinks = [
  {
    label: "Email",
    value: "arulr9081@gmail.com",
    href: "mailto:arulr9081@gmail.com",
    icon: "mail"
  },
  {
    label: "Phone",
    value: "8005038965",
    href: "tel:+918005038965",
    icon: "phone"
  },
  {
    label: "GitHub",
    value: "github.com/arul-raj-r",
    href: "https://github.com/arul-raj-r",
    icon: "github"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arulraj-r",
    href: "https://www.linkedin.com/in/arulraj-r-543837397",
    icon: "linkedin"
  },
  {
    label: "Instagram",
    value: "instagram.com/arulx_.46",
    href: "https://www.instagram.com/arulx_.46",
    icon: "instagram"
  }
];

function Icon({ name }) {
  const common = {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const paths = {
    code: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </>
    ),
    briefcase: (
      <>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </>
    ),
    graduation: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.63 2.68a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.11-.45c.86.3 1.76.51 2.68.63A2 2 0 0 1 22 16.92Z" />
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    instagram: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    )
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  return (
    <main className="portfolio">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">
          <span className="brand-mark">AR</span>
          <span>Arulraj R</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div>
          <div className="eyebrow">
            <span className="pulse" />
            BSC CS Student | Web Developer
          </div>
          <h1>
            <span className="headline-row">
              <span>Arulraj</span>
            </span>
            <span className="headline-row">
              <span>R</span>
            </span>
          </h1>
          <p className="hero-copy">
            A web development focused BSc Computer Science student from Ayya Nadar Janaki
            Ammal College, building clean, responsive and interview-ready digital experiences
            with React, JavaScript and full-stack fundamentals.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Contact Me <Icon name="arrow" />
            </a>
            <a className="btn btn-secondary" href="https://github.com/arul-raj-r" target="_blank" rel="noreferrer">
              View GitHub <Icon name="github" />
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>2024-26</strong>
              <span>BSC CS Batch</span>
            </div>
            <div className="stat">
              <strong>7+</strong>
              <span>Core Skills</span>
            </div>
            <div className="stat">
              <strong>Fullstack</strong>
              <span>Internship</span>
            </div>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile snapshot">
          <div className="profile-card">
            <div className="avatar">AR</div>
            <div>
              <h2>Frontend minded. Full-stack trained.</h2>
              <p>Focused on practical web interfaces, clean code and reliable project presentation.</p>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-top">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="code-line">
              <span>01</span>
              <div>
                <span className="code-key">const</span> candidate = "Arulraj R";
              </div>
            </div>
            <div className="code-line">
              <span>02</span>
              <div>
                degree: "BSC Computer Science";
              </div>
            </div>
            <div className="code-line">
              <span>03</span>
              <div>
                focus: ["Web Development", "React", "Fullstack"];
              </div>
            </div>
            <div className="code-line">
              <span>04</span>
              <div>
                goal: "Build professional user experiences";
              </div>
            </div>
          </div>
          <div className="orbit">React</div>
        </aside>
      </section>

      <section className="section" id="about">
        <div className="section-heading reveal">
          <h2>About</h2>
          <p>
            I am interested in web development and enjoy creating modern, responsive websites.
            My academic foundation and internship exposure help me understand both frontend
            design and backend workflow.
          </p>
        </div>
        <div className="grid">
          <article className="card reveal" style={{ "--delay": "80ms" }}>
            <div className="card-icon">
              <Icon name="graduation" />
            </div>
            <h3>Education</h3>
            <p>
              BSC Computer Science at Ayya Nadar Janaki Ammal College, 2024-2026.
            </p>
          </article>
          <article className="card reveal" style={{ "--delay": "160ms" }}>
            <div className="card-icon">
              <Icon name="code" />
            </div>
            <h3>Interest</h3>
            <p>
              Web development, React interfaces, clean layouts, responsive design and
              practical application building.
            </p>
          </article>
          <article className="card reveal" style={{ "--delay": "240ms" }}>
            <div className="card-icon">
              <Icon name="briefcase" />
            </div>
            <h3>Professional Aim</h3>
            <p>
              To present as a confident fresher with strong fundamentals, a polished portfolio
              and readiness for development roles.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading reveal">
          <h2>Technical Skills</h2>
          <p>
            A focused stack covering frontend development, programming fundamentals and database basics.
          </p>
        </div>
        <div className="skills reveal" style={{ "--delay": "100ms" }}>
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading reveal">
          <h2>Experience</h2>
          <p>
            Internship exposure in full-stack development with a practical understanding of
            frontend screens, backend flow and database interaction.
          </p>
        </div>
        <div className="timeline">
          <article className="card timeline-item reveal" style={{ "--delay": "80ms" }}>
            <div className="timeline-date">Internship</div>
            <div>
              <h3>Fullstack Development Intern</h3>
              <ul>
                <li>Worked with frontend and backend development concepts.</li>
                <li>Practiced building structured pages and connecting application logic.</li>
                <li>Improved understanding of real project workflow and developer responsibilities.</li>
              </ul>
            </div>
          </article>
          <article className="card timeline-item reveal" style={{ "--delay": "160ms" }}>
            <div className="timeline-date">Portfolio Focus</div>
            <div>
              <h3>Interview Ready Presentation</h3>
              <ul>
                <li>Professional profile summary for recruiter review.</li>
                <li>Clear skill set, education details and contact links.</li>
                <li>Modern React UI with smooth motion and responsive design.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="contact-panel reveal">
          <div>
            <h2>Let us connect.</h2>
            <p>
              Available for internship, fresher web development opportunities and project discussions.
              Reach out through email, phone or professional profiles.
            </p>
          </div>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a className="contact-link" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={item.label}>
                <Icon name={item.icon} />
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        Designed and built with React for Arulraj R.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
