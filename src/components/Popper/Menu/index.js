import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import clsx from 'clsx';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

function Menu({ children, items = [] }) {
  const [ menu, setMenu ] = useState([{ data: items }]);
  const currentMenu = menu[menu.length - 1];
  const renderItem = () => {
    return currentMenu.data.map((item, index) => {
        const isParent = !!item.children;

        return <MenuItem 
          key={index} 
          data={item}
          onClick={() => {
            if (isParent) {
              setMenu((prev) => [...prev, item.children]);
            }
          }}
        />
      }
    )
  }

  const handleBack = () => {
    setMenu((prev) => prev.slice(0, prev.length - 1));
  }

  return (
    <Tippy
      interactive
      delay={[0, 666]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
          <PopperWrapper className={clsx(styles['menu-popper'])}>
            {menu.length > 1 && <Header title={currentMenu.title} onBack={handleBack}/>}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHidden={() => { setMenu((prev) => prev.slice(0, 1))}}
    >
      {children}
    </Tippy>
  );
}

export default Menu;