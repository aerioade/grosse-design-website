'use client';

import { motion } from 'framer-motion';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Moving neon gradient background */}
      <div 
        className="fixed inset-0 opacity-90" 
        style={{
          background: 'linear-gradient(-45deg, #000000, #1a1a2e, #16213e, #0f3460, #000000)',
          backgroundSize: '400% 400%',
          animation: 'gradientMove 8s ease infinite'
        }}
      />
      
      {/* Abstract morphing shapes */}
      <div 
        className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-35 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #1f2937 100%)',
          animation: 'morphShape 10s ease-in-out infinite, float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="fixed top-[20%] right-[-10%] w-[500px] h-[500px] opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #451a03 0%, #581c87 100%)',
          animation: 'morphShape 12s ease-in-out infinite reverse, float 9s ease-in-out infinite'
        }}
      />
      <div 
        className="fixed bottom-[-10%] left-[30%] w-[550px] h-[550px] opacity-25 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #134e4a 0%, #0f172a 100%)',
          animation: 'morphShape 11s ease-in-out infinite, float 10s ease-in-out infinite reverse'
        }}
      />
      <div 
        className="fixed bottom-[10%] right-[20%] w-[450px] h-[450px] opacity-33 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          animation: 'morphShape 9s ease-in-out infinite reverse, float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="fixed top-[40%] left-[50%] w-[520px] h-[520px] opacity-28 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, #422006 0%, #7c2d12 100%)',
          animation: 'morphShape 12s ease-in-out infinite, float 8.5s ease-in-out infinite reverse',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <div className="relative z-10">
        {/* Header Section - Logo & Description */}
        <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Logo */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas text-white" style={{ letterSpacing: '-0.08em', animation: 'shadowMove 4s ease-in-out infinite' }}>
                  Grosse
                </h1>
              </div>
              
              {/* Description */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 sm:px-8 sm:py-4 border border-white/20 inline-block">
                  <p className="text-sm sm:text-base md:text-lg text-zinc-300">
                    A direct channel for designers to drop and sell their apparel concepts
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section with rounded container */}
        <section className="pb-12 sm:pb-16 md:pb-20 -mt-8 sm:-mt-10 md:-mt-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 md:p-12 border border-white/20"
            >
              {/* Products grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}