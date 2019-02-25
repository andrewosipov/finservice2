import { STRUCTURE_LOADED } from '../actions/structure';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case STRUCTURE_LOADED:
      return [...action.payload.structure];

    default:
      return state
  }
}
