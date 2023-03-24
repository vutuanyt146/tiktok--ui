import clsx from 'clsx';

import Button from "~/components/Button";
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
  return (
    <Button className={clsx(styles['menu-item'])} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
  );
}

export default MenuItem;