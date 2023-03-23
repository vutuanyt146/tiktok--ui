import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import clsx from 'clsx';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
  const renderItem = () => {
    return items.map((item, index) => 
      <MenuItem key={index} data={item}/>
    )
  }

  return (
    <Tippy
      interactive
      placement='bottom-end'
      render={(attrs) => (
        <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;