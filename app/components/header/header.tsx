import { FC } from "react";
import styles from './header.module.css';
import { Menu } from '@/app/components';

const Header: FC = () => (
    <div className={styles.root}>
        <Menu />
        <div></div>
    </div>
);
export default Header;
