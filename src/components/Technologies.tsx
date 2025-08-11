import { motion } from "framer-motion";

const TechStack = () => {
  const logos = [
    { name: "React", url: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", url: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express", url: "https://skillicons.dev/icons?i=express" },
    { name: "Python", url: "https://skillicons.dev/icons?i=python" },
    { name: "Java", url: "https://skillicons.dev/icons?i=java" },
    { name: "JavaScript", url: "https://skillicons.dev/icons?i=js" },
    { name: "Docker", url: "https://skillicons.dev/icons?i=docker" },
    { name: "Git", url: "https://skillicons.dev/icons?i=git" },
    { name: "Kubernetes", url: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "AWS", url: "https://skillicons.dev/icons?i=aws" },
    { name: "Azure", url: "https://skillicons.dev/icons?i=azure" },
    { name: "Google Cloud", url: "https://skillicons.dev/icons?i=gcp" },
    { name: "Postman", url: "https://skillicons.dev/icons?i=postman" },
    { name: "Figma", url: "https://skillicons.dev/icons?i=figma" },
    { name: "Tailwind CSS", url: "https://skillicons.dev/icons?i=tailwind" },
    { name: "PostgreSQL", url: "https://skillicons.dev/icons?i=postgres" },
    { name: "Next.js", url: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Android Studio", url: "https://skillicons.dev/icons?i=androidstudio" },
    { name: "Flutter", url: "https://skillicons.dev/icons?i=flutter" },
    { name: "TypeScript", url: "https://skillicons.dev/icons?i=ts" },
    { name: "C++", url: "https://skillicons.dev/icons?i=cpp" },
    { name: "PHP", url: "https://skillicons.dev/icons?i=php" },
    { name: "MongoDB", url: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Firebase", url: "https://skillicons.dev/icons?i=firebase" }
  ];

  // Repeat logos to create a seamless scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-4xl font-semibold mb- text-center">
    <span className="text-green-400">Technologies</span> I work with
    </h3>
  <div className="flex flex-wrap gap-3 justify-center"></div>
  <div className="w-full overflow-hidden py-8 mt-8">
    <motion.div
      className="flex space-x-16"
      initial={{ opacity: 0, x: "0%" }}
      animate={{
        opacity: 1,
        x: "-30%",
      }}
      transition={{
        opacity: { duration: 0.5 },
        x: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5,
        },
      }}
      style={{
        width: "fit-content",
        display: "flex",
        gap: "1rem",
      }}
    >
      {extendedLogos.map((logo, index) => (
        <motion.img
          key={`logo-${index}`}
          src={logo.url}
          alt={`${logo.name} logo`}
          title={logo.name}
          className="h-10 w-10 object-contain"
          initial={{ opacity: 0.8 }}
          whileHover={{
            opacity: 1,
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        />
      ))}
    </motion.div>
  </div>
</div>

  );
};

export default TechStack;
