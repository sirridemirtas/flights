import cn from 'classnames';
import { Input } from '..';
import styles from './PassengerDetails.module.scss';

function PassengerDetails() {
  return (
    <>
      <div className={cn(styles.passengerDetails, 'glass')}>
        <Input label="Ad" placeholder="Ad" defaultValue="Jane" />
        <Input label="Soyad" placeholder="Soyad" defaultValue="Doe" />
        <Input label="Kimlik No" placeholder="Kimlik No" type="number" defaultValue="10000000146" />
        <Input label="Telefon" placeholder="Telefon" defaultValue="+903141592653" />
        <Input label="E-posta" placeholder="E-posta" defaultValue="janedoe@example.com" />
      </div>
    </>
  );
}

export default PassengerDetails;
