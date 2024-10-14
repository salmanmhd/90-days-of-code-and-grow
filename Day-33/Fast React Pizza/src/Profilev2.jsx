'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, Sparkles, Book } from 'lucide-react'

const Section = ({ title, icon: Icon, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <h2 className="text-3xl font-semibold mb-6 flex items-center">
      <Icon className="mr-2 text-blue-400" />
      {title}
    </h2>
    {children}
  </motion.section>
)

const Project = ({ title, description, tags, link }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="text-sm bg-blue-900 bg-opacity-50 text-blue-300 px-2 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    <a href={link} className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
      View Project <ExternalLink className="ml-2 w-4 h-4" />
    </a>
  </motion.div>
)

const AnimatedCube = () => {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time / 4) / 2
    meshRef.current.rotation.y = Math.sin(time / 2) / 2
    meshRef.current.position.y = Math.sin(time) / 10
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const backgroundControls = useAnimation()

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  useEffect(() => {
    backgroundControls.start({
      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    })
  }, [mousePosition, backgroundControls])

  const projects = [
    {
      title: "EcoTrack",
      description: "A mobile app for tracking and reducing personal carbon footprint.",
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "AI Writing Assistant",
      description: "An AI-powered tool that helps improve writing style and grammar.",
      tags: ["Python", "NLP", "TensorFlow"],
      link: "#"
    },
    {
      title: "Crypto Portfolio Manager",
      description: "A web app for managing and analyzing cryptocurrency investments.",
      tags: ["React", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Smart Home Hub",
      description: "An IoT platform for connecting and controlling smart home devices.",
      tags: ["IoT", "Raspberry Pi", "MQTT"],
      link: "#"
    }
  ]

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker', 'Git']

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        animate={backgroundControls}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <header className="text-center mb-16">
          <div className="w-full h-[300px] mb-8">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedCube />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
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
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a passionate developer with over 5 years of experience in creating innovative solutions. 
            My expertise spans across web development, mobile apps, and AI integration. I'm driven by the 
            challenge of solving complex problems and creating user-centric applications that make a difference.
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
                className="bg-blue-900 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        <Section title="Projects" icon={Briefcase}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </Section>

        <Section title="Education" icon={Book}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
              <p className="text-gray-400">Stanford University, 2018-2020</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
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
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}