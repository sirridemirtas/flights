import PropTypes from 'prop-types';
import BOOKER_TYPES from '../../../constants/BOOKER_TYPES';
import { RadioButton } from '../../ui';
import styles from './BookerTypes.module.scss';

const bookerTypesPropTypes = {
  name: PropTypes.string
};

const bookerTypesDefaultProps = {
  name: 'bookerType'
};

function BookerTypes({name}) {
  return (
    <div className={styles.bookerTypes}>
      { Object.values(BOOKER_TYPES).map((bookerType, i) => (
        <RadioButton
          key={i}
          name={name}
          label={bookerType.label}
          value={bookerType.value}
          defaultChecked={bookerType.defaultChecked}
        />
      )) }
    </div>
  );
}

BookerTypes.propTypes = bookerTypesPropTypes;
BookerTypes.defaultProps = bookerTypesDefaultProps;

export default BookerTypes;
