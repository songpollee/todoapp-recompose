import React from 'react';
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import renderEmptyOnProps from './renderEmptyOnProps';

configure({ adapter: new Adapter() });

describe('renderEmptyOnProps hoc', () => {
  test('should be render empty', () => {
    const WarpperComponent = () => <div>WarpperComponent</div>;
    const MockComponent = renderEmptyOnProps(({ isEmpty }) => isEmpty)(WarpperComponent);
    expect(render(<MockComponent isEmpty/>).text()).not.toBe('WarpperComponent');
  });

  test('should be render component', () => {
    const WarpperComponent = () => <div>WarpperComponent</div>;
    const MockComponent = renderEmptyOnProps(({ isEmpty }) => isEmpty)(WarpperComponent);
    expect(render(<MockComponent />).text()).toBe('WarpperComponent');
  });
});
