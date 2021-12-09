import { createContext, useReducer } from 'react';
import { FlightReducer } from './FlightReducer';
import BOOKER_TYPES from '../../constants/BOOKER_TYPES';
import AIRPORTS from '../../constants/AIRPORTS';

const FlightContext = createContext(null);

const FlightProvider = ({ ...props }) => {
  const initialState = {
    searchOptions: {
      bookerType: BOOKER_TYPES.ONE_WAY,
      from: AIRPORTS.IST,
      to: AIRPORTS.ESB,
      departureDate: (() => (new Date()).toISOString().split('T')[0])(),
      returnDate: null,
      passenger: {
        count: 1,
        cabin: 'Economy Class'
      }
    },
    searchResults: null,
    selectedFlight: null,
  };

  const [state, dispatch] = useReducer(FlightReducer, initialState);

  return (
    <FlightContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FlightContext.Provider>
  );
}

export { FlightProvider, FlightContext };
