'use client'
import { Header, ProductDetail } from "@/app/components";
import Layout from "@/app/layout";
import styles from './page.module.css';
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  stock: number,
  price: number,
  abv: string;
  origin: string;
  information: string;
  skus: { code: string; name: string }[];
};

export type StockData = {
  [productId: string]:  {
    stock: number;
    price: number;
  };
};

export default function Product({
  params: { product },
}: {
  params: { product: string }
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [productStock , setProductStock] = useState<StockData>({});
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const response = await fetch('/api/stock');
    const {products} =  await response.json();
    setProducts(products);
  }

  const fetchStockPrice = async (id:number) => {
    const response = await fetch( `/api/stock-price/${id}`);
    const {product} =  await response.json();
    setProductStock(product);
  }

  const getProductId = () => {
    const [id] = product.split('-');
    return Number(id);
  }

  const getPrice = () => {
    return productStock?.price;
  }

  const getSock = () => {
    return productStock?.stock;
  }

  const handleSizeChange = async (id: number) => {
    await fetchStockPrice(id);
    clearInterval(intervalId);
    const newIntervalId = setInterval(async () => {
      await fetchStockPrice(id);
    }, 5000);
    setIntervalId(newIntervalId);
  };
  
  const getProduct = () => {
    const product = products.find((product) => product.id === getProductId());
    const stock = getSock();
    const price = getPrice();

    return {
      brand: product?.brand,
      image: product?.image,
      origin: product?.origin,
      stock: stock ? Number(stock) : 0,
      information: product?.information,
      price: price ? Number(price) : 0,
      skus: product?.skus,
    }
  }

  return (
    <Layout>
      <div className={styles.root}>
        <Header />
        <ProductDetail onSizeChange={handleSizeChange} {...getProduct()} />
      </div>
    </Layout>
  );
}
