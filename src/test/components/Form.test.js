import expect from 'expect';
import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';
import Form from '../../components/Form';

function setup(fetching) {
  const props = {
    make: "",
    model: "",
    allMakes: [],
    modelsByMake: [],
    onSubmit: () => {},
    onChangeMakeDropdown: () => {},
    onChangeModelDropdown: () => {},
    onFiltersUpdate: () => {},
    setDefaultValue: () => {}
  };
  //
  // return shallow( <Form { ...props
  //   }
  //   />);
}

  describe('Form container', () => {
    it('renders form and h1', () => {
      const wrapper = setup(false);
      expect(wrapper.find('form').length).toBe(1);
      expect(wrapper.find('h1').text()).toEqual('Select your vehicles');
    });

    it('save button is disabled when filters are not selected on render', () => {
      const wrapper = setup(false);

      expect(wrapper.find('input').props().disabled).toBe(true);
    });

    it('save button is enabled when filters are selected', () => {
      const wrapper = setup(true);
      this.props.filters = "dummy_filters"

      expect(wrapper.find('input').props().disabled).toBe(false);
    });
  });
