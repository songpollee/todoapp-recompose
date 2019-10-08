import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { reduxForm, reducer as formReducer } from 'redux-form';
import enhance from './enhance';

configure({ adapter: new Adapter() });

describe('Field enhance', () => {
  test('should have form props', () => {
    const FieldComponent = enhance(({ meta: { form }, input: { name } }) => (
      <div>
        <div className="form">{form}</div>
        <div className="name">{name}</div>
      </div>
    ));
    const FormComponent = reduxForm({ form: 'mock-form' })(() => <FieldComponent name="mock-field" />);
    const store = createStore(combineReducers({ form: formReducer }));
    const RootComponent = () => <Provider store={store}><FormComponent /></Provider>;

    expect(mount(<RootComponent />).find('.form').text()).toBe('mock-form');
    expect(mount(<RootComponent />).find('.name').text()).toBe('mock-field');
  });
});
