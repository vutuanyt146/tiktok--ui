import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

function Header() {
  const searchBtn = clsx('search-btn');
  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt='TikTok' />
        </div>
        <div className={clsx(styles.search)}>
          <input placeholder='Search accounts and videos' spellCheck={false}/>
          <button className={clsx(styles.clear)}>
            <FontAwesomeIcon icon={faCircleXmark}/>
          </button>
          <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)}/>
          <button className={searchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
        </div>
        <div className={clsx(styles.actions)}></div>
      </div>
    </header>
  );
}

export default Header;