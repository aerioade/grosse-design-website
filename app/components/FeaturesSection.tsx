'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Package } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Desain Premium',
    description: 'Desain eksklusif dengan kualitas tinggi',
  },
  {
    icon: Zap,
    title: 'Proses Cepat',
    description: 'Langsung bisa digunakan untuk produksi',
  },
  {
    icon: Shield,
    title: 'Garansi Kepuasan',
    description: 'Revisi gratis hingga puas',
  },
  {
    icon: Package,
    title: 'File Lengkap',
    description: 'File siap cetak berbagai format',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Metallic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(113,113,122,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Metallic border */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 rounded-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 group-hover:border-zinc-600 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-orange-800/50"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
