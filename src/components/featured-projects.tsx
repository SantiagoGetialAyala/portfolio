'use client';

import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: 'Backend Project',
    description: 'A robust backend solution with Node.js, Express, and MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    videoSrc: '/videos/placeholder.mp4',
  },
  {
    id: 2,
    title: 'Frontend Project',
    description: 'Interactive UI developed with React and modern components.',
    tags: ['React', 'Redux', 'Tailwind'],
    videoSrc: '/videos/placeholder.mp4',
  },
  {
    id: 3,
    title: 'Fullstack Project',
    description: 'End-to-end app with Next.js and PostgreSQL integration.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    videoSrc: '/videos/placeholder.mp4',
  },
];

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <div className="aspect-video bg-black flex items-center justify-center text-gray-500 text-sm">
        [ Video Placeholder ]
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="py-24 px-4 w-full bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work. These projects showcase my skills in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-all hover:shadow-lg hover:shadow-purple-500/20">
              View All Projects <span className="ml-2">➔</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
