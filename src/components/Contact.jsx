import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 89808713871',
      link: 'https://wa.me/9189808713871',
      color: 'from-green-500 to-emerald-600',
      description: 'Call or WhatsApp me anytime',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'pavandube.freelance@gmail.com',
      link: 'mailto:pavandube.freelance@gmail.com',
      color: 'from-blue-500 to-cyan-600',
      description: 'Send me an email for inquiries',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <MessageCircle className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or collaboration. I'm always open to new opportunities and exciting challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${method.color} p-[2px]`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm"></div>
                  
                  <div className="relative h-full bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl text-center">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {method.label}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {method.description}
                    </p>
                    
                    <p className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                      {method.value}
                    </p>

                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} opacity-10 rounded-full blur-2xl -z-10 group-hover:opacity-20 transition-opacity`}></div>
                    <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${method.color} opacity-10 rounded-full blur-xl -z-10 group-hover:opacity-20 transition-opacity`}></div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
