import { useContext } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FlightActions, FlightContext } from '../../../store/Flight';
import ROUTES from '../../../constants/ROUTES';
import FLIGHTS from '../../../constants/FLIGHTS';
import { Button } from '../../ui';
import styles from './SearchResult.module.scss';

function SearchResult() {
  const { state, dispatch } = useContext(FlightContext);
  const navigate = useNavigate();

  const handleSelectFlight = flight => event => {
    event.preventDefault();

    dispatch({
      type: FlightActions.SELECT_FLIGHT,
      payload: { ...flight }
    });

    navigate(ROUTES.PASSENGER_DETAILS);
  }

  const localeDate = date => new Date(date).toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (<>
    <div className={cn(styles.searchResult, styles.className)}>
      <div className={cn(styles.options, 'glass')}>
        <label>Uçuş: <b>{state.searchOptions.from.CITY} ⟶ {state.searchOptions.to.CITY}</b></label>
        <label>Gidiş: <b>{localeDate(new Date(
          Date.parse(state.searchOptions.departureDate)
        ))}</b></label>
        <label>Yolcu: <b>1 Eco Class</b></label>
        <label>Uçuş Tipi: <b>{state.searchOptions.bookerType.label}, direkt</b></label>
        {/* <div className={styles.count}>
          {FLIGHTS.length
            ? `Aramanızla ilgili ${FLIGHTS.length} uçuş bulundu:`
            : 'Aradığınız kriterlerde uçuş bulunamadı.'}
        </div> */}
      </div>
      <table>
        <thead>
          <tr>
            <th>Kalkış</th>
            <th></th>
            <th>Varış</th>
            <th>Süre</th>
            <th>Fiyat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {FLIGHTS.map((flight, i) => (
            <tr key={i}>
              <td className={styles.departureTime}>
                <b>{flight.departure_time}</b>
                <span>{flight.from.IATA_CODE} - {flight.from.CITY}</span>
              </td>
              <td className={styles.arrow}>
                <span>Direkt Uçuş</span>
                ⟶
              </td>
              <td className={styles.arrivalTime}>
                {flight.arrival_time}
                <span>{flight.to.IATA_CODE} - {flight.to.CITY}</span>
              </td>
              <td className={styles.duration}>
                {flight.duration}
                <span>Uçuş süresi</span>
              </td>
              <td className={styles.price}>
                <b>₺{flight.price.economy}</b>
                <span>Yolcu başına</span>
              </td>
              <td className={styles.tdActions}>
                <Button className={styles.selectButton}
                  onClick={handleSelectFlight(flight)}
                  label="Seç"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>);
}

export default SearchResult;
