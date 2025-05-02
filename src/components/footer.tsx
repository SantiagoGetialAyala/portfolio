'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-32 px-4 text-white overflow-hidden">
      {/* Fondo gradiente oscuro con animaciones */}
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

      {/* Contenido del Footer */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold hover:text-purple-400 transition-colors">
              Portfolio
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Software Engineer specializing in responsive web applications and efficient backend systems, merging tech with smart process design.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/SantiagoGetialAyala" target="_blank" className="hover:text-purple-400 transition-colors">GitHub</Link>
              <Link href="https://linkedin.com/in/tu-usuario" target="_blank" className="hover:text-purple-400 transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
