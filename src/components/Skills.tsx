import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    { name: 'C++', level: 90, color: 'from-pink-500 to-rose-600' },
    { name: 'React/Next.js', level: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'Javascript', level: 90, color: 'from-blue-600 to-indigo-600' },
    { name: 'Tailwind CSS', level: 75, color: 'from-teal-500 to-cyan-600' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-600' },
    { name: 'SQL', level: 75, color: 'from-purple-500 to-pink-600' },
    
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
                    initial={{ x: '-100%' }}
                    animate={inView ? { x: '400%' } : { x: '-100%' }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
                    {/* <p className="text-gray-600 font-medium">Years of Experience</p> */}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating icons */}
              {['React', 'JS', 'CSS', 'HTML'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-indigo-600"
                  style={{
                    top: `${20 + Math.sin(index * 90 * Math.PI / 180) * 120}px`,
                    left: `${20 + Math.cos(index * 90 * Math.PI / 180) * 120}px`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;