import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.scss';

const radioButtonPropTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

const radioButtonDefaultProps = {
  defaultChecked: false
};

function RadioButton({className, defaultChecked, label, name, value}) {
  return (
    <label className={cn(styles.radioButton, className)}>
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <span></span>{label}
    </label>
  );
}

RadioButton.propTypes = radioButtonPropTypes;
RadioButton.defaultProps = radioButtonDefaultProps;

export default RadioButton;
