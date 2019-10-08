import React from 'react';
import './style.scss';

const Button = ({ className, ...rest }) => (
  <button className="Button" {...rest} />
);

export default Button;
