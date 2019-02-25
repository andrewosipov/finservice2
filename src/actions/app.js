export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const STRUCTURE_LOADED = 'STRUCTURE_LOADED';

export const showLoader = () => ({
  type: SHOW_LOADER,
  payload: {
    isLoading: true
  }
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
  payload: {
    isLoading: false
  }
});
