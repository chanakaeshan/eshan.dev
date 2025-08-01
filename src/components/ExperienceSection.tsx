import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Residue Solution Pvt Ltd.",
      location: "Colombo, Sri Lanka",
      duration: "Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 1M+ daily active users",
        "Mentored junior developers and established code review best practices",
        "Reduced system latency by 40% through performance optimization initiatives",
        "Collaborated with product team to define technical requirements and roadmap"
      ],
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Detz Global Pvt Ltd.",
      location: "USA (Remote)",
      duration: "Present",
      type: "Full-time",
      description: [
        "Built and deployed scalable web applications from concept to production",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Developed RESTful APIs and integrated third-party services",
        "Participated in agile development process with cross-functional teams"
      ],
      technologies: ["Vue.js", "Python", "Docker", "MongoDB", "Redis"]
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Freelancer",
      location: "Remote",
      duration: "2021 - Present",
      type: "Contract",
      description: [
        "Developed custom web applications for enterprise clients",
        "Optimized database queries improving application performance by 35%",
        "Integrated payment systems and implemented security best practices",
        "Provided technical consultation and code architecture recommendations"
      ],
      technologies: ["Angular", "C#", ".NET Core", "SQL Server", "Azure"]
    },
 
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="container px-4 py-20 relative bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies, building scalable solutions and growing as a developer
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-black z-10 hidden md:block" />
                
                <div className="md:ml-16 glass rounded-xl p-6 group hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-primary">•</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Interested in my full background?</h3>
            <p className="text-muted-foreground mb-6">
              Download my resume for a comprehensive overview of my experience, education, and achievements.
            </p>
            <button className="button-gradient px-6 py-3 rounded-full font-medium transition-opacity hover:opacity-90">
              Download Resume (PDF)
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;