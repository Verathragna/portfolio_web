import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import DemoReel from "@/components/DemoReel";
import Reveal from "@/components/Reveal";
import {
  PROFILE_EMAIL,
  PROFILE_LINKEDIN,
  PROFILE_GITHUB_REPOS,
  PROFILE_NAME,
  PROFILE_PHONE_DISPLAY,
  PROFILE_PHONE_TEL,
} from "@/content/profile";

type Strength = {
  title: string;
  description: string;
  bullets: string[];
};

type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
};

const projects = [
  {
    title: "House Blueprint Generator",
    description:
      "Transformer-powered pipeline that turns structured property specs into full floor plans, complete with synthetic data generation, automated training, and Dockerized FastAPI + React clients for requesting SVG/JSON blueprints.",
    link: PROFILE_GITHUB_REPOS,
    videoSrc: "/videos/Blueprint_Gen_Demo.mp4",
    techStack: ["Python", "FastAPI", "Transformers", "React", "Docker", "Redis"],
  },
  {
    title: "Hydrate & Stretch Companion",
    description:
      "Electron desktop assistant that keeps remote teams healthy with dual hydration and stretch timers, weekday-aware schedules, and an Electron context bridge so React preferences stay in sync with native notifications and auto-start settings.",
    link: PROFILE_GITHUB_REPOS,
    posterImage: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React", "TypeScript", "Electron", "Vite", "ContextBridge", "ESLint"],
  },
  {
    title: "The Plumbing Lady",
    description:
      "Responsive React + TypeScript site for a woman-owned plumbing business in Newnan, GA, featuring service landing pages, EmailJS lead capture, animated testimonials, and teal-accent Tailwind styling tuned for mobile-first conversions.",
    link: PROFILE_GITHUB_REPOS,
    videoSrc: "/videos/Plumb_Demo.mp4",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "EmailJS"],
  },
];

const experiences: Experience[] = [
  {
    period: "Aug 2024 - Feb 2025",
    role: "Student Research Assistant",
    organization: "Kennesaw State University",
    location: "Marietta, GA",
    summary:
      "Developed MATLAB tooling to detect radio frequency interference, programmed a 360 degree antenna in Arduino IDE, and strengthened serial communication reliability for research use.",
  },
  {
    period: "Dec 2019 - Jul 2023",
    role: "Assistant Manager",
    organization: "Your Pie",
    location: "Griffin, GA",
    summary:
      "Coordinated a 20 person team each shift, delivered high-volume customer service, and handled $1K+ transactions accurately while training new hires on in-house software.",
  },
];

const education = {
  school: "Kennesaw State University",
  degree: "B.S. Software Engineering",
  location: "Marietta, GA",
  graduation: "Expected Dec 2025",
  gpa: "3.4",
  coursework: [
    "Embedded Systems Analysis and Design",
    "Object-Oriented Development",
    "User Interaction Engineering",
  ],
};

const strengths: Strength[] = [
  {
    title: "Front-end foundations",
    description: "Craft accessible, responsive interfaces with clear user flows and component-driven thinking.",
    bullets: [
      "Translate requirements into wireframes and prototypes",
      "Implement layouts with semantic HTML and modern CSS",
      "Iterate quickly based on usability feedback",
    ],
  },
  {
    title: "Back-end and data",
    description: "Comfortable working with data models, SQL queries, and validating inputs to keep applications reliable.",
    bullets: [
      "Design relational schemas for class and capstone work",
      "Write SQL queries and stored procedures in Microsoft SQL Server",
      "Apply object-oriented principles to Java and Python projects",
    ],
  },
  {
    title: "Hardware and systems",
    description: "Blend software with physical components through embedded coursework and lab projects.",
    bullets: [
      "Program Arduino based prototypes and debug serial comms",
      "Automate testing and data capture in MATLAB",
      "Document hardware setups for reproducible results",
    ],
  },
];

const buzzwords = [
  "System design",
  "Distributed systems",
  "Microservices",
  "API architecture",
  "Domain-driven design",
  "Test automation",
  "CI/CD pipelines",
  "Observability",
  "Edge computing",
  "Cloud-native",
  "Event-driven",
  "Data modeling",
  "Security by design",
  "Performance optimization",
  "DevOps culture",
];

const languages = ["SQL", "Java", "Python", "Rust", "HTML", "CSS", "JavaScript" ];

const toolkit = [
  "Java",
  "Python",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "MATLAB",
  "Arduino IDE",
  "Microsoft SQL Server",
  "Git",
  "IntelliJ IDEA",
  "PyCharm",
  "User Centered Design",
  "Responsive Layouts",
];

