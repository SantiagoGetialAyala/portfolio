import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold hover:text-purple-400 transition-colors">
              Portfolio
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Software Engineer specializing in responsive web applications and efficient backend systems, merging tech with smart process design.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" className="hover:text-purple-400 transition-colors">GitHub</Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-purple-400 transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
