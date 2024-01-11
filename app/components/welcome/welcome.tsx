import { FC } from "react";
import styles from './welcome.module.css';

const Welcome: FC = () => (
    <div className={styles.root}>
        <div className={styles.user}>Hi Mr. Michael,</div>
        <div className={styles.welcome}>Welcome Back!</div>
    </div>
);
export default Welcome;
