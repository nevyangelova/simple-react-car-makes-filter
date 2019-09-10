import React from 'react';
import Form from '../components/Form';
import {NotificationManager} from 'react-notifications';

export class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        enginePowerPS: null,
        enginePowerKW: null,
        fuelType: null,
        bodyType: null,
        engineCapacity: null,
        make: "",
        model: "",
      },
      allMakes: [],
      sliderValues: {},
      modelsByMake: []
    };

    this.updateSelectedFilters = this.updateSelectedFilters.bind(this);
    this.getModelsByMake = this.getModelsByMake.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.fetchVehicles = this.props.fetchVehicles.bind(this);
  }

  componentDidMount() {
    this.props.fetchWithRetry("http://localhost:8080/api/makes")
      .then((makes) => {
        this.setState({
          allMakes: makes
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters.make !== this.state.filters.make) {
      this.getModelsByMake(this.state.filters.make);
    }
  }

  getModelsByMake(make) {
    this.props.fetchWithRetry(`http://localhost:8080/api/models?make=${make}`)
      .then((models) => {
        this.setState({
          modelsByMake: models
        });

        if (models.length === 0) {
          NotificationManager.warning(`Oops, no registered ${make} models found`);
        }
      });
  }

  updateSelectedFilters(filter, value) {
    let filterObject = {};
    filterObject[filter] = value;

    const filters = Object.assign({}, this.state.filters, filterObject);
    this.setState({
      filters
    })
  }

  submitForm(event) {
    event.preventDefault();

    this.fetchVehicles(this.state.filters);
  }

  render() {
    const disabled = Object.values(this.state.filters).some(val => (val === null));

    return (
      <div>
        <Form
          filters={this.state.filters}
          disabled={disabled}
          onFiltersUpdate={this.updateSelectedFilters}
          onSubmit={this.submitForm}
          allMakes={this.state.allMakes}
          modelsByMake={this.state.modelsByMake}
        />
      </div>
    );
  }
}

export default FormPage;
