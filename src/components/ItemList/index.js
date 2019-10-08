import React from 'react';
import _ from 'lodash';
import Item from '../Item';
import enhance from './enhance';

const ItemList = ({ items, setFilterStatus }) => (
  <div className="ItemList">
    {_.map(items, item => (<Item>{_.get(item, 'text', '')}</Item>))}
  </div>
);

export default enhance(ItemList);
