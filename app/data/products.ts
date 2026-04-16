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
    price: 178000,
    category: 'kaos',
    images: [
      '/products/kings will/kings will shirt v2 look.png',
      '/products/kings will/kings will long shirt v2 look.png',
      '/products/kings will/kings will v2 white background.png',
      '/products/kings will/GROSSE GROSSE GROSSE.png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

  {
    id: 2,
    name: 'Fake it till you make it',
    price: 199000,
    category: 'kaos',
    images: [
      '/products/fake it til you make it/fake it til you make it v2  black shirt.png',
      '/products/fake it til you make it/fake it til you make it v2 long shirt.png',
      '/products/fake it til you make it/fake it til you make it v2.png',
      '/products/fake it til you make it/GROSSE GROSSE GROSSE.png'
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'mailto:designofgrosse@gmail.com',
  },

  {
    id: 3,
    name: 'You shot me',
    price: 149000,
    category: 'kaos',
    images: [
      '/products/you shot me/you shot me shirt look.png',
      '/products/you shot me/you shot me long shirt look.png',
      '/products/you shot me/you shot me.png',
      '/products/you shot me/GROSSE GROSSE GROSSE.png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

  {
    id: 4,
    name: 'Tree',
    price: 199000,
    category: 'kaos',
    images: [
      '/products/tree/tree shirt mockup.png',
      '/products/tree/tree long shirt mockup.png',
      '/products/tree/DESIGN TREE1.png',
      '/products/tree/GROSSE GROSSE GROSSE.png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

  {
    id: 5,
    name: 'Receipt Supercar',
    price: 139000,
    category: 'kaos',
    images: [
      '/products/receipt/receipt shirt mockup.png',
      '/products/receipt/receipt long shirt mockup.png',
      '/products/receipt/receipt.png',
      '/products/receipt/GROSSE GROSSE GROSSE (1).png',
    ],
    description: 'design by : @rizz',
    isNew: false,
    shopeeLink: 'https://shopee.co.id',
  },

];


