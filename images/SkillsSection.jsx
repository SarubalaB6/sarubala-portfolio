
import { useState } from "react";
import "./SkillsSection.css";

const skills = [
  {
    id: "web",
    icon: "⌘",
    title: "Web Development",
    tools: "HTML · CSS · JavaScript · React",
    level: "Learning & Building",
    color: "purple",
    description:
      "Creating responsive websites and interactive user experiences.",
    projects: ["Portfolio Website", "CreatorForge"],
  },
  {
    id: "data",
    icon: "▤",
    title: "Data & SQL",
    tools: "SQL · MySQL · Data Analysis",
    level: "Practicing",
    color: "cyan",
    description:
      "Learning database queries, organizing information and finding insights.",
    projects: ["SQL Practice"],
  },
  {
    id: "ai",
    icon: "✳",
    title: "Python & AI",
    tools: "Python · Generative AI · Prompting",
    level: "Exploring",
    color: "pink",
    description:
      "Exploring AI tools and building useful, practical applications.",
    projects: ["DrawToWebAI", "AI Experiments"],
  },
  {
    id: "design",
    icon: "◈",
    title: "UI / UX Design",
    tools: "Wireframes · Prototypes · UI Design",
    level: "Creative Practice",
    color: "orange",
    description:
      "Designing clear, attractive and easy-to-use digital experiences.",
    projects: ["Portfolio Website"],
  },
  {
    id: "java",
    icon: "☕",
    title: "Java & Programming",
    tools: "Java · Programming Fundamentals",
    level: "Learning",
    color: "orange",
    description:
      "Strengthening programming fundamentals and logical thinking.",
    projects: ["Practice Programs"],
  },
  {
    id: "tools",
    icon: "⌘",
    title: "Tools & Workflow",
    tools: "Git · GitHub · VS Code",
    level: "Hands-on Practice",
    color: "cyan",
    description:
      "Using developer tools to organize code and manage projects.",
    projects: ["GitHub Projects"],
  },
];

const filters = [
  { label: "All Skills", value: "all" },
  { label: "Development", value: "web" },
  { label: "Data & SQL", value: "data" },
  { label: "AI & Python", value: "ai" },
  { label: "Design", value: "design" },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const visibleSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.id === activeFilter);

  function chooseFilter(value) {
    setActiveFilter(value);

    if (value !== "all") {
      const skill = skills.find((item) => item.id === value);
      if (skill) setSelectedSkill(skill);
    }
  }

  return (
    <section className="new-skills" id="skills">
      <div className="skills-heading">
        <span className="eyebrow">// MY TECH JOURNEY</span>

        <h2>
          My Skills,
          <br />
          My <span>Superpower.</span>
        </h2>

        <p>
          I learn, experiment and build with technology
          <br className="desktop-break" />
          to turn ideas into real-world solutions.
        </p>
      </div>

      <div className="skills-layout">
        <div className="skills-intro">
          <div className="workspace">
            <div className="floating-tech tech-react">⚛</div>
            <div className="floating-tech tech-js">JS</div>
            <div className="floating-tech tech-python">Py</div>
            <div className="floating-tech tech-sql">▤</div>

            <div className="laptop">
              <div className="laptop-screen">
                <span className="code-line long" />
                <span className="code-line medium" />
                <span className="code-line short" />
                <span className="code-line long" />
                <span className="code-symbol">&lt;/&gt;</span>
              </div>
              <div className="laptop-base" />
            </div>

            <div className="workspace-caption">
              <span className="status-dot" />
              LEARNING · BUILDING · GROWING
            </div>
          </div>

          <div className="learning-note">
            <span>My mindset</span>
            <h3>Small steps.</h3>
            <h3 className="gradient-text">Big dreams.</h3>
            <p>Every new skill is a chance to build something meaningful.</p>
          </div>
        </div>

        <div className="skills-content">
          <div className="skill-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={
                  activeFilter === filter.value ? "filter active" : "filter"
                }
                onClick={() => chooseFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="skill-grid">
            {visibleSkills.map((skill) => (
              <button
                type="button"
                key={skill.id}
                className={`skill-card ${skill.color} ${
                  selectedSkill.id === skill.id ? "selected" : ""
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-card-title">{skill.title}</span>
                <span className="skill-tools">{skill.tools}</span>
                <span className="skill-level">{skill.level}</span>
                <span className="skill-link">
                  Explore skill <span>↗</span>
                </span>
              </button>
            ))}
          </div>

          <div className="skill-spotlight" aria-live="polite">
            <div className="spotlight-top">
              <span className="eyebrow">// SKILL SPOTLIGHT</span>
              <span className="spotlight-icon">{selectedSkill.icon}</span>
            </div>

            <h3>{selectedSkill.title}</h3>
            <p>{selectedSkill.description}</p>

            <div className="spotlight-divider" />

            <span className="spotlight-label">TOOLS & TECHNOLOGIES</span>
            <p className="spotlight-tools">{selectedSkill.tools}</p>

            <span className="spotlight-label">RELATED PROJECTS</span>
            <div className="related-projects">
              {selectedSkill.projects.map((project) => (
                <a href="#projects" key={project}>
                  <span>{project}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
