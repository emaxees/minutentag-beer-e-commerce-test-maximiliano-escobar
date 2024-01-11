import {Home, Note, Bag, Settings} from '@/app/components';
import styles from './navigation.module.css';

const Navigation = () => {
    const routes = [
        {
            label: 'Home',
            icon: Home,
            path: 'home',
        },
        {
            label: 'History',
            icon: Note,
            path: 'history'
        },
        {
            label: 'Bag',
            icon: Bag,
            path: 'bag'
        },
        {
            label: 'Settings',
            icon: Settings,
            path: 'settings'
        },
    ];
    return (
        <ul className={styles.root}>
            {routes.map((route) => (
                <li key={route.label}>
                    <route.icon />
                </li>  
            ))}          
        </ul>
    );
};
export default Navigation;
