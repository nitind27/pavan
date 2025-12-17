import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'PHP', color: 'from-blue-500 to-blue-600', icon: '💻' },
    { name: 'Laravel', color: 'from-red-500 to-red-600', icon: '🔴' },
    { name: 'WordPress', color: 'from-blue-400 to-blue-500', icon: '📝' },
    { name: 'Shopify', color: 'from-green-500 to-green-600', icon: '🛒' },
    { name: 'Node.js', color: 'from-green-400 to-green-500', icon: '🟢' },
    { name: 'Wix', color: 'from-pink-500 to-pink-600', icon: '🎨' },
    { name: 'React.js', color: 'from-cyan-400 to-cyan-500', icon: '⚛️' },
    { name: 'Next.js', color: 'from-gray-400 to-gray-600', icon: '▲' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
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
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Skills</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotate: [0, -5, 5, -5, 0],
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${skill.color} p-[2px]`}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm"></div>
                <div className="relative h-full bg-gray-900/80 backdrop-blur-md p-6 rounded-3xl text-center cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                    {skill.name}
                  </div>
                  <div className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
