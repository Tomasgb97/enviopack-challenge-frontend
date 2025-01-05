import Input from '../../Common/Input';
import Select from '../../Common/Select';
import { FilterOptions } from '../../../utils/filterOptions';
import React from 'react';
import { SortEnum } from '../../../types/sortEnum';

interface CatalogFiltersProps {
  onSearchChange: (e: string) => void;
  onSortChange: (e: SortEnum) => void;
}
const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  onSearchChange,
  onSortChange,
}) => {
  return (
    <div className="w-full flex justify-between items-end pb-4">
      <div className="sm:min-w-48">
        <Input
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
          type="text"
          placeholder="Buscar productos por nombre"
        ></Input>
      </div>

      <div className="lg:w-[10%]">
        <Select
          onChange={(e) => {
            onSortChange(e.target.value as SortEnum);
          }}
          label="ORDERNAR POR"
          options={FilterOptions}
        />
      </div>
    </div>
  );
};

export default CatalogFilters;
