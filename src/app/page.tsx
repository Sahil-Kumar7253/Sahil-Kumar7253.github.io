import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, ArrowUpRight, Sparkles, Layout, Server, Code2, Database, Wrench, Container } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';

const skillGroups = [
  {
    label: 'Frontend & Mobile',
    icon: 'layout',
    skills: ['Flutter', 'Dart', 'React', 'Next.js', 'Kotlin', 'Jetpack Compose'],
  },
  {
    label: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'Firebase', 'Supabase', 'Socket.IO'],
  },
  {
    label: 'Databases',
    icon: 'database',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    label: 'Languages & Tools',
    icon: 'code',
    skills: ['C++', 'Java', 'Python', 'Docker', 'Postman', 'Android Studio'],
  },
];

const groupIcons: Record<string, React.ReactNode> = {
  layout: <Layout size={16} className="text-indigo-500" />,
  server: <Server size={16} className="text-teal-500" />,
  database: <Database size={16} className="text-rose-500" />,
  code: <Code2 size={16} className="text-amber-500" />,
};

const projects = [
  {
    title: 'Convo Chat App',
    description:
      'Real-time chat application with JWT authentication, Socket.IO messaging, and Cloudinary image storage.',
    tech: ['Flutter', 'Node.js', 'Socket.IO', 'MongoDB'],
    link: '#',
  },
  {
    title: 'ECommerce Suite',
    description:
      'Full-stack mobile app with role-based admin panel, real-time product sync, and analytics dashboard.',
    tech: ['Flutter', 'Firebase', 'Firestore'],
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold tracking-tight gradient-text">SK</span>
          <div className="flex gap-8 text-sm font-medium text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-stone-900 transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-stone-900 transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="about" className="hero-bg relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-28 lg:py-36">
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="animate-fade-in-up flex items-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full px-4 py-1.5 w-fit">
                <Sparkles size={14} />
                Open to opportunities
              </div>

              <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Hi, I&apos;m{' '}
                <span className="gradient-text">Sahil Kumar</span>
              </h1>

              <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-stone-500 max-w-xl leading-relaxed">
                Software Developer building scalable, user-focused apps with Flutter and full-stack technologies.
              </p>

              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 pt-2">
                <a
                  href="mailto:sahilku76439@gmail.com"
                  className="group inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20"
                >
                  <Mail size={16} />
                  Get in Touch
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <div className="flex gap-3 items-center">
                  <a
                    href="https://github.com/Sahil-Kumar7253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-stone-300 text-stone-500 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-sm transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sahil-kumar-59b3b428a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-stone-300 text-stone-500 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-sm transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full opacity-30 blur-3xl animate-float" />
            <div className="absolute bottom-10 right-40 w-48 h-48 bg-teal-200 rounded-full opacity-30 blur-3xl animate-float delay-200" />
            <div className="absolute top-40 right-60 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-3xl animate-float delay-400" />
          </div>
        </section>

        <div className="section-divider" />

        {/* Education */}
        <section className="section-warm py-24">
          <ScrollReveal>
          <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-teal-50 rounded-lg">
              <BookOpen size={20} className="text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <ScrollReveal delay={150} direction="up">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-bold text-lg">Army Institute of Technology, Pune</h3>
                <p className="text-stone-500">B.E. in Information Technology</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-stone-400">2023 — 2027</span>
                <p className="text-indigo-600 font-bold text-lg">9.00 CGPA</p>
              </div>
            </div>
          </div>
          </ScrollReveal>
          </div>
          </ScrollReveal>
        </section>

        <div className="section-divider" />

        {/* Projects */}
        <section id="projects" className="section-cream py-24">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold">Projects</h2>
            </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 150} direction="up">
                <a
                  href={project.link}
                  className="group glass-card bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block border-stone-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={18}
                      className="text-stone-300 group-hover:text-indigo-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold tracking-wide bg-stone-100 text-stone-600 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Skills */}
        <section id="skills" className="section-sand py-24">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
            <h2 className="text-2xl font-bold mb-12">Tech Stack</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.label} delay={i * 120} direction="up">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    {groupIcons[group.icon]}
                    <span className="skill-category-label">{group.label}</span>
                  </div>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group bg-white rounded-xl px-4 py-3 border border-stone-200 shadow-sm hover:shadow-md hover:border-indigo-300 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        <span className="text-sm font-semibold text-stone-700 group-hover:text-indigo-600 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact CTA */}
        <section id="contact" className="section-warm py-24 text-center">
          <ScrollReveal direction="up">
          <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s work together</h2>
          <p className="text-stone-500 mb-8 max-w-md mx-auto">
            Have a project in mind or just want to connect? I&apos;d love to hear from you.
          </p>
          <ScrollReveal delay={200} direction="up">
          <a
            href="mailto:sahilku76439@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/25"
          >
            <Mail size={16} />
            Say Hello
          </a>
          </ScrollReveal>
          </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>Sahil Kumar</p>
          <div className="flex gap-6">
            <a href="https://github.com/Sahil-Kumar7253" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sahil-kumar-59b3b428a/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
            <a href="mailto:sahilku76439@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}