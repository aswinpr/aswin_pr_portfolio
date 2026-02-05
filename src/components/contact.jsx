import React, { useState } from "react";
import { motion } from "framer-motion";
import resumeFile from "../assets/Aswin_PR.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzzjzeyv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
          <p className="text-xl">
            Your message has been sent successfully. I'll get back to you soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black py-12 px-4 text-white"
    >
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl mb-8 text-center"
      >
        Get in touch
      </motion.h2>

      <div className="container mx-auto max-w-5xl w-full px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-black/80 to-black/80 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        >
          {/* LEFT SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 p-8 flex flex-col items-center justify-center"
          >
            {/* Contact Info */}
            <div className="space-y-6 text-lg text-left">
              <p className="select-all">📧 aswinpr247@gmail.com</p>
              <p className="select-all">📞 +91 9495855989</p>
            </div>

            {/* SOCIAL ICONS */}
                <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8"
                >
                {/* Facebook */}
                <motion.a
                    whileHover={{ scale: 1.15 }}
                    href="https://www.facebook.com/aswin.ramesh.739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-700 transition group"
                >
                    <svg
                    className="h-7 w-7 text-white group-hover:text-white transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                    whileHover={{ scale: 1.15 }}
                    href="https://www.instagram.com/aswin_pr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-700 transition group"
                >
                    <svg
                    className="h-7 w-7 text-white group-hover:text-white transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </motion.a>

                {/* GitHub */}
                <motion.a
                    whileHover={{ scale: 1.15 }}
                    href="https://github.com/aswinpr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-700 transition group"
                >
                    <svg
                    className="h-7 w-7 text-white group-hover:text-white transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                    whileHover={{ scale: 1.15 }}
                    href="https://www.linkedin.com/in/aswin-pr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/20 hover:bg-emerald-500 transition group"
                >
                    <svg
                    className="h-7 w-7 text-white group-hover:text-white transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                    </svg>
                </motion.a>
                </motion.div>


            {/* Download CV */}
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href={resumeFile}
              download="Aswin p r.pdf"
              className="mt-10 inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-lg hover:shadow-xl"
            >
               Download CV
            </motion.a>
          </motion.div>

          {/* RIGHT SECTION (FORM) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 p-8 flex items-center"
          >
            <form
              className="w-full max-w-md mx-auto flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl text-center">Send a Message</h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg bg-gray-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg bg-gray-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="p-3 rounded-lg bg-gray-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-bold py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default App;
