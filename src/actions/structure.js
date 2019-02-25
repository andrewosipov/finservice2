import { showLoader, hideLoader } from './app';
import { Structure } from '../api/Api';

export const FETCH_STRUCTURE = 'FETCH_STRUCTURE';
export const STRUCTURE_LOADED = 'STRUCTURE_LOADED';

export const fetchStructure = () => async dispatch => {
  dispatch(showLoader());
  dispatch({ type: FETCH_STRUCTURE });

  const structure = await Structure.fetch();

  dispatch(hideLoader());

  dispatch({
    type: STRUCTURE_LOADED,
    payload: {
      structure
    }
  })
};

