import React from 'react';
import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { array } from 'prop-types';
import enhance from './enhance';

configure({ adapter: new Adapter() });

describe('ItemList enhance', () => {
  test('items prop is array', () => {
    const WarpperComponent = () => <div />;
    const MockComponent = enhance(WarpperComponent);
    expect(MockComponent.propTypes).toEqual({
      items: array,
    });
  });

  test('should be render empty', () => {
    const WarpperComponent = () => <div>WarpperComponent</div>;
    const MockComponent = enhance(WarpperComponent);
    expect(render(<MockComponent />).text()).not.toBe('WarpperComponent');
  });

  test('should be render component', () => {
    const WarpperComponent = () => <div>WarpperComponent</div>;
    const MockComponent = enhance(WarpperComponent);
    expect(render(<MockComponent items={[1, 2]} />).text()).toBe('WarpperComponent');
  });
});
