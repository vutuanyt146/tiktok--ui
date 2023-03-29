import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
  return ( 
    <div className={clsx(styles.wrapper)}>
      <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b80dc484b4dcc01866c576da8981176f~c5_100x100.jpeg?x-expires=1679803200&x-signature=1uo9b0v62AlipVbnQIlNV2fpYTM%3D" alt="Anh" className={clsx(styles.avatar)} />
      <div className={clsx(styles.info)}>
        <p className={clsx(styles.name)}>
          <span>ngthuu02</span>
          <FontAwesomeIcon icon={faCheckCircle} className={clsx(styles.check)}/>
        </p>
        <span className={clsx(styles.username)}>Nguyễn Thu</span>
      </div>
    </div>
  );
}

export default AccountItem;