export default function HomePage() {
  return (
    <div className="space-y-24 lg:space-y-32">
      <Reveal direction="up">
        <HeroSection />
      </Reveal>

      <section id="projects" className="section-shell snap-section section-shell--alt section-shell--pattern">
        <div className="section-header">
          <span className="section-header__eyebrow">PROJECT WORK</span>
          <h2 className="section-header__title">Hands-on builds outside the classroom</h2>
          <p className="section-header__lead">
            A peek at the experiments keeping my skills sharp, from signal analysis to slick UI builds, with plenty of teamwork woven in.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto justify-items-center">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 140}
              className="w-full max-w-md"
            >
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell snap-section section-shell--contrast section-shell--pattern">
        <div className="section-header">
          <span className="section-header__eyebrow">EXPERIENCE</span>
          <h2 className="section-header__title">From research labs to pizza lines</h2>
          <p className="section-header__lead">
            From studios to research labs, I jump in with classmates, faculty, and fast-moving teams to steer ideas from a question on the board to something you can actually click. Every role levels up my communication, planning, and debugging instincts.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto justify-items-center">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.role}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 150}
              className="w-full max-w-md info-card experience-tile text-center space-y-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                {experience.period} - {experience.location}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-100">{experience.role}</p>
              <p className="text-sm text-slate-400/80">{experience.organization}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">{experience.summary}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          direction="up"
          delay={180}
          className="mt-12 mx-auto max-w-xl info-card experience-tile text-center space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400/80">Education snapshot</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300/90">
            <p className="text-base font-semibold text-slate-100">{education.degree}</p>
            <p>
              {education.school} - {education.location}
            </p>
            <p>{education.graduation}</p>
            <p>{education.gpa}</p>
            <p className="pt-2 text-xs uppercase tracking-[0.28em] text-slate-400/80">Coursework</p>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-slate-300/80">
              {education.coursework.map((course) => (
                <li key={course} className="course-chip">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <Reveal direction="up">
        <DemoReel />
      </Reveal>

      <section id="education" className="section-shell snap-section section-shell--pattern">
        <Reveal direction="up" className="section-header">
          <span className="section-header__eyebrow">OBJECTIVE</span>
          <h2 className="section-header__title">Looking for a software engineering position.</h2>
          <p className="section-header__lead">
            I am ready to plug into a team that values user-centered thinking, clean code, and collaborative problem solving. Coursework and research gave me a strong base, but my curiosity and willingness to learn fast will keep the momentum going.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              className="btn-primary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
              <span aria-hidden="true">-&gt;</span>
            </a>
            <span className="text-sm text-slate-400/85">
              &nbsp;&nbsp;&nbsp;- last updated October 2025
            </span>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="section-shell snap-section section-shell--alt section-shell--pattern">
        <div className="section-header">
          <span className="section-header__eyebrow">SKILLS AND STRENGTHS</span>
          <h2 className="section-header__title">How I contribute on a team</h2>
          <p className="section-header__lead">
            Mixing classroom lessons with real-world tinkering so I can contribute across UI polish, backend reliability, and hardware integrations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              direction={index % 2 === 0 ? "up" : "down"}
              delay={index * 120}
              className="info-card skill-card text-center space-y-4"
            >
              <h3 className="text-lg font-semibold text-slate-50">{strength.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400/90">{strength.description}</p>
              <ul className="flex flex-wrap justify-center gap-2 text-sm text-slate-300/80">
                {strength.bullets.map((item) => (
                  <li key={item} className="skill-point">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={120} className="mt-12 mx-auto max-w-4xl info-card skill-card text-center space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400/90">Languages I use</p>
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <span key={lang} className="tool-pill">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="accent-divider" />

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400/90">Engineering buzzwords that guide my work</p>
            <div className="flex flex-wrap justify-center gap-2">
              {buzzwords.map((word) => (
                <span key={word} className="tool-pill">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="accent-divider" />

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400/90">Toolkit</p>
            <div className="flex flex-wrap justify-center gap-2">
              {toolkit.map((tool) => (
                <span key={tool} className="tool-pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <section id="contact" className="section-shell snap-section section-shell--contrast section-shell--pattern">
        <Reveal direction="up" className="flex flex-col items-center gap-10 text-center">
          <div className="max-w-xl space-y-5">
            <span className="tag-pill bg-slate-900/60 text-slate-200/80">LET'S CONNECT</span>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Have a software engineering role or project in mind?
            </h2>
            <p className="text-lg text-slate-300/90 leading-relaxed">
              Tell me about the team, stack, or side quest you are excited about. I will bring curiosity, clear communication, and playlists to keep momentum high.
            </p>
          </div>

          <div className="w-full max-w-md info-card text-center">
            <ul className="space-y-4 text-sm text-slate-300/90">
              <li className="space-y-1">
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">Email&nbsp;</span>
                <a href={`mailto:${PROFILE_EMAIL}`} className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200">
                  {PROFILE_EMAIL}
                </a>
              </li>
              <li className="space-y-1 border-t border-slate-800/60 pt-4">
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">Phone&nbsp;</span>
                <a href={`tel:${PROFILE_PHONE_TEL}`} className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200">
                  {PROFILE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="space-y-1 border-t border-slate-800/60 pt-4">
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">LinkedIn&nbsp;</span>
                <a
                  href={PROFILE_LINKEDIN}
                  className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PROFILE_LINKEDIN.replace(/^https?:\/\//, "")}
                </a>
              </li>
              <li className="space-y-1 border-t border-slate-800/60 pt-4">
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">GitHub&nbsp;</span>
                <a
                  href={PROFILE_GITHUB_REPOS}
                  className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PROFILE_GITHUB_REPOS.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
