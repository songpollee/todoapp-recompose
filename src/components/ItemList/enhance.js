import _ from 'lodash';
import { array } from 'prop-types';
import { compose, setPropTypes } from 'recompose';
import renderEmptyOnProps from '../../hocs/renderEmptyOnProps';

const enhance = compose(
  setPropTypes({ items: array }),
  renderEmptyOnProps(({ items }) => _.isEmpty(items))
);

export default enhance;
