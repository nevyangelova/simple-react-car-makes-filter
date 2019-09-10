import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({name, label, options, updateSelectedRadioFilter}) => {
  return (
    <div className="radio-input">
      <label className="green">{label}</label>
      <div className="ratio-buttons-container" onChange={updateSelectedRadioFilter} >
        {options.map((option) => {
          return <label key={option}>{option}<input type="radio" value={option} name={name}/></label>;
        })
        }
      </div>
    </div>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  updateSelectedRadioFilter: PropTypes.func.isRequired
};

export default RadioInput;
