import React from 'react';
import VehicleCard from '../components/VehicleCard';
import {NotificationManager} from 'react-notifications';
import {scroller} from 'react-scroll';

export class Vehicles extends React.Component {
  componentDidUpdate() {
    if (this.props.vehicles.length === 0) {
      NotificationManager.warning("Oops, no vehicles found with the specified filters");
    } else {
      scroller.scrollTo('container', {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50
      })
    }
  }

  render() {
    return (
      <div className="flex-wrap">
        <div className="container">
          {
            this.props.vehicles.map((vehicle, index) => {
              let imgLink = `https://robohash.org/${index}?set=set3`;

              return <VehicleCard
                key={index}
                vehicle={vehicle}
                robotImageSrc={imgLink}
              />
            })
          }
        </div>
        {this.props.vehicles.length > 1 && <span className="right-arrow">></span>}
      </div>
    );
  }
}

export default Vehicles;
