"use client";

import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <Briefcase className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-400">
            Professional Journey
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
          Experience
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl">
          Building innovative solutions while delivering scalable engineering excellence
        </p>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        {/* Hover Aura */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div> */}

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 p-10 rounded-2xl border border-gray-800/70 shadow-2xl transition-all duration-300 group-hover:border-gray-700/80 backdrop-blur-2xl">
          
          {/* Top Content */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-inner">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-1 transition-colors">
                    Software Developer Intern
                  </h3>
                  <p className="text-lg text-gray-300 font-medium">
                    Nexcore Alliance
                  </p>
                </div>
              </div>
            </div>

            {/* Date Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 shadow-md">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-300">
                Sep 2025 – Present
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Contributing to backend engineering, developing scalable API systems,
            designing optimized databases, integrating frontend workflows, and automating internal processes.
          </p>

          {/* Responsibilities */}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Backend Services Development',
              'RESTful API Design',
              'Database Architecture & Modeling',
              'Automation & Workflow Building',
              'Frontend-Backend Integration',
              'Performance Optimization'
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 rounded-lg border border-gray-800 hover:border-blue-500/40 hover:bg-gray-800/50 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Gradient Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Status Indicator */}
      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-800 shadow-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">Currently Active</span>
        </div>
      </div>
    </section>
  );
}
