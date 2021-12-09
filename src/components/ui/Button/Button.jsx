import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from 'react-polymorphic-box';
import styles from './Button.module.scss';

const buttonPropTypes = {
  icon: PropTypes.element,
  href: PropTypes.string,
  label: PropTypes.string,
  reactRouterLink: PropTypes.bool,
  to: PropTypes.string
};

const buttonDefaultProps = {
  reactRouterLink: false
};

function Button({ className, href, icon, label, reactRouterLink, to, ...props }) {
  return (
    <Box
      as={reactRouterLink ? Link : (href ? 'a' : 'button')}
      href={(href && reactRouterLink) || href}
      to={reactRouterLink ? to : undefined}
      className={cn(styles.button, className)}
      {...props}
    >
      {icon}
      {label && <label>{label}</label>}
    </Box>
  );
}

Button.propTypes = buttonPropTypes;
Button.defaultProps = buttonDefaultProps;

export default Button;
