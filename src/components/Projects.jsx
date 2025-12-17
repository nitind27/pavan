import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      name: 'Codeat Infotech',
      description: 'ERP / Web-based application - A comprehensive enterprise resource planning solution built with modern web technologies for seamless business operations.',
      url: 'https://codeaterp-jbko.vercel.app',
      tech: ['React.js', 'Next.js', 'Node.js', 'TypeScript'],
      featured: true,
      category: 'Enterprise Solution',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
    },
    {
      id: 2,
      name: 'Roofing Services',
      description: 'Professional commercial roofing website with service booking, emergency contact, and comprehensive roofing solutions. Modern design with excellent UX.',
      url: 'https://roofing.codeatinfotech.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      featured: true,
      category: 'Business Website',
      gradient: 'from-orange-500 via-red-500 to-amber-500',
    },
    {
      id: 3,
      name: 'Dental Clinic',
      description: 'Beautiful dental clinic website with appointment booking, service showcase, and patient reviews. Clean, modern design focused on user experience.',
      url: 'https://dental.codeatinfotech.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML5'],
      featured: true,
      category: 'Healthcare Website',
      gradient: 'from-cyan-500 via-blue-500 to-teal-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing innovative web solutions that deliver exceptional user experiences and business value
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group relative ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} p-[2px]`}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="relative h-full bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300">
                      {project.category}
                    </span>
                    {index === 0 && (
                      <span className="px-4 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-xs font-semibold text-yellow-300 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Name */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-xs font-medium text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold hover:shadow-2xl transition-all duration-300 group/btn`}
                  >
                    <Globe className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-2xl -z-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${project.gradient} opacity-10 rounded-full blur-xl -z-10 group-hover:opacity-20 transition-opacity`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-500/50 rounded-full text-purple-400 font-semibold hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
