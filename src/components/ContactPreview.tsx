'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function ContactPreview() {
  const [comment, setComment] = useState('');
  const [isClient, setIsClient] = useState(false); // Para evitar el error de hidratación

  useEffect(() => {
    setIsClient(true); // Se asegura de que el código solo se ejecute en el cliente
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/contact?comment=${encodeURIComponent(comment)}`;
  };

  if (!isClient) {
    return null; // No renderizar el componente en el servidor
  }

  return (
    <section className="relative w-full py-32 px-4 text-white bg-black overflow-hidden">
      {/* Fondo gradiente oscuro con animaciones */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,200,0.15),transparent_70%)]" />

        {/* Animación de círculos flotantes */}
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

      {/* Contenedor de la sección */}
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="text-gray-300 mb-8">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Fill out the form below to start a conversation.
          </p>

          {/* Formulario de contacto estilizado */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-3xl shadow-2xl transition-all hover:scale-105 transform duration-500 ease-in-out">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Campo de comentario */}
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
                required
                className="bg-gray-900 text-white p-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32 transition-all"
              />

              {/* Botón de envío */}
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-600 px-6 py-3 rounded-lg shadow-xl transform duration-300 hover:scale-105"
              >
                Send Me a Message
              </button>
            </form>
          </div>

          {/* Sección con iconos de redes sociales */}
          <div className="text-center mt-12">
            <div className="flex space-x-6 text-2xl mt-2 justify-center">
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
      </div>
    </section>
  );
}
