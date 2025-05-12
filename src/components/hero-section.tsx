'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const name = 'Santiago Getial Ayala';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Fondo con gradientes y círculos animados */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,200,0.15),transparent_70%)]" />
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

      {/* Contenido del hero */}
      <div className="container mx-auto px-4 z-10 text-center max-w-3xl">
        {/* Animación letra por letra */}
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
          Full Stack Student Developer
        </motion.p>

        {/* Redes sociales */}
        <motion.div
          className="flex justify-center space-x-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="https://github.com/SantiagoGetialAyala" target="_blank" className="hover:text-[#8c4fd5] transition-colors">
            <Github size={28} />
          </Link>
          <Link href="https://linkedin.com/in/santiigetial" target="_blank" className="hover:text-[#8c4fd5] transition-colors">
            <Linkedin size={28} />
          </Link>
          <Link href="https://twitter.com/santiigetial" target="_blank" className="hover:text-[#8c4fd5] transition-colors">
            <Twitter size={28} />
          </Link>
          <Link href="mailto:santiigetial@example.com" className="hover:text-[#8c4fd5] transition-colors">
            <Mail size={28} />
          </Link>
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link href="#featured-projects" className="bg-[#8c4fd5] hover:bg-[#742bbf] text-white px-6 py-3 rounded-md text-lg transition-all">
            View My Projects →
          </Link>
          <Link href="#Contact" className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md text-lg transition-all">
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#a3a3a3] mb-2">Scroll to explore</p>
          <motion.div
            className="w-1 h-10 rounded-full bg-white/20"
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Desvanecimiento suave en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
