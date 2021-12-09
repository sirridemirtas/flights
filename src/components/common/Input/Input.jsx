import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const inputPropTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  subText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'date', 'number'])
};

const inputDefaultProps = {
  type: 'text'
};

function Input({ defaultValue, label, placeholder, subText, type, ...props }) {
  return (
    <label className={styles.input}>
      {label}
      <input
        type={type && type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete="off"
        {...props}
      />
      {subText && <span>{subText}</span>}
    </label>
  );
}

Input.propTypes = inputPropTypes;
Input.defaultProps = inputDefaultProps;

export default Input;
