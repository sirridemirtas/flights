import cn from 'classnames';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';
import { FlightProvider } from '../../store/Flight';
import ROUTES from '../../constants/ROUTES';
import { IconButton } from '../ui';
import { PassengerDetails, ScrollToTop, Search, SearchResult } from '../common';
import { ChevronBackOutline } from '../icons';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <FlightProvider>
      <Router>
        <ScrollToTop />
        <div className={styles.layout}>
          <nav className={cn(
            styles.nav,
            'glass'
          )}>
            <div className={styles.wrapper}>
              <span className={styles.logo}>
                <NavLink to={ROUTES.HOME}>Parallel Airlines</NavLink>
                <Routes>
                  <Route path={ROUTES.HOME} element={<></>} />
                  <Route exact path={ROUTES.FLIGHT_SELECTION} element={
                    <div className={styles.subHeader}>Uçuş Seçimi</div>
                  } />
                  <Route exact path={ROUTES.PASSENGER_DETAILS} element={
                    <div className={styles.subHeader}>Yolcu Bilgileri</div>
                  } />
                </Routes>
              </span>
              {/* <div className={styles.stepProgress}>
                <div><label>Search Flight</label></div>
                <div className={styles.active}><label>Select Flight</label></div>
                <div><label>Passenger Details</label></div>
                <div><label>Additional Service</label></div>
                <div><label>Payment</label></div>
              </div> */}
            </div>
          </nav>
          <div className={styles.wrapper}>
            <div className={styles.pageActions}>
              <Routes>
                <Route path={ROUTES.HOME} element={<></>} />
                <Route exact path={ROUTES.FLIGHT_SELECTION} element={
                  <>
                    <IconButton
                      className={styles.backButton}
                      icon={<ChevronBackOutline />}
                      label="Arama sayfasına dön"
                      reactRouterLink to={ROUTES.HOME}
                    />
                  </>
                } />
                <Route exact path={ROUTES.PASSENGER_DETAILS} element={
                  <>
                    <IconButton
                      className={styles.backButton}
                      icon={<ChevronBackOutline />}
                      label="Arama sonuçlarına dön"
                      reactRouterLink to={ROUTES.FLIGHT_SELECTION}
                    />
                  </>
                } />
              </Routes>
            </div>
            <Routes>
              <Route exact path={ROUTES.HOME} element={<Search />} />
              <Route exact path={ROUTES.FLIGHT_SELECTION} element={<SearchResult />} />
              <Route exact path={ROUTES.PASSENGER_DETAILS} element={<PassengerDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FlightProvider>
  );
}

export default Layout;
