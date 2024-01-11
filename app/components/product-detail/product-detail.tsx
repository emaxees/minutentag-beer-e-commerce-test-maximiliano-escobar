import React, { FC, MouseEventHandler } from "react";
import styles from './product-detail.module.css';
import { 
    Bag,
    Button, Section
  } from "@/app/components";

interface ProductDetailProps {
    brand?: string;
    image?: string;
    origin?: string;
    stock?: number;
    information?: string;
    price?: number;
    skus?: { code: string; name: string }[];
    onSizeChange?: ((id: number) => void)
}

const ProductDetail: FC<ProductDetailProps> = ({
    brand,
    image,
    origin,
    stock,
    information,
    price,
    skus = [],
    onSizeChange=() => null,
}) => {
const imageUrl = `/images${image}`;

return (
    <div className={styles.root}>
        <img className={styles.image} src={imageUrl} alt="" />
        <div className={styles.box}>
            <div className={styles.specs}>
                <div className={styles.detail}>
                    <div className={styles.brand}>{brand}</div>
                    <div className={styles.more}>
                        Origin {origin} | {!!stock && `Stock: ${stock}` }
                    </div>
                </div>
                {!!price && <div className={styles.price}>${price}</div>}
            </div>
            <div className={styles.information}>
                <div className={styles.label}>Description</div>
                <div className={styles.content}>{information}</div>
            </div>
            <div className={styles.size}>Size</div>
            <div className={styles.sizes}>
                {skus.map((sku) => <Button onClick={() => onSizeChange(Number(sku.code))} key={sku.code} variant="secondary">{sku.name}</Button> )}
            </div>
            <div className={styles.buttons}>
                <Button variant="secondary"><div className={styles.bag}><Bag /></div></Button>
                <Button><div className={styles.add}>Add to cart</div></Button>
            </div>
        </div>
    </div>
    );
};

export default ProductDetail;
