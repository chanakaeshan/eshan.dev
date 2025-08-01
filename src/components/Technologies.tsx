import { motion } from "framer-motion";

const TechStack = () => {
  const logos = [
    { name: "React", url: "https://skillicons.dev/icons?i=react" },
    { name: "Node.js", url: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Python", url: "https://skillicons.dev/icons?i=python" },
    { name: "Docker", url: "https://skillicons.dev/icons?i=docker" },
    { name: "Git", url: "https://skillicons.dev/icons?i=git" },
    { name: "PostgreSQL", url: "https://skillicons.dev/icons?i=postgres" },
    { name: "Next.js", url: "https://skillicons.dev/icons?i=nextjs" },
    { name: "TypeScript", url: "https://skillicons.dev/icons?i=ts" },
    { name: "MongoDB", url: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Firebase", url: "https://skillicons.dev/icons?i=firebase" }
  ];

  // Repeat logos to create a seamless scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div>
    <h3 className="text-3xl font-semibold mb-6 text-center">
    <span className="text-green-400">Technologies</span> I Work With
    </h3>
  <div className="flex flex-wrap gap-3 justify-center"></div>
  <div className="w-full overflow-hidden py-8 mt-8">
    <motion.div
      className="flex space-x-16"
      initial={{ opacity: 0, x: "0%" }}
      animate={{
        opacity: 1,
        x: "-50%",
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
        gap: "4rem",
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
