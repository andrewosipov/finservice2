import { SHOW_LOADER, HIDE_LOADER, STRUCTURE_LOADED } from '../actions/app';

const initialState = {
  isLoading: false,
  isLoaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };

    case HIDE_LOADER:
      return { ...state, isLoading: false };

    case STRUCTURE_LOADED:
      return { ...state, isLoaded: true };

    default:
      return state
  }
}
