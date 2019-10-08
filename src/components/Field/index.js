import React from 'react';
import enhance from './enhance';
import './style.scss';

const Field = ({ className, input, ...rest }) => (
  <input className="Field" {...rest} {...input} />
);

export default enhance(Field);
