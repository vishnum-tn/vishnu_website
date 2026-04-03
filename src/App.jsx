import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Server,
  Sparkles
} from "lucide-react";

const skills = [
  { name: "Python", level: 82, icon: Code2 },
  { name: "Java (Backend Basics)", level: 68, icon: Server },
  { name: "HTML / CSS / JavaScript", level: 86, icon: Code2 },
  { name: "AI Tools / Gen AI Basics", level: 74, icon: Brain }
];

const projects = [
  {
    title: "Snake Game (Python)",
    desc: "A classic snake game built to practice game loops, collision logic, and score tracking.",
    tech: ["Python", "Pygame"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Chatbot Project",
    desc: "A beginner-friendly chatbot with intent-based responses and a clean chat UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Future Project",
    desc: "Coming Soon: A serious AI-powered product focused on solving a real-world user problem.",
    tech: ["Gen AI", "React", "API"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

const journey = [
  { title: "Started Coding", detail: "Began with basics of programming and web development." },
  { title: "Built First Project", detail: "Created simple projects that turned theory into practical skills." },
  { title: "Exploring AI", detail: "Learning AI tools, prompting, and fundamentals of intelligent systems." },
  { title: "Building Future", detail: "Focused on consistency and aiming for world-class engineering impact." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" }
  }
};

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-12"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-slate-300">{subtitle}</p>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
          >
            <motion.div
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3"
              initial={{ scale: 0.9, opacity: 0.75 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
            >
              <Sparkles className="h-5 w-5 text-accent" />
              <p className="text-sm tracking-[0.18em] text-slate-200">LOADING PORTFOLIO</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 z-0 bg-hero-radial" />
      <div className="pointer-events-none fixed inset-0 z-0 grid-glow opacity-50" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-surface/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-lg font-semibold text-white">
            Vishnu
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#journey" className="transition hover:text-white">Journey</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto flex min-h-[92vh] w-full max-w-6xl items-center px-5 pb-20 pt-20 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
              <GraduationCap className="h-4 w-4" /> Student Developer | AI Enthusiast
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-7xl">
              I build my future
              <br />
              <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">with code.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              I am at the beginning of my journey as a developer, focused on mastering fundamentals, building real projects,
              and growing toward a future where I create technology that matters.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Contact Me <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="About"
            title="Beginner mindset, long-term ambition."
            subtitle="I started from scratch, learning one concept at a time and turning lessons into projects. My target is clear: build the discipline and skill depth to perform at top product companies and beyond."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-panel/80 p-8 shadow-glow"
          >
            <p className="text-slate-300 leading-relaxed">
              Consistency is my edge. I show up daily, improve step by step, and focus on growth over shortcuts. I am not just learning to code;
              I am learning how to think, solve problems, and build products with real impact.
            </p>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Core tools I am growing with"
            subtitle="A practical mix of programming, web foundations, and AI basics."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-panel/80 p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <skill.icon className="h-5 w-5 text-accent" />
                    <p className="font-medium text-white">{skill.name}</p>
                  </div>
                  <span className="text-sm text-slate-300">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Proof of learning in action"
            subtitle="Hands-on projects that demonstrate consistency, curiosity, and practical execution."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-panel/80 p-6 transition hover:border-accent/50 hover:shadow-glow"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/35 hover:text-white"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-900 transition hover:bg-slate-100"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Journey"
            title="From first line of code to long-term mission"
            subtitle="Milestones that define my growth path in technology."
          />
          <div className="relative ml-3 border-l border-white/15 pl-8 md:ml-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                className="relative mb-10"
              >
                <span className="absolute -left-[39px] mt-1 block h-3 w-3 rounded-full bg-gradient-to-r from-accent to-accent2" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let us build something meaningful"
            subtitle="Open to internships, collaboration, and conversations around technology and AI."
          />
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4 rounded-2xl border border-white/10 bg-panel/80 p-6"
            >
              <label className="block text-sm text-slate-200">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
                />
              </label>
              <label className="block text-sm text-slate-200">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
                />
              </label>
              <label className="block text-sm text-slate-200">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell me about your idea"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Send Message <Mail className="h-4 w-4" />
              </button>
            </motion.form>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-panel/80 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Social</p>
              <div className="mt-5 space-y-3">
                <a
                  href="https://www.linkedin.com/in/vishnumsofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-slate-200 transition hover:border-accent/50 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-slate-200 transition hover:border-accent/50 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-slate-200 transition hover:border-accent/50 hover:text-white"
                >
                  <span className="inline-flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        Started from zero. Building towards infinity.
      </footer>
    </div>
  );
}
