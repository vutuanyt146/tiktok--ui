import styles from './SideBar.module.scss'
import clsx from 'clsx';

function SideBar() {
  return (
    <div className={clsx(styles.wrapper)}>
      SideBar
    </div>
  )
}

export default SideBar;