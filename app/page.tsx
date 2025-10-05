import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import DemoReel from "@/components/DemoReel";
import Reveal from "@/components/Reveal";

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
    title: "Radio Interference Analyzer",
    description:
      "Designed a MATLAB dashboard paired with an Arduino-driven antenna that hunts down RF noise, then turns the raw signals into visuals classmates and faculty can actually use.",
    link: "#project-media",
    posterImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    techStack: ["MATLAB", "Arduino", "Serial Comms", "Data Viz"],
  },
  {
    title: "Portfolio Platform",
    description:
      "Rebuilt this portfolio with Next.js, TypeScript, and Tailwind CSS so every class project, research win, and leadership story has a polished home.",
    link: "#contact",
    posterImage: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Next.js", "TypeScript", "Tailwind", "UI Engineering"],
  },
];

const experienceThemes = [
  {
    title: "Research to impact",
    body: "Bridge research questions to shipping code by prototyping fast, validating with data, and handing teammates clear documentation.",
  },
  {
    title: "Design for people",
    body: "Lead with empathy by turning interviews, requirements, and responsive layouts into products where classmates and stakeholders see themselves.",
  },
  {
    title: "Keep teams calm",
    body: "Keep cross-functional teams moving by balancing priorities, setting expectations, and staying calm-whether in a research lab or a rush-hour kitchen.",
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
  gpa: "3.4 GPA",
  coursework: [
    "Embedded Systems Analysis and Design",
    "Object-Oriented Development",
    "User Interaction Engineering",
  ],
};

const vibeNotes = [
  {
    title: "Builder mindset",
    body: "I love taking fuzzy ideas and giving them structure. Sketchbooks, whiteboards, and Figma files are usually open right next to my IDE.",
  },
  {
    title: "People-first collaborator",
    body: "Whether I am pair programming or running a pizza rush, I keep the vibe positive, communicate openly, and make sure everyone has what they need.",
  },
  {
    title: "Always experimenting",
    body: "I tinker with new APIs, automation scripts, and hardware projects so the next team I join gets fresh ideas and reusable tooling.",
  },
];

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

        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          {experienceThemes.map((theme, index) => (
            <Reveal
              key={theme.title}
              direction={index % 2 === 0 ? "up" : "down"}
              delay={index * 120}
              className="info-card experience-card text-center space-y-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/90">{theme.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{theme.body}</p>
            </Reveal>
          ))}
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

      <section id="about" className="section-shell snap-section section-shell--pattern">
        <Reveal direction="up" className="section-header">
          <span className="section-header__eyebrow">A GLIMPSE AT MY VIBE</span>
          <h2 className="section-header__title">The fuel behind the work</h2>
          <p className="section-header__lead">
            Code is better when the humans building it feel energized. Here is how I stay curious, collaborative, and ready to ship.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {vibeNotes.map((note, index) => (
            <Reveal
              key={note.title}
              direction={index % 2 === 0 ? "up" : "down"}
              delay={index * 120}
              className="info-card info-card--accent vibe-card text-center space-y-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/90">{note.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300/90">{note.body}
            </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="section-shell snap-section section-shell--pattern">
        <Reveal direction="up" className="section-header">
          <span className="section-header__eyebrow">OBJECTIVE</span>
          <h2 className="section-header__title">Looking for a software engineering position.</h2>
          <p className="section-header__lead">
            I am ready to plug into a team that values user-centered thinking, clean code, and collaborative problem solving. Coursework and research gave me a strong base, but my curiosity and willingness to learn fast will keep the momentum going.
          </p>
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

      <Reveal direction="up">
        <DemoReel />
      </Reveal>

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
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">Email</span>
                <a href="mailto:turner.walker79@gmail.com" className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200">
                  turner.walker79@gmail.com
                </a>
              </li>
              <li className="space-y-1 border-t border-slate-800/60 pt-4">
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">Phone</span>
                <a href="tel:16789726330" className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200">
                  678-972-6330
                </a>
              </li>
              <li className="space-y-1 border-t border-slate-800/60 pt-4">
                <span className="block uppercase tracking-[0.26em] text-slate-400/80">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/william-walker-597765297"
                  className="text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  william-walker-597765297
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
