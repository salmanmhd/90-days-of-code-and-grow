'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  Sparkles,
  Book,
} from 'lucide-react';

const Section = ({ title, icon: Icon, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="mb-6 flex items-center text-3xl font-semibold">
      <Icon className="mr-2 text-blue-400" />
      {title}
    </h2>
    {children}
  </motion.section>
);

const Project = ({ title, description, tags, link }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg"
  >
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="mb-4 text-gray-400">{description}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-blue-900 bg-opacity-50 px-2 py-1 text-sm text-blue-300"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={link}
      className="flex items-center text-blue-400 transition-colors hover:text-blue-300"
    >
      View Project <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  </motion.div>
);

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundControls = useAnimation();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    backgroundControls.start({
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    });
  }, [mousePosition, backgroundControls]);

  const projects = [
    {
      title: 'EcoTrack',
      description:
        'A mobile app for tracking and reducing personal carbon footprint.',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'AI Writing Assistant',
      description:
        'An AI-powered tool that helps improve writing style and grammar.',
      tags: ['Python', 'NLP', 'TensorFlow'],
      link: '#',
    },
    {
      title: 'Crypto Portfolio Manager',
      description:
        'A web app for managing and analyzing cryptocurrency investments.',
      tags: ['React', 'Express', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Smart Home Hub',
      description:
        'An IoT platform for connecting and controlling smart home devices.',
      tags: ['IoT', 'Raspberry Pi', 'MQTT'],
      link: '#',
    },
  ];

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'AWS',
    'Docker',
    'Git',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-950 text-gray-100">
      <motion.div
        className="fixed inset-0 z-0"
        animate={backgroundControls}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16">
        <header className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-5xl font-bold text-transparent"
          >
            John Doe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>
        </header>

        <Section title="About Me" icon={User}>
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a passionate developer with over 5 years of experience in
            creating innovative solutions. My expertise spans across web
            development, mobile apps, and AI integration. I'm driven by the
            challenge of solving complex problems and creating user-centric
            applications that make a difference.
          </p>
        </Section>

        <Section title="Skills" icon={Code}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-full border border-blue-700 bg-blue-900 bg-opacity-20 px-3 py-1 text-sm text-blue-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        <Section title="Projects" icon={Briefcase}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </Section>

        <Section title="Education" icon={Book}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Master of Science in Computer Science
              </h3>
              <p className="text-gray-400">Stanford University, 2018-2020</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-gray-400">MIT, 2014-2018</p>
            </div>
          </div>
        </Section>

        <Section title="Get in Touch" icon={Sparkles}>
          <div className="flex justify-center space-x-8">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
