export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  isNew: boolean;
  shopeeLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Your Brand',
    price: 100000,
    category: 'kaos',
    images: [
      '/products/yb4.jpeg',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
    ],
    description: 'Kaos streetwear urban dengan design modern yang cocok untuk daily wear. Material cotton premium yang nyaman dan breathable. Perfect untuk gaya kasual yang tetap stylish.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 2,
    name: 'Your Brand',
    price: 100000,
    category: 'kaos',
    images: [
      '/products/yb3.jpeg',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    ],
    description: 'Design minimalis yang timeless dengan typography yang clean. Cocok untuk berbagai occasion dan mudah di-mix and match dengan outfit apapun.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 3,
    name: 'Your Brand',
    price: 100000,
    category: 'hoodie',
    images: [
      '/products/yb3.jpeg',
      'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    description: 'Hoodie premium dengan abstract art yang eye-catching. Material fleece tebal dan warm, perfect untuk cuaca dingin. Limited edition design.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 4,
    name: 'Your Brand',
    price: 100000,
    category: 'kaos',
    images: [
      '/products/yb4.jpeg',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    description: 'Kaos dengan vintage patch detail yang memberikan kesan retro dan unique. Setiap piece memiliki karakter tersendiri dengan kombinasi patch yang berbeda.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 5,
    name: 'Your Brand',
    price: 100000,
    category: 'jaket',
    images: [
      '/products/yb3.jpeg',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    ],
    description: 'Bomber jacket eksklusif dengan motif Japanese wave yang iconic. Premium quality dengan detail embroidery yang halus. Limited stock available.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 6,
    name: 'Your Brand',
    price: 100000,
    category: 'tote-bag',
    images: [
      '/products/yb4.jpeg',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&q=80',
    ],
    description: 'Tote bag dengan geometric pattern yang stylish dan functional. Canvas material yang kuat dan tahan lama. Perfect untuk daily activities.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 7,
    name: 'Your Brand',
    price: 100000,
    category: 'hoodie',
    images: [
      '/products/yb3.jpeg',
      'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800&q=80',
    ],
    description: 'Hoodie dengan graffiti art yang bold dan expressive. Design unik hasil kolaborasi dengan street artist lokal. Statement piece untuk streetwear enthusiast.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 8,
    name: 'Your Brand',
    price: 100000,
    category: 'kaos',
    images: [
      '/products/yb4.jpeg',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    description: 'Kaos dengan design inspired by nature menggunakan organic cotton. Eco-friendly dan comfortable untuk everyday wear. Artwork yang fresh dan calming.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 9,
    name: 'Your Brand',
    price: 100000,
    category: 'kaos',
    images: [
      '/products/yb4.jpeg',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    ],
    description: 'Premium quality kaos dengan street design yang edgy dan modern. Screen printing berkualitas tinggi yang tidak mudah luntur. Must-have untuk koleksi streetwear.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
  {
    id: 10,
    name: 'Your Brand',
    price: 100000,
    category: 'hoodie',
    images: [
      '/products/yb3.jpeg',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    description: 'Oversized hoodie dengan fit yang relaxed dan comfortable. Material premium fleece yang soft dan warm. Classic design yang never goes out of style.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

  {
    id: 11,
    name: 'Your Brand',
    price: 100000,
    category: 'hoodie',
    images: [
      '/products/yb3.jpeg',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    description: 'Oversized hoodie dengan fit yang relaxed dan comfortable. Material premium fleece yang soft dan warm. Classic design yang never goes out of style.',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },
];


