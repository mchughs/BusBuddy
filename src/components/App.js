import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import SearchReviews from './SearchReviews';

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(SearchReviews);

export default App;
