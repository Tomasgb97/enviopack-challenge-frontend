import { mockProductApiCall } from '../lib/mockProductApi';
import { Product } from '../types/product';

export const GetProducts = async (): Promise<Product[]> => {
  return await mockProductApiCall();
};
