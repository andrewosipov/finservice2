import { connect } from 'react-redux';
import { fetchStructure } from '../../actions/structure';
import Select from '../../components/Select/';

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  isLoaded: state.app.isLoaded,
  structure: state.structure
});

const mapDispatchToProps = dispatch => ({
  fetchStructure: () => dispatch(fetchStructure())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select)
