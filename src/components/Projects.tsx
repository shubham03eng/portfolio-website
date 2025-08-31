import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';
import projectimg from '../images/projectimg.png';
import chatbotimg from '../images/chatbotimg.jpg';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Code Ai',
      description: ' Just describe your idea, and Code IDE will:',
      fullDescription: 'Fully automated website generation from a single prompt Cross-platform support (Windows, Linux, macOS) Secure command execution with real-time feedback Extensible and easy to use—no coding required!',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Javascript', 'Node.js', 'Gemini API',],
      github: 'https://github.com/shubham03eng/Code-Ai.git',
      live: 'https://example.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Personal Expense And Income Tracker',
      description: 'A application that manage all the income and expense of a user.',
      fullDescription: 'The Personal Expense Tracker (PET) is a native Android application built with Java and SQLite to provide a comprehensive tool for managing personal finances. It allows users to securely register for an account, log daily income and expenses, and view a detailed transaction history. The app also features a dynamic filtering system to sort transactions and an analytics dashboard that uses charts to visualize spending patterns, helping users make more informed financial decisions.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'sql lite', 'Android Studio'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Chat bot',
      description: 'A personal chat bot that trains on users data.',
      fullDescription: 'this is an a personal chat bot that trains on users data and provide the best result as per the user input. it is built using react for frontend and node js for backend and open weather api for fetching the weather data. it is hardcoded with  data to provide the best result.it has pre planned resposen for your request.  it is a fully responsive website.',
      image: chatbotimg,
      tech: ['React', 'Javascript', 'Tailwind', 'Node.js', 'Express.js', 'postman'],
      github: 'https://github.com/shubham03eng/chatbot.git',
      live: 'https://example.com',
      color: 'from-orange-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, interactive portfolio website showcasing my projects, skills, and experience as a developer.',
      fullDescription: 'This portfolio website is a dynamic and visually engaging platform designed to highlight my journey as a developer. Built using React and styled with Tailwind CSS, it features smooth animations powered by Framer Motion for an immersive user experience. The site includes detailed sections such as About Me, Featured Projects, and more, each crafted to demonstrate both technical proficiency and creative design. Projects are presented with interactive cards and modals, providing in-depth information, technology stacks, and direct links to live demos and source code. The responsive layout ensures seamless browsing across devices, while subtle gradients and background effects add a professional touch. This portfolio not only reflects my technical skills but also my passion for building user-friendly and aesthetically pleasing web applications.',
      image: projectimg,
      tech: ['React', 'Tailwind', 'CSS', 'Framer Motion'],
      github: 'https://github.com/shubham03eng/portfolio-website.git',
      live: 'https://shubhamportfolio-90jr.onrender.com/',
      color: 'from-purple-500 to-indigo-600'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-indigo-200/20 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => setSelectedProject(project.id)}
                      className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-gray-800 hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            
            <motion.div
              className="relative bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
              
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.fullDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;