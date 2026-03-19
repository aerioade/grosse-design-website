'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated metallic background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
      
      {/* Animated metallic orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-zinc-600/30 to-zinc-800/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-zinc-500/20 to-zinc-700/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(113,113,122,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(113,113,122,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-serif font-bold text-white mb-2" style={{ letterSpacing: '-0.15em' }}>
              SS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 md:mb-8" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
              Grosse
            </h1>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4"
          >
            Desain eksklusif untuk clothing brand Anda
          </motion.p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
