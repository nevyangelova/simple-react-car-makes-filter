import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, value, options}) => {
  return (
    <div>
      <div className="custom-select">
        <select
          className="green"
          name={name}
          value={value}
          onChange={onChange}>
          <option>{defaultOption}</option>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })
          }
        </select>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectInput;
