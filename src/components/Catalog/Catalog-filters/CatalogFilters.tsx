import Input from '../../Common/Input';
import Select from '../../Common/Select';
import { FilterOptions } from '../../../utils/filterOptions';
import React from 'react';

interface CatalogFiltersProps {
  onSearchChange: (e: string) => void;
}
const CatalogFilters: React.FC<CatalogFiltersProps> = ({ onSearchChange }) => {
  return (
    <div className="w-full flex justify-between items-end pb-2">
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
        <Select label="ORDERNAR POR" options={FilterOptions} />
      </div>
    </div>
  );
};

export default CatalogFilters;
