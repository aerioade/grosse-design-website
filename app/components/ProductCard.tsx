'use client';

import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  isNew?: boolean;
  shopeeLink?: string;
}

export function ProductCard({ id, name, price, images, isNew }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${id}`}>
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Metallic border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-600 transition-all duration-300">
          {/* Image container */}
          <div className="relative aspect-square overflow-hidden bg-zinc-950">
            <motion.img
              src={images[0]}
              alt={name}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Metallic shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '200%' : '-100%' }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Badges */}
            {isNew && (
              <div className="absolute top-3 left-3 z-10">
                <div className="relative bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg shadow-zinc-900/50">
                  {/* Glossy shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-full" />
                  <span className="relative z-10">BARU</span>
                </div>
              </div>
            )}
            
            {/* View Details overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-700 hover:from-zinc-400 hover:via-zinc-500 hover:to-zinc-600 text-white py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm sm:text-base shadow-lg shadow-zinc-900/50 transition-all duration-300 hover:shadow-zinc-600/50 overflow-hidden">
                {/* Glossy shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
                <Eye className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Lihat Detail</span>
              </div>
            </motion.div>
          </div>
          
          {/* Product info */}
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-zinc-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-zinc-300 group-hover:to-zinc-500 group-hover:bg-clip-text transition-all duration-300">
              {name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">
                Rp {price.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
