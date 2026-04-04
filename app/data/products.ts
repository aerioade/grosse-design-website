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


];


