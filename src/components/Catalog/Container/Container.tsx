import { useEffect, useState } from 'react';
import CatalogFilters from '../Catalog-filters/CatalogFilters';
import { GetProducts } from '../../../services/products-service';
import { Product } from '../../../types/product';

const Container = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetProducts();
        setProducts(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full flex- flex-col">
      <CatalogFilters />
      <div className="w-full min-h-96 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-12">
        {products.map((prod) => {
          return <p key={prod.id}>{prod.title}</p>;
        })}
      </div>
    </div>
  );
};

export default Container;
