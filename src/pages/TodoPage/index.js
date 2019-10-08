import React from 'react';
import Field from '../../components/Field';
import Button from '../../components/Button';
import ItemList from '../../components/ItemList';
import enhance from './enhance';
import './style.scss';

const TodoPage = ({ items, handleSubmit }) => (
  <div className="TodoPage">
    <form onSubmit={handleSubmit}>
      <Field name="text" />
      <Button type="submit">Submit</Button>
    </form>
    <ItemList items={items} />
  </div>
);

export default enhance(TodoPage);
