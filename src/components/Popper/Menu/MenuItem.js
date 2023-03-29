import clsx from 'clsx';

import Button from "~/components/Button";
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
  const classes = clsx(styles['menu-item'], data.separate && styles.separate);
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
  );
}

export default MenuItem;