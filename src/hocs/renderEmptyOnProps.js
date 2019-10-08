import { branch, renderComponent } from 'recompose';
import Empty from '../components/Empty';

const renderEmptyOnProps = (callback) => branch(callback, renderComponent(Empty));

export default renderEmptyOnProps;
