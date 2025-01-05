import { useEffect, useMemo, useState } from 'react';
import CatalogFilters from '../Catalog-filters/CatalogFilters';
import { GetProducts } from '../../../services/products-service';
import { Product } from '../../../types/product';
import CatalogItem from '../Catalog-item/CatalogItem';
import debounce from 'debounce';
import { isMatch } from '../../../utils/isProdMatch';

const Container = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
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

  const FilteredProducts = useMemo(() => {
    return products.filter((prod) => isMatch(prod.title, search));
  }, [search]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filteredResult = (items: Product[]) => {
    if (items.length > 1) {
      return items.map((prod) => {
        return (
          <CatalogItem
            onAddToCart={() => {}}
            key={prod.id}
            image={'/images/image-product.jpg'}
            price={prod.price}
            title={prod.title}
          />
        );
      });
    } else
      return (
        <h1 className="lg:col-start-2">No hay resultados para esta busqueda</h1>
      );
  };

  return (
    <div className="w-full flex-col">
      <CatalogFilters onSearchChange={debounce((e) => setSearch(e), 1500)} />
      <div className="w-full min-h-96 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-12">
        {search.length > 0 && filteredResult(FilteredProducts)}
        {search.length == 0 &&
          products.map((prod) => {
            return (
              <CatalogItem
                onAddToCart={() => {}}
                key={prod.id}
                image={'/images/image-product.jpg'}
                price={prod.price}
                title={prod.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Container;
