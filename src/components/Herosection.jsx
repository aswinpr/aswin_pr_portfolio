import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Herosection = () => {
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    // Generate 50 small dots
    const dots = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(dots);

    // Generate 8 larger orbs
    const glowingOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 15,
      duration: Math.random() * 15 + 15,
    }));
    setOrbs(glowingOrbs);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-4 bg-black overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-emerald-500 rounded-full opacity-80"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute bg-emerald-400 rounded-full opacity-30 blur-sm"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              animation: `floatOrb ${orb.duration}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`,
              boxShadow: `0 0 ${orb.size}px rgba(52, 211, 153, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content */}
      <div className="relative text-center w-full max-w-4xl mx-auto z-20">

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Hey, I'm{" "}
          <span className="block md:inline text-emerald-400">
            Aswin P R
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl text-white font-medium tracking-wide"
        >
          Software Developer
        </motion.p>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-20 text-white/70 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll Down</span>
          <span className="text-xl">↓</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Herosection;
