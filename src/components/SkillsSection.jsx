import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Code2, 
  Terminal, 
  Brain, 
  MessageSquare, 
  Smartphone, 
  Container, 
  GitBranch, 
  Shield,
  Cpu, 
  BarChart, 
  Database 
} from 'lucide-react';
import { skills } from '../data/mock';

const iconMap = {
  Code2,
  Terminal,
  Brain,
  MessageSquare,
  Smartphone,
  Container,
  GitBranch,
  Shield,
  Cpu,
  BarChart,
  Database
};

const SkillsSection = () => {
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
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => {
            const IconComponent = iconMap[skill.icon];
            
            return (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full"
                      style={{ backgroundColor: `${skill.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent 
                        size={32} 
                        style={{ color: skill.color }}
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {skill.name}
                    </h3>
                    
                    <Badge 
                      variant="secondary" 
                      className="mb-4 bg-slate-800 text-gray-300"
                    >
                      {skill.category}
                    </Badge>
                    
                    <div className="relative pt-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Proficiency</span>
                        <span className="text-sm font-medium text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/10 rounded-lg"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full"
            animate={{ 
              y: [-30, 30, -30],
              x: [-20, 20, -20]
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

export default SkillsSection;