import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import image_url from '~/constant/image';
import { InboxIcon, SendIcon } from '~/components/Icons';
import Images from '~/components/Images';
import Search from '../Search';

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
  const currentUser = true;

  return (
    <header className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner)}>
        <div className={clsx(styles.logo)}>
          <img src={images.logo} alt='TikTok' />
        </div>

        <Search />

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
