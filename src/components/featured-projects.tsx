'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Project = {
  id: number;
  title: { en: string; es: string };
  description: { en: string; es: string };
  tags: string[];
  videoSrc: { en: string; es: string };
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: { en: 'Backend Project', es: 'Proyecto Backend' },
    description: {
      en: 'A robust backend solution with Node.js, Express, and MongoDB.',
      es: 'Una solución backend robusta con Node.js, Express y MongoDB.',
    },
    tags: ['Node.js', 'Express', 'MongoDB'],
    videoSrc: {
      en: '/videos/backend-en.mp4',
      es: '/videos/backend-es.mp4',
    },
  },
  {
    id: 2,
    title: { en: 'Frontend Project', es: 'Proyecto Frontend' },
    description: {
      en: 'Interactive UI developed with React and modern components.',
      es: 'Interfaz interactiva desarrollada con React y componentes modernos.',
    },
    tags: ['React', 'Redux', 'Tailwind'],
    videoSrc: {
      en: '/videos/frontend-en.mp4',
      es: '/videos/frontend-es.mp4',
    },
  },
  {
    id: 3,
    title: { en: 'Fullstack Project', es: 'Proyecto Fullstack' },
    description: {
      en: 'End-to-end app with Next.js and PostgreSQL integration.',
      es: 'Aplicación de extremo a extremo con integración de Next.js y PostgreSQL.',
    },
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    videoSrc: {
      en: '/videos/fullstack-en.mp4',
      es: '/videos/fullstack-es.mp4',
    },
  },
];

export function FeaturedProjects() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <section className="relative w-full py-32 px-4 text-white bg-black overflow-hidden">
      {/* Fondo animado */}
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

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {lang === 'en' ? 'Featured Projects' : 'Proyectos Destacados'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Explore some of my recent work. These projects showcase my skills in various technologies and problem-solving approaches.'
              : 'Explora algunos de mis trabajos recientes. Estos proyectos muestran mis habilidades en diferentes tecnologías y enfoques para resolver problemas.'}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1 rounded-full text-sm border ${lang === 'en' ? 'bg-purple-600 text-white' : 'border-white/20 text-gray-300 hover:bg-white/10'}`}
            >
              English
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-4 py-1 rounded-full text-sm border ${lang === 'es' ? 'bg-purple-600 text-white' : 'border-white/20 text-gray-300 hover:bg-white/10'}`}
            >
              Español
            </button>
          </div>
        </div>

        {/* Swiper para los proyectos */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
          style={{ paddingBottom: '2rem' }}
        >
          {featuredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex justify-center px-4">
                <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 max-w-xl w-full">
                  <video
                    src={project.videoSrc[lang]}
                    className="aspect-video w-full object-cover"
                    controls
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title[lang]}
                    </h3>
                    <p className="text-gray-300 mb-3">{project.description[lang]}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Redes sociales */}
        <div className="text-center mt-12">
          <div className="flex space-x-6 text-2xl mt-2 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
