import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "About", href: "#about", onClick: () => scrollToSection('about') },
    { name: "Portfolio", href: "#portfolio", onClick: () => scrollToSection('portfolio') },
    { name: "Experience", href: "#experience", onClick: () => scrollToSection('experience') },
    // { name: "Blog", href: "#blog", onClick: () => scrollToSection('blog') },
    // { name: "Contact", href: "#contact", onClick: () => scrollToSection('contact') },
    { name: "Memories", href: "https://memories-clothing.vercel.app/", onClick: () => window.open("https://memories-clothing.vercel.app/", "_blank") },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl" 
          // : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl"
          : "h-14 bg-[#000000] w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          

          <div className="flex items-center gap-2">
            {/* <Command className="w-5 h-5 text-primary" /> */}
            <a href="/" className="font-bold text-base">
              Esh🐬
            </a>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="button-gradient"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Navigation */}
          {/* Mobile Navigation */}
<div className="md:hidden">
  <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="glass">
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent 
      side="left" 
      className="bg-[#1B1B1B] text-white w-full h-full p-6 flex flex-col"
    >
      {/* Close Button */}
      <div className="flex justify-end mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </Button>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xl font-medium text-muted-foreground hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              if (item.onClick) item.onClick();
            }}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <Button 
        onClick={() => {
          setIsMobileMenuOpen(false);
          scrollToSection("contact");
        }}
        className="button-gradient mt-6 w-full py-6 text-lg"
      >
        Get In Touch
      </Button>
    </SheetContent>
  </Sheet>
</div>

        </nav>
      </div>
    </header>
  );
};

export default Navigation;