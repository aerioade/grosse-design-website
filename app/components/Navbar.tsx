'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Menu, Search, User, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-800 shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <span className="text-4xl font-bebas text-white" style={{ letterSpacing: '-0.08em', animation: 'shadowMove 4s ease-in-out infinite' }}>
              Grosse
            </span>
          </motion.div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-4">
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Shopee</span>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
            
            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-300"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
