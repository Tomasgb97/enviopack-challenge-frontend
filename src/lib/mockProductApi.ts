import { Product } from '../types/product';

export const mockProductApiCall = async (): Promise<Product[]> => {
  try {
    const data = await fetch('/data/products.json');
    const prods = await data.json();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prods.productos);
      }, 2000);
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new Error('Error fetching api');
  }
};
