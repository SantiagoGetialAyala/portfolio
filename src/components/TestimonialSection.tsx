'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Testimonial = {
  id: number;
  name: string;
  feedback: { en: string; es: string };
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Kiki Pérez',
    feedback: {
      en: 'Santiago was extremely helpful and delivered a solution better than expected. Highly recommended!',
      es: 'Santiago fue de gran ayuda y entregó una solución mejor de lo esperado. ¡Muy recomendado!',
    },
    avatar: '/avatars/Av3.avif',
  },
  {
    id: 2,
    name: 'Luis Carlos Revelo',
    feedback: {
      en: 'Great professional. Communication was clear and the final result was amazing.',
      es: 'Gran profesional. La comunicación fue clara y el resultado final fue increíble.',
    },
    avatar: '/avatars/Av4.avif',
  },
  {
    id: 3,
    name: 'Jeronimo Unigarro',
    feedback: {
      en: 'Working with Santiago was a great experience. He’s talented and very committed.',
      es: 'Trabajar con Santiago fue una gran experiencia. Es talentoso y muy comprometido.',
    },
    avatar: '/avatars/Av5.avif',
  },
  {
    id: 4,
    name: 'Jacobo Solarte',
    feedback: {
      en: 'He understood our needs perfectly and created something that exceeded expectations.',
      es: 'Entendio perfectamente el trabajo, un excelente ingeniero.',
    },
    avatar: '/avatars/Av2.jpg',
  },
  {
    id: 5,
    name: 'Samuel Gómez',
    feedback: {
      en: 'Very creative and detail-oriented. I’d definitely work with him again.',
      es: 'Muy creativo y detallista. Definitivamente volvería a trabajar con él.',
    },
    avatar: '/avatars/Av1.avif',
  },
];

export function TestimonialsSection() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <section id='testimonials' className="relative w-full py-32 px-4 text-white bg-black overflow-hidden">
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
            {lang === 'en' ? 'Testimonials' : 'Testimonios'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Here’s what people are saying about working with me.'
              : 'Esto es lo que dicen las personas sobre trabajar conmigo.'}
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

        {/* Swiper para testimonios */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="w-full"
          style={{ paddingBottom: '2rem' }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 p-6 text-center max-w-sm mx-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-600 object-cover"
                />
                <h3 className="text-lg font-semibold text-white mb-2">{testimonial.name}</h3>
                <p className="text-gray-300 text-sm">{testimonial.feedback[lang]}</p>
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
