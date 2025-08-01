import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Frontend Development", icon: Globe, level: 95 },
    { name: "Backend Development", icon: Database, level: 90 },
    { name: "Mobile Development", icon: Smartphone, level: 85 },
    { name: "System Architecture", icon: Code2, level: 88 },
  ];

  const technologies = [
    "Java","C#","Node.js","React", "TypeScript", "Node.js", "Next.js", "Python","MongoDB", "PostgreSQL", "AWS", 
    "Docker", "Kubernetes", "GraphQL", "Next.js", "React Native", "Go"
  ];

  return (
    <section id="about" className="container px-4 py-20 relative bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer with 1+ year of experience building scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                Started as a curious computer science student, I've evolved into a full-stack engineer 
                who loves solving complex problems and building user-centric applications. My passion 
                lies in creating efficient, scalable solutions that make a real impact.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me contributing to open source projects, writing 
                technical blogs, or exploring the latest technologies. I believe in continuous learning 
                and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-primary to-[#22c55e] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Professional Headshot Placeholder */}
            <div className="glass rounded-xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-[#22c55e]/20 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*syVB660Cf7VgKKUttY8u4Q.png" // Updated profile image URL
                      alt="Chanaka Eshan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Chanaka Eshan</h3>
                  <p className="text-muted-foreground">Software & AI/ML Engineer</p>
                  <p className="text-sm text-muted-foreground mt-2">Katunayake, Sri Lanka</p>
                </div>


            {/* Technologies */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;