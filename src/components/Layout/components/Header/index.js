import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import AccountItem from '../../AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: 'English',
    children: {
      data: [
        {
          code: 'vi',
          title: 'Vietnamese',
        },
        {
          code: 'en',
          title: 'English'
        }
      ],
      title: 'Language'
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keyboard shortcuts',
  },
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() =>{
    setTimeout(() => {
      setSearchResult([]);
    }, 0)
  }, [])

  const currentUser = true;

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
          {currentUser ? (
            <>
              <Button type='upload' leftIcon={<FontAwesomeIcon icon={faPlus}/>}>Upload</Button>
              <Button size='mini' leftIcon={<FontAwesomeIcon icon={faPaperPlane}/>}></Button>
              <Button size='mini' leftIcon={<FontAwesomeIcon icon={faEnvelopeOpen}/>}></Button>

              <Menu
                items={MENU_ITEM}
              >
                <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b80dc484b4dcc01866c576da8981176f~c5_100x100.jpeg?x-expires=1679716800&x-signature=vNal7MiMqHMLuo3wyaQVQ%2FWmK20%3D" alt="Anh" className={clsx(styles['user-avatar'])} />
              </Menu>
            </>
          ) :
          (
            <>
              <Button type='upload' leftIcon={<FontAwesomeIcon icon={faPlus}/>}>Upload</Button>
              <Button type='primary'>Log in</Button>

              <Menu
                items={MENU_ITEM}
              >
                <div className={clsx(styles.more)}><img src={images.more} alt='More'/></div>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;