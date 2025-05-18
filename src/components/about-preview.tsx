'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Language = 'en' | 'es';

interface Content {
  [key: string]: {
    title: string;
    description: string;
    button: string;
  };
}

export function AboutPreview() {
  const [language, setLanguage] = useState<Language>('en');

  const content: Content = {
    en: {
      title: '✨ Get to Know Me',
      description:
        "Hi, I’m Brayan Santiago Getial, a Software and Industrial Engineering student. I have experience in backend and frontend development with technologies like Django, Flask, React, and SQL databases. I enjoy combining technical skills with business understanding to build complete solutions. I’m looking for opportunities to grow professionally, collaborate in teams, and keep learning. I also maintain healthy habits like sports and music to stay focused and creative.",
      button: 'Learn More About Me',
    },
    es: {
      title: '✨ Conóceme Mejor',
      description:
        'Hola, soy Brayan Santiago Getial, estudiante de Ingeniería de Software e Industrial. Tengo experiencia en backend y frontend usando tecnologías como Django, Flask, React y bases de datos SQL. Me gusta integrar la parte técnica con la visión del negocio para crear soluciones completas. Busco oportunidades para crecer profesionalmente, trabajando en equipo y aprendiendo continuamente. Además, mantengo hábitos saludables como el deporte y la música para estar enfocado y creativo.',
      button: 'Conoce más sobre mí',
    },
  };

  const youtubeVideos = {
    es: 'https://www.youtube.com/embed/uZPM-YUBnKI',
    en: 'https://www.youtube.com/embed/yyXKNmGJrDY',
  };

  return (
    <section id="About-me" className="relative w-full py-32 px-4 text-white bg-black overflow-hidden">
      {/* Fondo animado */}
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

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Video de presentación */}
        <motion.div
          className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src={youtubeVideos[language]}
            title="Video de presentación"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        {/* Texto animado */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {content[language].title}
            <span className="block h-1 w-16 bg-indigo-500 mt-2 rounded-full animate-pulse" />
          </motion.h2>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mb-8"
            style={{ paddingBottom: '2rem' }}
          >
            <SwiperSlide>
              <p className="text-gray-300 leading-relaxed">{content[language].description}</p>
            </SwiperSlide>
          </Swiper>

          {/* Botones de idioma */}
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
          <motion.div
            className="flex space-x-6 text-2xl mt-2 justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="https://github.com/SantiagoGetialAyala" target="_blank" className="hover:text-purple-400 transition-colors">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
