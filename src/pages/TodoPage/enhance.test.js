import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../../reducers';
import enhance from './enhance';

configure({ adapter: new Adapter() });

describe('TodoPage enhance', () => {
  test('should have form props', () => {
    const WarpperComponent = enhance(({ items, onSubmit }) => (
      <div>
        <div className="items">{items ? items.join(',') : ''}</div>
        <button className="onSubmit" onClick={onSubmit} />
      </div>
    ));
    const store = createStore(reducers);
    const RootComponent = () => <Provider store={store}><WarpperComponent /></Provider>;

    expect(mount(<RootComponent />).find('.items').text()).toBe('');
    mount(<RootComponent />).find('.onSubmit').simulate('click', { text: 'mock-data1' });
    mount(<RootComponent />).find('.onSubmit').simulate('click', { text: 'mock-data2' });
    expect(mount(<RootComponent />).find('.items').text()).toBe('mock-data1,mock-data2');
  });
});
