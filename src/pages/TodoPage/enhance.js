import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import _ from 'lodash';
import { pushItem } from '../../actions/todoAction';

const formName = 'todo';

const mapStateToProps = (state) => ({
  items: _.get(state, 'todo'),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => {
    dispatch(pushItem(data));
    dispatch(reset(formName));
  }
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: formName }),
);

export default enhance;
