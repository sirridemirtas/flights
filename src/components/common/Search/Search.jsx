import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../constants/ROUTES';
import { BookerTypes, Input } from '../';
import { FlightActions, FlightContext } from '../../../store/Flight';
import styles from './Search.module.scss';

function Search() {
  const { state, dispatch } = useContext(FlightContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const inputSelector = name => form.querySelector(`[name='${name}']`);

    const payload = {
      //from: inputSelector('from').value,
      //to: inputSelector('to').value,
      departureDate: inputSelector('departureDate').value,
      passenger: (() => {
        const d = inputSelector('passenger').value.split(' ')
        return {
          count: Number(d[0]) || 1,
          cabin: d[1] || 'Economy Class'
        }
      })()
    }

    dispatch({
      type: FlightActions.SEARCH_FLIGHT,
      payload: payload
    });

    navigate(ROUTES.FLIGHT_SELECTION);
  }

  return (
    <div className={styles.search}>
      <ul>
        <li className={styles.active}>Uçuş Ara / Bilet Al</li>
        <li>Check-in / Bilet Yönetimi</li>
        <li>Uçuş Durumu</li>
      </ul>

      <BookerTypes />

      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          name="from"
          label="Nereden"
          placeholder="Kalkış noktası"
          /* subText="İstanbul Havalimanı (IST)" */
          defaultValue={state.searchOptions.from.CITY}
          required
        />
        <Input
          name="to"
          label="Nereye"
          placeholder="Varış noktası"
          /* subText={AIRPORTS.ESB.NAME} */
          defaultValue={state.searchOptions.to.CITY}
          required
        />
        <Input
          name="departureDate"
          label="Tarih"
          type="date"
          defaultValue={
            state.searchOptions.departureDate
          }
          required
        />
        <Input
          name="passenger"
          label="Yolcu sayısı"
          placeholder="Yolcu sayısı"
          defaultValue={`${state.searchOptions.passenger.count} ${state.searchOptions.passenger.cabin}`}
          required
        />
        <button className={styles.searchButton}>ARA</button>
      </form>
    </div>
  );
}

export default Search;
