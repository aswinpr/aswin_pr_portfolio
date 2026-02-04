import { motion } from "framer-motion";

const skills = [
  "Python",
  "Django",
  "React.js",
  "MongoDB",
  "MySQL",
  "Figma & Design Tools",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-secondary/30 min-h-screen flex items-center justify-center py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="max-w-3xl mx-auto text-center px-2 sm:px-0">

          {/* Label */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-white text-sm tracking-[0.3em] uppercase font-medium"
          >
            About Me
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6 sm:mb-8"
          >
            Focused on Learning, Building, and Growing
          </motion.h2>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-white/80 leading-relaxed mb-8 sm:mb-10"
          >
            <p>
              I’m an MCA graduate with a strong interest in web technologies and
              software development. I enjoy learning new tools and building
              solutions that solve real-world problems.
            </p>
            <p>
              I'm looking for opportunities to grow my skills and contribute to
              exciting tech projects. Always open to learning and connecting
              with like-minded professionals.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-medium text-white mb-4">
              Areas of Expertise
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
