'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800 overflow-hidden">
      {/* Metallic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-white" style={{ letterSpacing: '-0.15em' }}>
              SS
            </span>
            <span className="text-xl sm:text-2xl font-serif text-white" style={{ letterSpacing: '0.05em', fontWeight: 300 }}>
              Grosse
            </span>
          </div>
          
          <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto px-4">
            Desain premium untuk clothing brand Anda. 
            Kualitas terbaik, pola eksklusif, siap produksi.
          </p>
          
          {/* Social Media */}
          <div className="flex gap-3 justify-center">
            {[
              { Icon: Instagram, link: 'https://www.instagram.com/grosse.design/' },
              { Icon: TikTokIcon, link: 'https://www.tiktok.com/@grosse.design' },
              { Icon: Mail, link: 'mailto:designofgrosse@gmail.com' }
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target={link !== '#' ? '_blank' : undefined}
                rel={link !== '#' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-9 h-9 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 hover:from-zinc-600 hover:to-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 overflow-hidden"
              >
                {/* Glossy shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full" />
                <Icon className="w-4 h-4 relative z-10" />
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm text-center">
            © {currentYear} Grosse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
