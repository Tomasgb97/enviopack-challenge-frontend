import CatalogFilters from '../Catalog-filters/CatalogFilters';

const Container = () => {
  return (
    <div className="w-full flex- flex-col">
      <CatalogFilters />
      <div className="w-full min-h-96 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-12"></div>
    </div>
  );
};

export default Container;
