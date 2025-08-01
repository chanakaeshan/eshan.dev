import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      image: "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting features.",
      image: "/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Machine learning-powered content generation platform with multiple AI models and custom training capabilities.",
      image: "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
      technologies: ["Python", "FastAPI", "TensorFlow", "React", "Docker"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with interactive charts, data visualization, and automated reporting.",
      image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "Redis"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="container px-4 py-20 relative bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                    Featured Project
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                      <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                    <Button size="sm" className="button-gradient group/btn">
                      Live Demo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="outline" className="w-8 h-8 bg-black/50 border-white/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" className="w-8 h-8 button-gradient">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-muted-foreground text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/chanakaeshan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="group">
              View All Projects on GitHub
              <Github className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
