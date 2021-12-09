import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from 'react-polymorphic-box';
import styles from './IconButton.module.scss';

const iconButtonPropTypes = {
  icon: PropTypes.element.isRequired,
  href: PropTypes.string,
  label: PropTypes.string,
  reactRouterLink: PropTypes.bool,
  to: PropTypes.string
};

const iconButtonDefaultProps = {
  reactRouterLink: false
};

function IconButton({ className, href, icon, label, reactRouterLink, to, ...props }) {
  return (
    <Box
      as={reactRouterLink ? Link : (href ? 'a' : 'button')}
      href={(href && reactRouterLink) || href}
      to={reactRouterLink ? to : undefined}
      className={cn(styles.iconButton, className)}
      {...props}
    >
      {icon}
      {label && <label>{label}</label>}
    </Box>
  );
}

IconButton.propTypes = iconButtonPropTypes;
IconButton.defaultProps = iconButtonDefaultProps;

export default IconButton;
