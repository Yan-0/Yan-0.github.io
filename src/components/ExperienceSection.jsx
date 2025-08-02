import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';
import { experience, education } from '../data/mock';

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Building className="mr-3 text-cyan-400" size={28} />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="relative"
                >
                  <Card className="bg-slate-900/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">
                            {exp.position}
                          </h4>
                          <p className="text-cyan-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <Badge 
                          style={{ backgroundColor: exp.color }}
                          className="text-white"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-300">
                          <Calendar size={16} className="mr-2 text-cyan-400" />
                          <span>{exp.duration}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-300">
                          <MapPin size={16} className="mr-2 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline connector */}
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ transformOrigin: 'top' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg
                className="mr-3 text-cyan-400"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="relative"
                >
                  <Card className="bg-slate-900/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-cyan-400 font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                        <motion.div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: edu.color }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        />
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-300">
                          <Calendar size={16} className="mr-2 text-cyan-400" />
                          <span>{edu.duration}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-300">
                          <MapPin size={16} className="mr-2 text-cyan-400" />
                          <span>{edu.location}</span>
                        </div>
                        
                        <p className="text-gray-300 font-medium">
                          Field: {edu.field}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline connector */}
                  <motion.div
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ transformOrigin: 'top' }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-10 w-20 h-20 border border-cyan-400/10 rounded-lg transform rotate-45"
            animate={{ 
              rotate: [45, 405],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full"
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;