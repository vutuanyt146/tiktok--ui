import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './Menu.module.scss';

function Header({ title, onBack }) {
  return (
    <header className={clsx(styles.header)}>
      <button className={clsx(styles['back-btn'])} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={clsx(styles['header-title'])}>{title}</h4>
    </header>
  );
}

export default Header;