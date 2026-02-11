import { Github, Linkedin, ArrowUp, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="container mx-auto px-6 py-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Name */}
          <div className="text-lg font-semibold">
            SHUBHAM SHUKLA <span className="text-primary">.</span>
          </div>

          {/* Social icons */}
          <div className=" flex gap-4 relative md:right-10">
             <a
              href="https://leetcode.com/u/Shubham07-dev/" target="_blank"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition"
            >
              <Code2 size={20} />
            </a>
            <a
              href="https://github.com/shubham07-dev" target="_blank"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-shukla-42b412308" target="_blank"
              className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition"
            >
              <Linkedin size={20} />
            </a>
            
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>

        {/* Bottom row */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} Shubham Shukla. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
