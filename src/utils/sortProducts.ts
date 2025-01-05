import { Product } from '../types/product';
import { SortEnum } from '../types/sortEnum';

export const sortProducts = (products: Product[], order: SortEnum) => {
  const prodCopy = [...products];
  if (order == SortEnum.ASCENDING) {
    const prodsAsc = prodCopy.sort((a, b) => {
      return a.price - a.discount - (b.price - b.discount);
    });
    return prodsAsc;
  } else {
    const prodsDesc = prodCopy.sort((a, b) => {
      return b.price - b.discount - (a.price - a.discount);
    });
    return prodsDesc;
  }
};
