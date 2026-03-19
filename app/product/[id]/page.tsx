'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '../../data/products';

export default function ProductDetail() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Product not found</h1>
          <Link href="/" className="text-zinc-400 hover:text-zinc-300">
            Back to catalog
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleShopeeClick = () => {
    window.open(product.shopeeLink, '_blank');
  };

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
      
      {/* Back button */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to catalog</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              className="relative aspect-square bg-zinc-900 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}

              {/* Image indicator dots */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-zinc-500'
                        : 'border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Badge */}
            {product.isNew && (
              <div className="inline-block">
                <div className="relative bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg shadow-zinc-900/50">
                  {/* Glossy shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-full" />
                  <span className="relative z-10">BARU</span>
                </div>
              </div>
            )}

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-3xl md:text-4xl font-bold text-white">
              Rp {product.price.toLocaleString('id-ID')}
            </div>

            {/* Description */}
            <p className="text-lg text-zinc-400 leading-relaxed">
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t border-zinc-800" />

            {/* Action Button */}
            <button
              onClick={handleShopeeClick}
              className="relative w-full bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-700 hover:from-zinc-400 hover:via-zinc-500 hover:to-zinc-600 text-white py-4 rounded-xl flex items-center justify-center gap-3 font-semibold text-lg shadow-lg shadow-zinc-900/50 hover:shadow-zinc-600/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glossy shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
              <ShoppingCart className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Contact us!</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
