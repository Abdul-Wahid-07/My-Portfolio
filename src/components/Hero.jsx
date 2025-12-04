"use client"

import { useState, useEffect } from 'react';
import { Boxes, SquareCode, Github } from "lucide-react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative h-screen flex flex-col justify-center items-start px-6 max-w-8xl mx-auto overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
                <div
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out',
                        animationDelay: '1s'
                    }}
                />
            </div>

            {/* Content with staggered animations */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="text-gray-400 text-lg font-light tracking-wide">
                    Hi, I'm
                </p>
            </div>

            <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-3xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Abdul Wahid Khan
                </h1>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl md:text-3xl text-gray-400 mt-3 font-light">
                    MERN-Focused{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                        Software Developer
                    </span>
                </h2>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="mt-8 text-gray-300 text-lg max-w-2xl leading-relaxed">
                    I build scalable backend systems using{' '}
                    <span className="text-white font-semibold">Node.js</span>,{' '}
                    <span className="text-white font-semibold">Express</span>,{' '}
                    <span className="text-white font-semibold">MongoDB</span>{' '}
                    and craft smooth frontend experiences with{' '}
                    <span className="text-white font-semibold">Next.js</span>.
                </p>
            </div>

            <div className={`flex gap-4 mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <a
                    href="#projects"
                    className="group relative px-6 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 whitespace-nowrap"
                >

                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >

                    Get In Touch
                </a>
            </div>

            {/* Floating tech icons */}
            <div
                className={`
    absolute 
    bottom-24 md:bottom-10 
    right-4 md:right-10 
    flex gap-4 md:gap-6 
    text-gray-600 
    transition-all duration-1000 delay-700
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
  `}
            >
                {/* Node / Backend */}
                <div className="hover:text-green-400 transition-all duration-300 cursor-pointer hover:scale-110">
                    <Boxes className="w-6 h-6 md:w-8 md:h-8" />
                </div>

                {/* JavaScript */}
                <div className="hover:text-yellow-400 transition-all duration-300 cursor-pointer hover:scale-110">
                    <SquareCode className="w-6 h-6 md:w-8 md:h-8" />
                </div>

                {/* GitHub */}
                <div className="hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-110">
                    <Github className="w-6 h-6 md:w-8 md:h-8" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className={`
    absolute 
    bottom-6 md:bottom-8 
    left-1/2 -translate-x-1/2 
    flex flex-col items-center gap-2 
    text-gray-500 
    transition-all duration-1000 delay-1000
    ${isVisible ? 'opacity-100' : 'opacity-0'}
  `}
            >
                <span className="text-sm hidden md:block">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
                </div>
            </div>

        </section>
    );
}