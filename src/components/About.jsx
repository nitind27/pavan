import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, value: '5+', label: 'Years Experience', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, value: '50+', label: 'Projects Delivered', gradient: 'from-purple-500 to-pink-500' },
    { icon: Users, value: '100%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-500' },
    { icon: Award, value: 'Expert', label: 'Full Stack Dev', gradient: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <Award className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">About</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with over{' '}
              <span className="text-purple-400 font-semibold">5 years of experience</span> in building robust,
              scalable web applications. I specialize in creating seamless user experiences and powerful backend
              systems.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              My expertise spans across modern JavaScript frameworks, server-side technologies, and cloud platforms.
              I'm dedicated to writing clean, maintainable code and staying updated with the latest industry trends
              and best practices.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
              sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${stat.gradient} p-[2px]`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm"></div>
                    <div className="relative h-full bg-gray-900/80 backdrop-blur-md p-6 rounded-3xl text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
