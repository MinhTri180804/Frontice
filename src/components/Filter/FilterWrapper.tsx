import { Button } from '../common';
import './FilterWrapper.scss';
import Filter from './Partials/Filter';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
const FilterWrapper: React.FC = () => {
  return (
    <>
      <div className="container-filter-wrapper">
        <div className="title-filter">Filters</div>
        <div className="filter">
          <Filter title="Title Filter" inputType="text" />
          <Filter title="Title Filter" inputType="text" />
          <Filter title="Title Filter" inputType="text" />
        </div>
        <div className="action">
          <Button
            label="Label"
            size="medium"
            type="secondary"
            iconPosition="right"
            Icon={() => <ArrowLongRightIcon />}
          />
        </div>
      </div>
    </>
  );
};
export default FilterWrapper;
