'use client';

import { motion } from 'framer-motion';

const categories = [
  { id: 'all', name: 'Semua Desain' },
  { id: 'kaos', name: 'Kaos' },
  { id: 'hoodie', name: 'Hoodie' },
  { id: 'jaket', name: 'Jaket' },
  { id: 'tote-bag', name: 'Tote Bag' },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-700/50'
              : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}
