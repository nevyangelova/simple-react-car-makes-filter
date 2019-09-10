import React, { Component } from 'react';
import Form from '../containers/Form';
import Vehicles from '../containers/Vehicles';
import '../stylesheets/containers/App.css';
import {NotificationContainer} from 'react-notifications';

class App extends Component {
  constructor() {
    super();

    this.state = {
      vehicles: []
    }
  }

  fetchVehicles(filters) {
    this.fetchWithRetry(`http://localhost:8080/api/vehicles?make=${filters.make}&model=${filters.model}`)
      .then((vehicles) => {
        this.setState({
          vehicles: this.filterVehicles(vehicles, filters)
        });
      });
  }

  filterVehicles(vehicles, filters) {
    return vehicles.filter((vehicle) => {
      return vehicle.engineCapacity < filters.engineCapacity &&
      vehicle.enginePowerKW < filters.enginePowerKW &&
      vehicle.enginePowerPS < filters.enginePowerPS &&
      vehicle.bodyType === filters.bodyType &&
      vehicle.fuelType === filters.fuelType;
    });
  }

  // Handle 503's by retrying the request
  // Nice-to-have would be to have it as a 'util' function
  fetchWithRetry(url, retry = 5) {
    return fetch(url).then(res => {
      if (res.status === 503 && retry > 0) {
        return this.fetchWithRetry(url, retry - 1);
      }

      return res.json();
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          fetchVehicles={this.fetchVehicles.bind(this)}
          fetchWithRetry={this.fetchWithRetry.bind(this)}
          />
        <Vehicles vehicles={this.state.vehicles}/>
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
