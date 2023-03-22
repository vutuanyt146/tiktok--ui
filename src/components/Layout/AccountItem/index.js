import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
  return ( 
    <div className={clsx(styles.wrapper)}>
      <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_300x300.webp?x-expires=1679637600&x-signature=q6%2BiGaDq0IObA5yg8YDu1KP3AtY%3D" alt="Anh" className={clsx(styles.avatar)} />
      <div className={clsx(styles.info)}>
        <p className={clsx(styles.name)}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCheckCircle} className={clsx(styles.check)}/>
        </p>
        <span className={clsx(styles.username)}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;