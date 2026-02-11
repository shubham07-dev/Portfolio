import { Code2, Rocket, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold glow-text">
            About Me
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A short introduction about who I am and what I love building.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software engineer focused on building
              modern, scalable, and user-friendly web applications.
              I enjoy turning complex problems into simple and beautiful
              solutions using modern technologies.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with curiosity about how websites work,
              and today I specialize in React, Next.js and full-stack
              development. I love learning new technologies and continuously
              improving my craft.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring tech, learning
              system design, and building side projects.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
              <Code2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable and scalable code is my priority.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition">
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">
                I love optimizing apps for speed and great UX.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition sm:col-span-2">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Passion for Tech</h3>
              <p className="text-sm text-muted-foreground">
                Always learning, building, and exploring new technologies.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
