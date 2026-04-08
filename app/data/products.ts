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
    name: 'Kings will',
    price: 150000,
    category: 'kaos',
    images: [
      '/products/king_s will shirt v2 look.png',
      '/products/king_s will long shirt v2 look (1).png',
      '/products/king_s will v2.png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

  {
    id: 2,
    name: 'Fake it till you make it',
    price: 150000,
    category: 'kaos',
    images: [
      '/products/fake it til you make it v2  black shirt.png',
      '/products/fake it til you make it v2 long shirt.png',
      '/products/fake it til you make it v2 transparent.png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

  {
    id: 3,
    name: 'You shot me',
    price: 150000,
    category: 'kaos',
    images: [
      '/products/you shot me look (1) (1).png',
      '/products/you shot me long shirt look (1).png',
      '/products/you shot me (no background).png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

];


