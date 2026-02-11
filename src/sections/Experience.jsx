export const Experience = () => {
  const experiences = [
    {
      period: "2025 — Present",
      role: "Problem solving mentor/intern - DSA(JAVA)",
      company: "Apna College",
      desc: "Participated in structured technical learning programs focused on DSA and web development. Engaged in problem-solving, peer discussions, and industry-oriented preparation, gaining exposure to real-world internship workflows and professional communication.",
      tech: "Data Structures & Algorithms, Web Development Fundamentals, Problem Solving",
      current: true,
    },
    {
      period: "Nov 2024 — Present",
      role: "Technical Lead",
      company: "Google Developer Groups on Campus (GDGC)",
      desc: "Leading technical initiatives, organizing workshops, mentoring students and guiding development projects.",
      tech: "Leadership, Mentoring, Workshops, Web Development",
      current: true,
    },


    {
      period: "Aug 2025 — Sep 2025",
      role: "Internship",
      company: "Era Foundation ,AKTU",
      desc: "Worked on real-world web development tasks, collaborated with team members and gained hands-on industry experience.",
      tech: "Web Development, Team Collaboration, Real-world Projects",
      current: false,
    },

    {
      period: "Dec 2024 — Sep 2025",
      role: "Web Developer",
      company: "Google Developer Groups on Campus (GDGC)",
      desc: "Built and maintained web projects, contributed to events and collaborated with the development team.",
      tech: "HTML, CSS, JavaScript, Team Collaboration",
      current: false,
    }
  ];

  return (
    <section id="experience" className="relative max-w-5xl mx-auto py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volume.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Work-front details of mine.
          </p>
        </div>

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-primary/40" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-16 group">
                {/* dot */}
                <div
                  className={`absolute left-[9px] top-6 w-4 h-4 rounded-full border-2
                  ${
                    exp.current
                      ? "bg-green-500 border-primary-500 shadow-[0_0_20px_#6366f1]"
                      : "bg-black border-indigo-400"
                  }`}
                />

                {/* card */}
                <div
                  className="rounded-2xl border border-primary/50 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h3 className="text-lg font-semibold text-primary font-serif">
                      {exp.role}
                    </h3>

                    <span className="text-sm text-gray">{exp.period}</span>
                  </div>

                  <p className="text-sm text-400 mt-1">{exp.company}</p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.split(",").map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
