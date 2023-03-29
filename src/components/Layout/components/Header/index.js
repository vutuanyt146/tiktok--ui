import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faPlus,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import AccountItem from '../../AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import image_url from '~/constant/image';
import { InboxIcon, SearchIcon, SendIcon } from '~/components/Icons';
import Images from '~/components/Images';

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      data: [
        {
          code: 'vi',
          title: 'Vietnamese',
        },
        {
          code: 'en',
          title: 'English',
        },
      ],
      title: 'Language',
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const USER_MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/setting',
  },
  ...MENU_ITEM,
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark Mode',
    to: '/mode',
  },
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const currentUser = true;

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt='TikTok' />
        </div>

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
            <input placeholder='Search accounts and videos' spellCheck={false} />

            <button className={clsx(styles.clear)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={clsx(styles.loading)} />

            <button className={clsx(styles['search-btn'])}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        <div className={clsx(styles.actions)}>
          {currentUser ? (
            <>
              <Button type='upload' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Tippy content='Message'>
                <div className={clsx(styles.icon)}>
                  <Button size='mini'>
                    <SendIcon />
                  </Button>
                </div>
              </Tippy>
              <Tippy content='Inbox'>
                <div className={clsx(styles.icon)}>
                  <Button size='mini'>
                    <InboxIcon />
                  </Button>
                </div>
              </Tippy>
              <Menu items={USER_MENU_ITEM}>
                <Images src={image_url} alt='Anh' className={clsx(styles['user-avatar'])} />
              </Menu>
            </>
          ) : (
            <>
              <Button type='upload' leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button type='primary'>Log in</Button>

              <Menu items={MENU_ITEM}>
                <div className={clsx(styles.more)}>
                  <img src={images.more} alt='More' />
                </div>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
