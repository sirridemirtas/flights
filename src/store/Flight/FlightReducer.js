import { FlightActions } from './FlightActions';

export const FlightReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case FlightActions.SEARCH_FLIGHT:
      return { ...state, searchOptions: { ...state.searchOptions, ...payload } }

    case FlightActions.SELECT_FLIGHT:
      return { ...state, selectedFlight: payload }

    default:
      return state;
  }
};
