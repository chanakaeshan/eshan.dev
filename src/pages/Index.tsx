import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import TechStack from "@/components/TechStack";
import Technologies from "@/components/Technologies";
import { PricingSection } from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Destinations from "@/components/Destinations";

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[##000000]" />
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full inline-block mr-3 animate-pulse" />
            Available for hire
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight text-left leading-tight">
            <span className="text-gray-200">
              <TextGenerateEffect words="I'm Chanaka Eshan" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Software & AI/ML Engineer." />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left leading-relaxed"
          >
            I craft exceptional digital experiences through clean code and innovative solutions.{" "}
            <span className="text-white">Specialized in Java, React, Node.js, Python and cloud architecture.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-12"
          >
            <a href="#contact">
              <Button size="lg" className="button-gradient group">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a
               href="https://drive.google.com/uc?export=download&id=1A2B3C4D5E6F7G8H9"
                target="_blank"
                rel="noopener noreferrer"
                download
            >
              <Button size="lg" variant="outline" className="glass group">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/chanakaeshan", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/chanakaeshan/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:chanueshan291@gmail.com", label: "Email" }, // use mailto for email
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}

          </motion.div>
        </div>

        {/* Featured Work Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden group">
            <div className="relative">
              <img
                src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
                alt="Featured Project - Dashboard Interface"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Featured Project | E-Commerce Platform</h3>
                <p className="text-gray-200 text-sm">Full-stack application with real-time features</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Tech Stack */}
      <TechStack />

      {/* About Section */}
      <AboutSection />

      {/* Technologies */}
      <Technologies />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      <Destinations />

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start work with me?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Custormers who have already discovered the power of our work.
          </p>
          <Button onClick={() => scrollToSection('contact')} size="lg" className="button-gradient">
            Connect with me
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
