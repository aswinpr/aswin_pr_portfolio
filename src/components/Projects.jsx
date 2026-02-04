import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import labourImg from "../assets/proImg1.png";
import turfImg from "../assets/proImg2.png";
import greensImg from "../assets/proImg3.png";
import paws_and_clawsImg from "../assets/proImg4.png";

const projects = [
  {
    title: "Labourers Connect - Job Portal",
    description:
      "Job portal connecting employers, labourers, and contractors with real-time job postings, applications, and notifications. Features include custom authentication, Google Maps integration, and a rating/review system.",
    tags: ["Python", "Django", "MySql"],
    image: labourImg,
  },
  {
    title: "Turf-Slot Booker",
    description:
      "Web application for booking football turf slots with real-time availability checking and an easy-to-use interface for players and turf owners.",
    tags: ["ReactJS", "MongoDB"],
    image: turfImg,
  },
  {
    title: "Greens- Organic Store",
    description:
      "e-commerce platform for organic products such as fruits and vegtables with user-friendly browsing and shopping.",
    tags: [ "Python", "Django","MongoDB Atlas"],
    image: greensImg,
  },
  {
    title: "Paws & Claws - Pet store",
    description:
      "E-commerce platform for pet products and services with user-friendly booking and shopping.",
    tags: ["Python", "Django", "MongoDB Atlas"],
    image: paws_and_clawsImg,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding py-16 sm:py-20">

      <div className="container mx-auto px-7 sm:px-7 lg:px-0">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6 pt-1 sm:pt-0.5">
            Projects I’ve Built
          </h2>

          <p className="text-white/80 text-base sm:text-lg">
            A selection of projects that showcase my skills in design,
            development, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/5 rounded-xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white/60 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-white/80 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
