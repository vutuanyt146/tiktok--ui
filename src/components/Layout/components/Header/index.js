import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import AccountItem from '../../AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() =>{
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000)
  }, [])

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>

        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt='TikTok' />
        </div>

        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={clsx(styles['search-title'])}>
                  Accounts
                </h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={clsx(styles.search)}>
            <input placeholder='Search accounts and videos' spellCheck={false}/>
  
            <button className={clsx(styles.clear)}>
              <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)}/>
  
              <button className={clsx(styles['search-btn'])}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
              </button>
  
          </div>
        </Tippy>

        <div className={clsx(styles.actions)}>
          <Button type='upload' leftIcon={<FontAwesomeIcon icon={faPlus}/>}>Upload</Button>
          <Button type='primary' >Log in</Button>
          <div className={clsx(styles.more)}><img src={images.more} alt='More'/></div>
        </div>
      </div>
    </header>
  );
}

export default Header;