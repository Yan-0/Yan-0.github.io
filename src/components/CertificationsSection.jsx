import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/mock';

const CertificationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements in cybersecurity and technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="bg-slate-900/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${cert.color}20` }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award 
                        size={24} 
                        style={{ color: cert.color }}
                      />
                    </motion.div>
                    
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: cert.color }}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: cert.id * 0.2
                      }}
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  
                  <p className="text-cyan-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar size={14} className="mr-2 text-cyan-400" />
                      <span>{cert.date}</span>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      ID: {cert.credentialId}
                    </div>
                  </div>
                  
                  <motion.div
                    className="flex items-center justify-between mt-auto pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge 
                      style={{ backgroundColor: cert.color }}
                      className="text-white text-xs"
                    >
                      Verified
                    </Badge>
                    
                    <motion.button
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-4xl font-bold text-cyan-400 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
              {certifications.length}+
            </motion.div>
            <p className="text-gray-300">Professional Certifications</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-4xl font-bold text-cyan-400 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            >
              100%
            </motion.div>
            <p className="text-gray-300">Completion Rate</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-4xl font-bold text-cyan-400 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            >
              2024
            </motion.div>
            <p className="text-gray-300">Latest Achievement</p>
          </motion.div>
        </motion.div>

        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-1/4 w-32 h-32 border border-cyan-400/10 rounded-lg transform rotate-12"
            animate={{ 
              rotate: [12, 372],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full"
            animate={{ 
              y: [-30, 30, -30],
              x: [-15, 15, -15]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;