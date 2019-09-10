import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {Form} from '../../containers/Form';
import {NotificationContainer, NotificationManager} from 'react-notifications';

describe ('Form Page', () => {
  it('sets notification message when modelsByMake are not present', () => {
    const props = {
      modelsByMake: [],
      getModelsByMake: () => { return Promise.resolve(); }
    };
    const wrapper = mount(<Form {...props}/>);

    expect(NotificationManager.warning()).toBeCalled();
  });
});
