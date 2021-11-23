import cn from 'classnames';
import PropTypes from 'prop-types';
import FLIGHTS from '../../../constants/FLIGHTS';
import styles from './SearchResult.module.scss';

const searchResultPropTypes = {};

const searchResultDefaultProps = {};

function SearchResult({className}) {
  return (
      <div className={cn(styles.searchResult, styles.className)}>
        { FLIGHTS.length
          ? `Aramanızla ilgili ${FLIGHTS.length} uçuş bulundu:`
          : 'Aradığınız kriterlerde uçuş bulunamadı.'
        }

        <ul>
          { FLIGHTS.map((flight, i) =>(
            <li key={i}>
            {/* <div>
              {flight.flight_code}
              <span>{flight.plane_model}</span>
            </div> */}

            <div className={styles.time}>
              <div>
                {flight.departure_time}
                <span>{flight.from.IATA_CODE}</span>
              </div>
              <div className={styles.line}></div>
              <div>
                {flight.arrival_time}
                <span>{flight.to.IATA_CODE}</span>
              </div>
            </div>

            <div className={styles.duration}>
              {flight.duration}
              <span>Uçuş süresi</span>
            </div>

            <div className={styles.price}>
              {flight.price.economy}
              <span>Yolcu başına</span>
            </div>

            {/* <div className={styles.flightDetail}>
              details
            </div> */}

          </li>
          ))}
        </ul>
      </div>
  );
}

SearchResult.propTypes = searchResultPropTypes;
SearchResult.defaultProps = searchResultDefaultProps;

export default SearchResult;
