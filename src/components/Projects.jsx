"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Personal Finance Tracker",
      desc: "A full-stack MERN application that helps users track expenses, manage categories, and view monthly insights with data visualization.",
      link: "https://finance-tracker-green-tau.vercel.app/",
    },
    {
      name: "Digital Notice Board",
      desc: "A real-time notice posting system built using MERN stack with live updates and admin posting features.",
      link: "https://edu-board-smoky.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-white"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group block p-[1px] rounded-2xl bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-transparent hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <div className="bg-gray-900 rounded-2xl p-7 h-full border border-gray-800 group-hover:border-gray-700 transition">
              <h3 className="text-2xl font-semibold text-white transition">
                {p.name}
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-5 text-blue-400 font-medium group-hover:translate-x-1 transition-all inline-flex items-center">
                View Project →
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
