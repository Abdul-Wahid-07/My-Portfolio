"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Code2,
  ShieldCheck,
  GitBranch,
  Cpu,
  Layers,
} from "lucide-react";

export default function Skills() {
  const skillItems = [
    { name: "Node.js", icon: <Cpu size={22} /> },
    { name: "Express.js", icon: <Server size={22} /> },
    { name: "MongoDB", icon: <Database size={22} /> },
    { name: "JavaScript", icon: <Code2 size={22} /> },
    { name: "Next.js", icon: <Layers size={22} /> },
    { name: "React", icon: <Layers size={22} /> },
    { name: "REST APIs", icon: <Server size={22} /> },
    { name: "JWT Auth", icon: <ShieldCheck size={22} /> },
    { name: "Git & GitHub", icon: <GitBranch size={22} /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
      >
        My Skills
      </motion.h2>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skillItems.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="
              group
              backdrop-blur-xl bg-white/5 border border-white/10 
              p-5 rounded-2xl text-center 
              transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]
              hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
            "
          >
            <div className="flex justify-center mb-3 text-gray-300 group-hover:text-white transition">
              {skill.icon}
            </div>
            <p className="text-gray-300 group-hover:text-white font-medium tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
