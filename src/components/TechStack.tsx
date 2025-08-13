import { motion } from "framer-motion";

const TechStack = () => {
  const logos = [
    "/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png",
    "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
    "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png",
    "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png",
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-background/00 backdrop-blur-sm py-12 mt-20 max-w-7xl mx-auto px-4">
      <motion.div
        className="flex space-x-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3 
            }
          }}
          style={{
            width: "fit-content",
            display: "flex",
            gap: "4rem"
          }}
        >
          {extendedLogos.map((logo, index) => (
            <motion.img
              key={`logo-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-8 object-contain"
              initial={{ opacity: 0.5 }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
