import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Yatra-Nest",
    description:
      "An room booking platform with map integration, secure payments, and real-time availability management.",
    image: "/projects/project1.png",
    tags: ["Express js", "Node.js", "MongoDB", "Mapbox","Cloudinary"],
    link: "https://yatra-nest-l0i1.onrender.com/listing",
    github: "https://github.com/shubham07-dev/Yatra-Nest",
  },
  {
  title: "Alpha World",
  description:
    "An interactive learning website designed for kindergarten children to learn ABCs, numbers, and basic concepts through fun activities and quizzes. The platform also provides a certificate after course completion.",
  image: "/projects/project2.png",
  tags: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/shubham07-dev/alpha-world-2.0",
  github: "https://github.com/shubham07-dev/alpha-world-2.0",
},
  {
    title: "Weather App",
    description:
      "A real-time weather forecasting app using external APIs to display location-based weather data and forecasts.",
    image: "/projects/project3.png",
    tags: ["React", "OpenWeather API","Java Script"],
    link: "https://shubham07-dev.github.io/Weather-App_React/",
    github: "https://github.com/shubham07-dev/Weather-App_React",
  },
  {
    title: "Simon Game",
    description:
      "A fun memory-based browser game inspired by the classic Simon game, built using JavaScript and DOM manipulation.",
    image: "/projects/project4.png",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://shubham07-dev.github.io/Simon-Game/",
    github: "https://github.com/shubham07-dev/Simon-Game",
  },
];


export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-20 mx-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-25 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-7 h-7 inline-block ml-2" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};