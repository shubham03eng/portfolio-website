import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// --- 1. Import the icons you need ---
import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiGit,
  DiDatabase,
} from 'react-icons/di';
import {
  SiPostman,
  SiTailwindcss,
  SiFramer,
  SiCplusplus,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // --- 2. Update the skills array to include icons ---
  // Each skill is now an object with a name and an Icon component.
  const skills = [
    { name: 'C++', Icon: SiCplusplus },
    { name: 'React', Icon: DiReact },
    { name: 'Postman', Icon: SiPostman },
    { name: 'JavaScript', Icon: DiJavascript1 },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
    { name: 'Node.js', Icon: DiNodejsSmall },
    { name: 'SQL', Icon: DiDatabase },
    { name: 'Git', Icon: DiGit },
    { name: 'Framer Motion', Icon: SiFramer },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-indigo-200/20 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6" // Using a standard grid layout
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center justify-center
                           text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                           hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600"
              >
                {/* --- 3. Render the icon and the name --- */}
                <skill.Icon className="text-4xl sm:text-5xl text-indigo-600 mb-2 transition-colors duration-300 group-hover:text-white" />
                <p className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fresher Circle with Floating Icons */}
          <motion.div
            className="flex items-center justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-white shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Fresher
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              {['React', 'JS', 'CSS', 'HTML'].map((tech, index) => {
                const angle = (index * 90 * Math.PI) / 180;
                const radius = 120;
                const centerX = 160;
                const centerY = 160;

                return (
                  <motion.div
                    key={tech}
                    className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-indigo-600"
                    style={{
                      top: `${centerY + Math.sin(angle) * radius - 24}px`,
                      left: `${centerX + Math.cos(angle) * radius - 24}px`,
                    }}
                    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;