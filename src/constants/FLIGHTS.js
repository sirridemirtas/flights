import AIRPORTS from './AIRPORTS';

let FLIGHTS = [
  {
    flight_code: 'TK2192',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '02:00',
    arrival_time: '03:05',
    duration: '1s 5d',
    plane_model: 'Boeing 737 Max 8',
    price: {
      economy: 294.99,
      business: 765.99
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
      economy: 242.99,
      business: 765.99
    }
  },
  {
    flight_code: 'TK2126',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '08:00',
    arrival_time: '09:00',
    duration: '1s',
    plane_model: 'Airbus A321',
    price: {
      economy: 302.99,
      business: 773.99
    }
  },
  {
    flight_code: 'TK2134',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '09:00',
    arrival_time: '09:05',
    duration: '1s 5d',
    plane_model: 'Airbus A320',
    price: {
      economy: 282.99,
      business: 773.99
    }
  },
  {
    flight_code: 'TK2138',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '10:00',
    arrival_time: '11:05',
    duration: '1s 5d',
    plane_model: 'Boeing 737 Max 8',
    price: {
      economy: 302.99,
      business: 773.99
    }
  },
  {
    flight_code: 'TK2146',
    from: AIRPORTS.IST,
    to: AIRPORTS.ESB,
    departure_time: '12:00',
    arrival_time: '13:00',
    duration: '1s',
    plane_model: 'Boeing 737 Max 8',
    price: {
      economy: 362.99,
      business: 773.99
    }
  }
];

const monthDiff = (dateFrom, dateTo) => (
  dateTo.getMonth() - dateFrom.getMonth() +
  12 * (dateTo.getFullYear() - dateFrom.getFullYear())
);

const monthlyInflation = (p, m) => {
  const monthlyInflationRate = 1.015; // yearly ≈ 20%
  return Number(p) * Number(monthlyInflationRate ** m);
};

const updatePrice = (price) => {
  let currentDate = new Date();
  let diff = 0;

  if (currentDate.getFullYear() >= 2021) {
    diff = monthDiff(new Date(2021, 11), currentDate);

    if (diff > 0) {
      return Math.ceil(monthlyInflation(price, diff)) + 0.99;
    }
  }

  return price;
}

FLIGHTS = FLIGHTS.map(flight => {
  return {
    ...flight, price: {
      economy: updatePrice(flight.price.economy),
      business: updatePrice(flight.price.business)
    }
  }
});

export default FLIGHTS;
