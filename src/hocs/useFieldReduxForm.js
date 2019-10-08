import React from 'react';
import { Field } from 'redux-form';

const useFieldReduxForm = (WapperComponent) => (props) => (
  <Field component={WapperComponent} {...props} />
);

export default useFieldReduxForm;
