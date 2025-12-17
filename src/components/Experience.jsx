import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      year: '2019 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance / Various Clients',
      description: 'Delivering end-to-end web solutions including ERP systems, e-commerce platforms, and custom web applications. Specializing in modern JavaScript frameworks and server-side technologies.',
      achievements: [
        'Built scalable web applications serving 10,000+ users',
        'Reduced application load time by 40% through optimization',
        'Led development of multiple enterprise-level projects',
      ],
    },
    {
      year: '2019 - 2021',
      title: 'Web Developer',
      company: 'Early Career',
      description: 'Started journey in web development, working on various projects to build expertise in PHP, Laravel, and modern frontend frameworks.',
      achievements: [
        'Developed 20+ WordPress websites',
        'Created custom Laravel applications',
        'Mastered React.js and Next.js frameworks',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold">{exp.year}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    </div>
                    
                    <p className="text-purple-400 font-medium mb-4">{exp.company}</p>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

