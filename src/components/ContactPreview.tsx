'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, CheckCircle } from 'lucide-react';

export function ContactPreview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isClient, setIsClient] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call or form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Optional: Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', comment: '' });
    }, 5000);
  };

  if (!isClient) return null;

  return (
    <section id="Contact" className="relative w-full py-20 md:py-28 lg:py-32 px-4 text-white bg-black overflow-hidden">
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

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="text-gray-300 mb-8">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Fill out the form below to start a conversation.
          </p>

          {isSubmitted ? (
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-8 rounded-3xl shadow-2xl">
              <div className="flex flex-col items-center justify-center gap-4">
                <CheckCircle className="w-12 h-12 text-white" />
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-white/90">Thank you for your message, {formData.name}. Ill get back to you soon.</p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-3xl shadow-2xl transition-all hover:scale-105 transform duration-500 ease-in-out">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-gray-900 text-white p-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-gray-900 text-white p-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Write your comment here..."
                  required
                  className="bg-gray-900 text-white p-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32 transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-600 px-6 py-3 rounded-lg shadow-xl transform duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Me a Message'
                  )}
                </button>
              </form>
            </div>
          )}

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