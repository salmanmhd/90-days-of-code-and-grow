'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// 3D Sphere Component
const NoisySphere = () => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.001;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.01;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color="#4B0082" speed={5} distort={0.3} radius={1} />
    </mesh>
  );
};

// Project Component
const Project = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="rounded-lg border border-purple-500 bg-black bg-opacity-50 p-6 backdrop-blur-sm"
  >
    <h3 className="mb-2 text-lg font-bold text-purple-300">{title}</h3>
    <p className="mb-3 text-sm text-gray-300">{description}</p>
    <a
      href={link}
      className="flex items-center text-sm text-purple-400 transition-colors hover:text-purple-300"
    >
      Explore <ExternalLink className="ml-1 h-3 w-3" />
    </a>
  </motion.div>
);

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [cursorX, cursorY]);

  const projects = [
    {
      title: 'NeuroLink',
      description: 'AI-powered brain-computer interface',
      link: '#',
    },
    {
      title: 'QuantumCrypt',
      description: 'Quantum encryption for ultimate security',
      link: '#',
    },
    {
      title: 'HoloArch',
      description: 'Holographic architecture visualization',
      link: '#',
    },
    {
      title: 'BioSynth',
      description: 'Synthetic biology compiler and simulator',
      link: '#',
    },
  ];

  const skills = [
    'Quantum Computing',
    'Neuro-Engineering',
    'Holographic Interfaces',
    'Synthetic Biology',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-purple-500 mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <header className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-6xl font-bold text-transparent"
          >
            Md Salman
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-purple-300"
          >
            Futurist & Technological Visionary
          </motion.p>
        </header>

        <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="h-[400px]">
            <Canvas camera={{ position: [0, 0, 2.5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <NoisySphere />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold text-purple-300">
              About Me
            </h2>
            <p className="leading-relaxed text-gray-300">
              I'm a visionary technologist pushing the boundaries of what's
              possible. My work spans quantum computing, neuro-engineering, and
              synthetic biology, aiming to reshape the future of human-machine
              interaction and unlock the secrets of consciousness and reality
              itself.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-purple-300">
            Cutting-Edge Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-full border border-purple-500 bg-purple-900 bg-opacity-50 px-4 py-2 text-sm text-purple-300 backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-purple-300">
            Groundbreaking Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>

        <footer className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-purple-300">Connect</h2>
          <div className="flex justify-center space-x-6">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-purple-400 transition-colors hover:text-purple-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
