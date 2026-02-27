// import { Button } from "@/components/Button";
import { Download, Linkedin, Github, Code2 } from "lucide-react";
// import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Highlights } from "../components/Highlights";


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="Hero">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* content */}
      <div className="container mx-auto px-6 md:px-20 pt-30 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left-section */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Software Developer Cum Engineer
              </span>
            </div>

{/* Headline */}
<div className="space-y-4">
  <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
    <div className="text-3xl md:text-3xl lg:text-4xl mb-1">Hi, I'm </div><span className="text-4xl lg:text-5xl text-primary">Shubham Shukla</span>
  </h1>

{/* Mobile short intro */}
<p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 md:hidden">
  Aspiring Software Engineer passionate about full-stack development,
  data structures, and problem solving. I enjoy building scalable web
  applications and continuously learning modern technologies to create
  real-world solutions.
</p>

  <p className="hidden md:block text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
  Hi, I'm an aspiring Software Engineer with strong
  interest in full-stack development, data structures and algorithm design.
  I enjoy building scalable applications, solving complex problems, and
  continuously learning new technologies to create real-world solutions.
</p>

</div>




            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              {/* <a href="#contact"><Button size="lg" className="cursor-pointer">
                Contact Me <ArrowRight className="w-5 h-5 inline-block" />
              </Button></a> */}
              <a href="/SWE_resume.pdf" className="inline-block" target="_blank">
                <button className=" relative px-8 py-4 rounded-full text-lg font-medium
        border-2 border-primary text-foreground
        transition-all duration-300
        hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
        hover:scale-105
        active:scale-95
        cursor-pointer">
                  <Download className="w-5 h-5 inline-block mr-2" />
                  See Resume
                </button>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/shubham07-dev" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-shukla-42b412308" },
                { icon: Code2, href: "https://leetcode.com/u/Shubham07-dev/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right section */}
          <div className="animate-fade-in animation-delay-500">
            <Highlights />
          </div>

        </div>
      </div>

    </section>
  )
}