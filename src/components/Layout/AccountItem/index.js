import clsx from 'clsx';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import image_url from '~/constant/image';

function AccountItem() {
  return ( 
    <div className={clsx(styles.wrapper)}>
      <img src={image_url} alt="Anh" className={clsx(styles.avatar)} />
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