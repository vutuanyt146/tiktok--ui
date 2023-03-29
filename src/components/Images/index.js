import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import clsx from 'clsx';
import styles from './Image.module.scss';
function Image({ src, alt, fallback: defaultFallback = images.default, className, ...props }) {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(defaultFallback);
  };
  return (
    <img className={clsx(className, styles.wrapper)} src={fallback || src} alt={alt} {...props} onError={handleError} />
  );
}

export default forwardRef(Image);
