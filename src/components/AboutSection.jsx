import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm passionate about creating innovative solutions that bridge the gap between 
              cutting-edge technology and real-world applications. My journey in computer science 
              has been driven by curiosity and a desire to solve complex problems through code.
            </p>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="text-cyan-400" size={20} />
                <span>{personalInfo.location}</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Mail className="text-cyan-400" size={20} />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                rotateY: 10,
                rotateX: 10,
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
              className="perspective-1000"
            >
              <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative text-center">
                    <motion.div
                      className="mb-6"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-4xl font-bold text-cyan-400">SB</div>
                      </div>
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {personalInfo.name}
                      </h3>
                      <p className="text-cyan-400 text-lg mb-4">
                        {personalInfo.title}
                      </p>
                      <p className="text-gray-300">
                        {personalInfo.subtitle}
                      </p>
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                    
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500/20 rounded-full"
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Background decorative elements */}
            <motion.div
              className="absolute -z-10 top-8 left-8 w-32 h-32 border border-cyan-400/10 rounded-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className="absolute -z-10 bottom-8 right-8 w-24 h-24 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;