import cn from 'classnames';
import PropTypes from 'prop-types';
import { BookerTypes, Input } from '../';
import AIRPORTS from '../../../constants/AIRPORTS';
import styles from './Search.module.scss';

const searchPropTypes = {};

const searchDefaultProps = {};

function Search() {
  return (
    <div className={cn(styles.search)}>
      {/* <h1>Uçuş Ara</h1> */}
      <ul>
        <li className={styles.active}>Uçuş Ara / Bilet Al</li>
        <li>Check-in / Bilet Yönetimi</li>
        <li>Uçuş Durumu</li>
      </ul>

      <BookerTypes />

      <form className={styles.form}>
        <Input
          label="Nereden"
          placeholder="Kalkış noktası"
          /* subText="İstanbul Havalimanı (IST)" */
          defaultValue={AIRPORTS.IST.CITY}
          required
        />
        <Input
          label="Nereye"
          placeholder="Varış noktası"
          /* subText={AIRPORTS.ESB.NAME}
          defaultValue={AIRPORTS.ESB.CITY} */
          required
        />
        <Input
          label="Tarih"
          type="date"
          defaultValue={(() => (new Date()).toISOString().split('T')[0])()}
          required
        />
        <Input
          label="Yolcu sayısı"
          placeholder="Yolcu sayısı"
          defaultValue="1 Economy Class"
          required
        />
        <button className={styles.searchButton}>ARA</button>
      </form>
    </div>
  );
}

Search.propTypes = searchPropTypes;
Search.defaultProps = searchDefaultProps;

export default Search;
