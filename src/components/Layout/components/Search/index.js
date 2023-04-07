import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';
import AccountItem from '../../AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <HeadlessTippy
      interactive={true}
      visible={searchResult.length > 0}
      render={(attrs) => (
        <div className={clsx(styles['search-result'])} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            <h4 className={clsx(styles['search-title'])}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={clsx(styles.search)}>
        <input
          value={searchValue}
          placeholder='Search accounts and videos'
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {!!searchValue && (
          <button className={clsx(styles.clear)} onClick={() => setSearchValue('')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)} /> */}

        <button className={clsx(styles['search-btn'])}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
