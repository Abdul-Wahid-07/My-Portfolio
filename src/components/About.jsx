"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center md:text-left"
      >
        About Me
      </motion.h2>

      {/* TEXT + IMAGE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          <p>
            I'm a passionate{" "}
            <span className="text-white font-semibold">Software Developer</span>
            specializing in backend engineering. I excel at building scalable,
            secure, and high-performance systems using{" "}
            <span className="text-white font-semibold">
              Node.js, Express, MongoDB, and JavaScript
            </span>.
          </p>

          <p>
            I also work on the frontend using{" "}
            <span className="text-white font-semibold">Next.js & React</span>,
            crafting clean, modern, and performance-optimized user interfaces.
          </p>

          <p>
            I'm currently working as a{" "}
            <span className="text-white font-semibold">Software Developer Intern</span>{" "}
            at <span className="text-white font-semibold">Nexcore Alliance</span>{" "}
            (Sept 2025 – Present), contributing to real-world products and
            delivering production-grade features.
          </p>

          <p>
            I love designing systems, solving real problems, and turning ideas into
            reliable, functional digital experiences.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300">
            <Image
              src="/about.jpg"
              alt="About Image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
