import Input from '../../Common/Input';
import Select from '../../Common/Select';
import { FilterOptions } from '../../../utils/filterOptions';

const CatalogFilters = () => {
  return (
    <div className="w-full flex justify-between items-end pb-2">
      <div className="sm:min-w-48">
        <Input type="text" placeholder="Buscar productos por nombre"></Input>
      </div>

      <div className="lg:w-[10%]">
        <Select label="ORDERNAR POR" options={FilterOptions} />
      </div>
    </div>
  );
};

export default CatalogFilters;
