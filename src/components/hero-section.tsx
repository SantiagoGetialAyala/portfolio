'use client';

import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const name = 'Santiago Getial Ayala';

export default function HeroSection() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, []);

  const particles = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 6 + 2;
    return {
      id: i,
      size,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5
    };
  });

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,200,0.15),transparent_70%)]" />
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 opacity-30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-700 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-3xl">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center break-words text-center max-w-full"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={char === ' ' ? 'mx-1 sm:mx-2' : ''}
              whileHover={{
                scale: 1.2,
                color: '#8c4fd5',
                transition: { type: 'spring', stiffness: 500 },
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="ml-2 sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#8c4fd5] to-[#4f84ff]">
            Problem Solver
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#a3a3a3] mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Full Stack Student Developer <motion.span className="text-[#8c4fd5]">|</motion.span> Experience: <motion.span>{rounded}</motion.span>%
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {[
            { icon: <Github size={28} />, href: "https://github.com/SantiagoGetialAyala" },
            { icon: <Linkedin size={28} />, href: "https://linkedin.com/in/santiigetial" },
            { icon: <Twitter size={28} />, href: "https://twitter.com/santiigetial" },
            { icon: <Mail size={28} />, href: "mailto:santiigetial@example.com" }
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                y: -5,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={social.href} target="_blank" className="hover:text-[#8c4fd5] transition-colors">
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#featured-projects"
              className="group relative overflow-hidden bg-[#8c4fd5] hover:bg-[#742bbf] text-white px-6 py-3 rounded-md text-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              <span className="relative z-10">View My Projects</span>
              <ArrowRight className="relative z-10" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#4f84ff] to-[#8c4fd5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#Contact"
              className="relative overflow-hidden border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md text-lg transition-all duration-300"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.span
                className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.5 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center">
          <motion.p 
            className="text-sm text-[#a3a3a3] mb-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
          <motion.div
            className="w-1 h-10 rounded-full bg-gradient-to-b from-[#8c4fd5] to-[#4f84ff]"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
              height: [10, 20, 10]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-20 z-10 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-full bg-gradient-to-t from-black to-transparent"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8c4fd5] to-[#4f84ff]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
