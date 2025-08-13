import React, { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

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
        "Collaborated with product team to define technical requirements and roadmap",
      ],
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"],
      backgroundImage: "/experience1.jpg",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Detz Global Pvt Ltd.",
      location: "Colombo, Sri Lanka (Remote)",
      duration: "Present",
      type: "Full-time",
      description: [
        "Built and deployed scalable web applications from concept to production",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Developed RESTful APIs and integrated third-party services",
        "Participated in agile development process with cross-functional teams",
      ],
      technologies: ["Vue.js", "Python", "Docker", "MongoDB", "Redis"],
      backgroundImage: "/experience2.jpg",
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Freelancer",
      location: "Remote",
      duration: "2021 - Present",
      type: "Freelancer",
      description: [
        "Developed custom web applications for enterprise clients",
        "Optimized database queries improving application performance by 35%",
        "Integrated payment systems and implemented security best practices",
        "Provided technical consultation and code architecture recommendations",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Angular",
        "C#",
        ".NET Core",
        "SQL Server",
        "Azure",
      ],
      backgroundImage: "/experience3.jpg",
    },
  ];

  const highlightColor = "#4ADE80"; // bright green

  // Card style with wider width
  const cardStyle = {
    height: "50vh",
    maxHeight: "400px",
    width: "80vw",
    maxWidth: "700px",
    borderRadius: "20px",
    transition:
      "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
    willChange: "transform, opacity",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    color: "white",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight;
          const totalScroll = vh * 2;

          let progress = 0;
          if (rect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(rect.top) / totalScroll));
          }

          if (progress >= 0.66) setActiveIndex(2);
          else if (progress >= 0.33) setActiveIndex(1);
          else setActiveIndex(0);

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <section
        id="experience"
        className="sticky top-0 h-screen py-10 px-6 flex flex-col justify-center overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col h-full"> {/* wider container */}
            <div className="mb-10 mt-12 text-center">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-2 font-display"
                    style={{ color: "" }}
                  >
                    Professional{" "}
                    <span style={{ color: highlightColor }}>Experience</span>
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto text-lg text-gray-00">
                    My journey through various roles and companies, building scalable
                    solutions and growing as a developer
                  </p>
                </div>

          <div className="relative flex-1 perspective-1000">
            {experiences.map((exp, i) => {
              const isActive = i === activeIndex;
              const isVisible = i <= activeIndex;

              return (
                <div
                  key={exp.id}
                  className={`absolute rounded-2xl shadow-xl transition-all duration-500`}
                  style={{
                    ...cardStyle,
                    left: "50%",
                    top: 0,
                    right: "auto",
                    bottom: "auto",
                    zIndex: 10 + i * 10,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                    transform: isVisible
                      ? `translate(-50%, ${isActive ? 20 : 60 - i * 10}px) scale(${
                          isActive ? 1 : 0.9
                        })`
                      : "translate(-50%, 200px) scale(0.9)",
                    // backgroundImage: `linear-gradient(to bottom, ${highlightColor}cc, rgba(0,0,0,0.9)), url(${exp.backgroundImage})`,
                    // backgroundImage: `linear-gradient(to bottom, rgba(252,77,10,0.7), rgba(0,0,0,0.9)), url(${exp.backgroundImage})`,
                    backgroundImage: `linear-gradient(to bottom, rgba(0,64,48,1), rgba(0,64,48,1)), url(${exp.backgroundImage})`,
                    // backgroundImage: `linear-gradient(to bottom, rgba(4,9,17,0.9), rgba(4,9,17,0.9)), url(${exp.backgroundImage})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                    color: "white",
                  }}
                >
                  <div className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-xl mb-1 font-medium">{exp.company}</p>
                      <div className="flex gap-3 text-sm text-gray-300 mb-3">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>

                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm"
                          style={{
                            transition: "background-color 0.3s, color 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget.style.backgroundColor = highlightColor + "33");
                            (e.currentTarget.style.color = highlightColor);
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)");
                            (e.currentTarget.style.color = "white");
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
