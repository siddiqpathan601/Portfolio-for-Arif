import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    title: "Software Developer",
    description:
      "Designing and developing scalable applications, clean architectures, and user-focused digital products that solve real-world problems.",
    gradient: "linear-gradient(to right, #22D3EE, #7C3AED)", // Cyan + Purple
  },
  {
    title: "Frontend Developer",
    description:
      "Building fast, responsive, and visually engaging user interfaces using React, JavaScript, Tailwind CSS, and modern frontend technologies.",
    gradient: "linear-gradient(to right, #38BDF8, #22D3EE)", // Sky + Cyan
  },
  {
    title: "MERN Stack Developer",
    description:
      "Creating full-stack web applications using MongoDB, Express.js, React, and Node.js with scalable APIs and modern development practices.",
    gradient: "linear-gradient(to right, #7C3AED, #F472B6)", // Purple + Pink
  },
];

export const HeroRoles = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex].title;

    const handleType = () => {
      if (!isDeleting) {
        // Typing phase
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(90); // Steady typing speed

        if (displayText === currentFullText) {
          // Pause at the end of typing
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1800); // 1.8s pause to read the full role
          return;
        }
      } else {
        // Deleting phase
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(45); // Faster deleting speed

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Pause before starting to type the next word
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const currentRole = roles[roleIndex];

  return (
    <div className="min-h-[200px] md:min-h-[220px] flex flex-col justify-start select-none relative">
      <div className="flex flex-col text-left">
        {/* Dynamic Role Title with Typewriter Effect */}
        <h1
          className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.2] mt-6 flex items-center min-h-[1.2em]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            backgroundImage: currentRole.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span>{displayText}</span>
          <span className="inline-block w-[3px] h-[0.85em] bg-[#22D3EE] ml-1.5 animate-[ping_1s_infinite] opacity-75">|</span>
        </h1>

        {/* Dynamic Description with smooth fade and slide transition */}
        <AnimatePresence mode="wait">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="text-[#989898] text-sm md:text-base leading-relaxed mt-6 max-w-[620px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {currentRole.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
