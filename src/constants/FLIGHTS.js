import AIRPORTS from './AIRPORTS';

const FLIGHTS = [
  {
    flight_code: 'TK2192',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '02:00',
    arrival_time: '03:05',
    duration: '1s 5d',
    plane_model: 'Boeing 737 Max 8',
    price: {
      economy: 'TRY 294,99',
      business: 'TRY 765,99'
    }
  },
  {
    flight_code: 'TK7240',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '06:45',
    arrival_time: '07:45',
    duration: '1s',
    plane_model: 'Boeing 737-800',
    price: {
      economy: 'TRY 242,99',
      business: 'TRY 765,99'
    }
  }
];

export default FLIGHTS;
