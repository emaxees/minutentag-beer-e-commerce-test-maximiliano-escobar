import React, { FC } from "react";
import { Plus } from '@/app/components';
import styles from './beer.module.css';

interface BeerProps {
    brand: string; 
    image: string;
    price: number;
}

const Beer: FC<BeerProps> = ({ brand, image, price }) => (
    <div className={styles.root}>
        <div className={styles.brand}>
            {brand}
        </div>
        <div 
            style={{backgroundImage: `url(/images${image})`}} 
            className={styles.image} 
        />
        <div className={styles.price}>${price}</div>
        <div className={styles.add}>
            <Plus />
        </div>
    </div>
);

export default Beer;
