import { FC, ReactNode } from "react";
import styles from './category.module.css';

interface CategoryProps {
    children: ReactNode; 
}
const Category: FC<CategoryProps> = ({children}) => (
    <div className={styles.root}>
        {children}
    </div>
);
export default Category;
