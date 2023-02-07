import styles from './six.module.css';

/* eslint-disable-next-line */
export interface SixProps {}

export function Six(props: SixProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Six!</h1>
    </div>
  );
}

export default Six;
