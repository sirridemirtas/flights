import { FlightActions } from './FlightActions';

export const FlightReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "GET_CUSTOMER":
      return { ...state, authToken: FlightActions.setAuthToken(payload) }

    case "SWITCH_THEME":
      return { ...state, theme: FlightActions.switchTheme(state.theme) }

    case "SET_TITLE":
      document.title = payload
      return { ...state, title: payload }

    default:
      return state;
  }
};
