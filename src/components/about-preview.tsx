'use client';

import Link from 'next/link';

export function AboutPreview() {
  return (
    <section className="py-24 px-4 w-full bg-gradient-to-b from-black via-gray-900/50 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m Santiago Getial Ayala, a Software 
              Engineering and Industrial Engineering student 
              at the Universidad Cooperativa de Colombia. I&apos;m 22 years old and currently working 
              on projects that combine technology with process optimization.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              On the left side of this portfolio, you&apos;ll find more detailed information about me 
              and a presentation video where I share more about my background and experience.
            </p>
            <Link href="/about">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-all hover:shadow-lg hover:shadow-purple-500/20 flex items-center">
                Learn More About Me
                <span className="ml-2">➔</span>
              </button>
            </Link>
          </div>

          {/* "Video" o Imagen Placeholder */}
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl order-1 lg:order-2 flex items-center justify-center">
            <span className="text-gray-400">[ Video Placeholder ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
