import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#Hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#Skills", label: "Skills" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 py-5 z-50
        transition-all duration-300
        
        ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition"
        >
         S<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <a href="#contact" className="hidden md:block cursor-pointer">
           <Button size="sm" className="cursor-pointer">Contact Me</Button>
</a>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="container mx-auto px-6 py-6 flex flex-col gap-4"><Button>Contact Me</Button></a>
          </div>
        </div>
      )}
    </header>
  );
};
