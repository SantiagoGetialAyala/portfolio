'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function AboutPreview() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const content = {
    en: {
      title: 'About Me',
      description1:
        "I'm Santiago Getial Ayala, a Software Engineering and Industrial Engineering student at the Universidad Cooperativa de Colombia. I'm 22 years old and currently working on projects that combine technology with process optimization.",
      description2:
        "On the left side of this portfolio, you'll find more detailed information about me and a presentation video where I share more about my background and experience.",
      button: 'Learn More About Me',
    },
    es: {
      title: 'Sobre mí',
      description1:
        'Soy Santiago Getial Ayala, estudiante de Ingeniería de Software e Ingeniería Industrial en la Universidad Cooperativa de Colombia. Tengo 22 años y actualmente trabajo en proyectos que combinan tecnología con optimización de procesos.',
      description2:
        'En el lado izquierdo de este portafolio encontrarás más información sobre mí y un video de presentación donde comparto más sobre mi experiencia y formación.',
      button: 'Conoce más sobre mí',
    },
  };

  return (
    <section className="relative w-full py-32 px-4 text-white bg-black overflow-hidden">
      {/* Fondo con gradientes animados */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,200,0.15),transparent_70%)]" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-700/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Video o Placeholder a la izquierda */}
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
          <span className="text-gray-400">[ Video Placeholder ]</span>
        </div>

        {/* Texto a la derecha */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{content[language].title}</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">{content[language].description1}</p>
          <p className="text-gray-300 mb-8 leading-relaxed">{content[language].description2}</p>

          {/* Botón de idioma */}
          <div className="mb-6 flex gap-4">
            <button
              className={`px-4 py-2 rounded-md border ${
                language === 'en' ? 'bg-purple-600 text-white' : 'border-white/20 text-gray-300'
              } hover:bg-purple-700 transition-all`}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
            <button
              className={`px-4 py-2 rounded-md border ${
                language === 'es' ? 'bg-purple-600 text-white' : 'border-white/20 text-gray-300'
              } hover:bg-purple-700 transition-all`}
              onClick={() => setLanguage('es')}
            >
              Español
            </button>
          </div>


          {/* Redes sociales */}
          <div className="flex space-x-6 text-2xl mt-2 justify-start ">
            <Link href="https://github.com/santiigetial" target="_blank" className="hover:text-purple-400 transition-colors">
              <Github />
            </Link>
            <Link href="https://linkedin.com/in/santiigetial" target="_blank" className="hover:text-purple-400 transition-colors">
              <Linkedin />
            </Link>
            <Link href="https://twitter.com/santiigetial" target="_blank" className="hover:text-purple-400 transition-colors">
              <Twitter />
            </Link>
            <Link href="mailto:santiigetial@example.com" className="hover:text-purple-400 transition-colors">
              <Mail />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
