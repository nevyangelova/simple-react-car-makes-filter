import React from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({robotImageSrc, vehicle}) => {
  return (
    <div className="vehicle-card">
      <div className="banner"><img className="robot-image" alt="placeholder-img" src={robotImageSrc}/></div>
      <h1 className="heading">{vehicle.make} {vehicle.model}</h1>
      <div className="card-info-wrapper">
        <div className="card-info">
          <div className="value">{vehicle.enginePowerPS}</div>
          Engine Power PS
        </div>
        <div className="card-info second">
          <div className="value">{vehicle.enginePowerKW}</div>
          Engine Power KW
        </div>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <div className="value">{vehicle.fuelType}</div>
          Fuel Type
        </div>
        <div className="card-info second">
          <div className="value">{vehicle.bodyType}</div>
          Body Type
        </div>
      </div>
      <div className='engine-capacity'>Engine Capacity: <span className="purple">{vehicle.engineCapacity}</span></div>
    </div>
  );
};

VehicleCard.propTypes = {
  vehicle: PropTypes.object.isRequired,
  robotImageSrc: PropTypes.string.isRequired
};

export default VehicleCard;
