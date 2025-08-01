import { Github, Twitter, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-medium text-lg">Eshan.dev</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Full-stack software engineer crafting exceptional digital experiences with modern technologies.
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://github.com/chanakaeshan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/chanakaeshan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>

                <a
                  href="https://twitter.com/chanakaeshan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </a>

                <a href="mailto:chanueshan291@gmail.com">
                  <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary">
                    <Mail className="w-4 h-4" />
                  </Button>
                </a>
              </div>

            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Code Review
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:alex.johnson@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    chanueshan291@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +94 71 606 6120
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    Colombo, Sri Lanka
                  </span>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary">Available for hire</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Chanaka Eshan All rights reserved.
                {/* using React & TypeScript. */}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Last updated: {new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>Version 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;