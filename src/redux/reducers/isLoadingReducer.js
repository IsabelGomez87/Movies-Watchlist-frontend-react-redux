import actionTypes from '../actions/actionTypes';

const isLoadingReducer = (isLoading = false, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return !isLoading;
    default:
      return isLoading;
  }
};

export default isLoadingReducer;
