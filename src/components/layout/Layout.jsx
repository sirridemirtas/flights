import { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { FlightContext, FlightProvider } from '../../store/Flight';
import { Search, SearchResult } from '../common';
import styles from './Layout.module.scss';

const layoutPropTypes = {
  children: PropTypes.node
};

const layoutDefaultProps = {};

function Layout({children}) {
  const flightContext = useContext(FlightContext);

  return (
    <FlightProvider>
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <span className={styles.logo}>Parallel Airlines</span>
        </div>
      </nav>

      {flightContext}

      <div className={styles.wrapper}>
        <Search />
      </div>

      {/* <div className={styles.wrapper}>
        <SearchResult />
      </div> */}

    </div>
    </FlightProvider>
  );
}

Layout.propTypes = layoutPropTypes;
Layout.defaultProps = layoutDefaultProps;

export default Layout;
