import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ to, href, children, type, size, className, leftIcon, rightIcon, onClick, ...passProps }) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps
  }

  if (type === 'disabled') {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    })
  }
  
  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = clsx(
    styles.wrapper, 
    styles[type], 
    styles[size], 
    styles[className],
  );

  return ( 
    <Comp className={classes} {...props}>
      {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
      <span className={clsx(styles['content-btn'])}>{children}</span>
      {rightIcon && <span className={clsx(styles.icon)}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;