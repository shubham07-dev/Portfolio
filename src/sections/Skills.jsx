import {
  Code2,
  Globe,
  Database,
  Server,
  Cpu,
  GitBranch,
} from "lucide-react";

/* Desktop category cards */
const skillsData = [
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React","Tailwind", "JavaScript", "HTML","CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    icon: GitBranch,
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"," AI-Tools"],
  },
  {
    icon: Cpu,
    title: "CS Fundamentals",
    skills: ["DSA", "OOPS", "OS","DBMS",],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript", "Java", "C","Python"],
  },
];

/* Mobile combined skills */
const allSkills = [
  "React","Tailwind","JavaScript",
  "Node.js","Express","REST APIs","Authentication",
  "MongoDB","MySQL",
  "Git","GitHub","Postman","VS Code",
  "DSA","OOP","OS",
  "Java","C++"
];

export const Skills = () => {
  return (
    <section id="Skills" className="py-24 relative">
      <div className="container mx-auto px-2">
        
        {/* Heading */}
<div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-bold glow-text">
    Skills
  </h2>
  <p className="text-muted-foreground font-bold mt-4">
   Technologies and tools I work with.
  </p>
</div>


        {/* ================= MOBILE VIEW ================= */}
        {/* All skills merged into one cloud */}
        <div className="lg:hidden flex flex-wrap justify-center gap-3">
          {allSkills.map((skill, i) => (
            <span
              key={i}
              className="
                px-4 py-2 rounded-full text-sm
                bg-primary/10 text-primary
                border border-primary/50
                backdrop-blur-md
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        {/* Category cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="
                p-6 rounded-3xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
              "
            >
              {/* Icon */}
              <category.icon className="w-10 h-10 text-primary mb-4" />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-primary/10 text-primary
                      border border-primary/20
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
