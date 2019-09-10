import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from './SelectInput';
import RadioInput from './RadioInput';
import ReactTooltip from 'react-tooltip'
import Slider from 'rc-slider';

const Form = ({filters,
               disabled,
               allMakes,
               modelsByMake,
               onSubmit,
               onFiltersUpdate}) => {

  // not sure if this breaks React best practices since the component isn't aware of state
  // it might be good to extract the event based functions into a more abstract one
  const onMakeUpdate = (event) => { onFiltersUpdate('make', event.target.value) }
  const onModelUpdate = (event) => { onFiltersUpdate('model', event.target.value) }
  const onEngineCapacityUpdate = (value) => { onFiltersUpdate('engineCapacity', value) }
  const onEnginePowerPSUpdate = (value) => { onFiltersUpdate('enginePowerPS', value) }
  const onEnginePowerKWUpdate = (value) => { onFiltersUpdate('enginePowerKW', value) }
  const onBodyTypeUpdate = (event) => { onFiltersUpdate('bodyType', event.target.value) }
  const onFuelTypeUpdate = (event) => { onFiltersUpdate('fuelType', event.target.value) }

  return (
    <form>
      <h1>Select your vehicles</h1>

      <SelectInput
        name="makes"
        label="Makes"
        value={filters.make}
        defaultOption="Select Vehicle Make"
        options={allMakes}
        onChange={onMakeUpdate}/>

      <SelectInput
        name="model"
        label="Models"
        value={filters.model}
        defaultOption="Select Vehicle Model"
        options={modelsByMake}
        onChange={onModelUpdate}/>

      <RadioInput
        label="Body Type:"
        name="bodyType"
        options={["Cabrio", "Kombi", "Limousine"]}
        updateSelectedRadioFilter={onBodyTypeUpdate}/>

      <RadioInput
        label="Fuel Type:"
        name="fuelType"
        options={["Diesel", "Benzin", "Hybrid"]}
        updateSelectedRadioFilter={onFuelTypeUpdate}
        />

      <div className="slider-wrapper">
        <p className="green"> Engine Capacity </p>
        <Slider
          min={0}
          max={3300}
          onChange={onEngineCapacityUpdate} />
      </div>

      <div className="slider-wrapper">
        <p className="green"> Engine Power PS </p>
        <Slider
          min={0}
          max={350}
          onChange={onEnginePowerPSUpdate} />
      </div>

      <div className="slider-wrapper">
        <p className="green"> Engine Power KW </p>
        <Slider
          min={0}
          max={350}
          onChange={onEnginePowerKWUpdate} />
      </div>
      <div data-tip="You must select all filters before submiting" data-tip-disable={!disabled}>
        <input
          type="submit"
          disabled={disabled}
          value='Find'
          onClick={onSubmit}/>
      </div>
      <ReactTooltip type="light" />
    </form>
  );
};

Form.propTypes = {
  filters: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  allMakes: PropTypes.array.isRequired,
  modelsByMake: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFiltersUpdate: PropTypes.func.isRequired,
};

export default Form;
