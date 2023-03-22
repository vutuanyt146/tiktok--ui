import Header from '~/components/Layout/components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';

function DefaultLayout({ children }) {
  return ( 
    <div className={clsx(styles.wrapper)}>
      <Header />
      <div className={clsx(styles.container)}>
        <SideBar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;