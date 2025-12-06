import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Terminal, Code, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/40"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold text-primary flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          <span>Mahisha.QA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollToSection("#contact")} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-sm font-medium text-foreground hover:text-primary"
              >
                {link.name}
              </button>
            ))}
            <Button onClick={() => scrollToSection("#contact")} className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
