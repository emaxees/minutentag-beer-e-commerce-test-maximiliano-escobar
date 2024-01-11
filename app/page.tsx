'use client'
import { 
  Navigation, Header, Welcome, 
  SearchInput, Section, Category, 
  Beer 
} from "@/app/components";
import Layout from "@/app/layout";
import styles from './page.module.css';
import { useEffect, useState } from "react";
import Link from 'next/link'

type Product = {
    stock: number;
    price: number;
};

export type StockData = {
    [productId: string]: Product;
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [stock , setStock] = useState<StockData>({});

  const handleSearch = (query:string) => {
    console.log(query);
  }

  useEffect(() => {
    fetchProducts();
    fetchStockPrice();
  }, [])

  const fetchProducts = async () => {
    const response = await fetch('/api/stock');
    const {products} =  await response.json();
    console.log(products);
    setProducts(products);
  }

  const fetchStockPrice = async () => {
    const response = await fetch('/api/stock-price');
    const {stock} =  await response.json();
    setStock(stock);
  }

  const getPrice = (skus:{ code: string; name: string }[]):number => {
    const codes =  skus.map((sku) => sku.code);
    const products = Object.keys(stock).map((key) => key);
    const [product] = products.filter((product) => codes.includes(product));
    return Number((stock[product]?.price / 100).toFixed(2));
  }

  return (
    <Layout>
      <div className={styles.root}>
        <Header />
        <Welcome />
        <SearchInput placeholder="Search burger, pizza, drink or ect..." onSearch={handleSearch} />
        <Section label="Drink Category"/>
        <div className={styles.categories}>
          <Category>All</Category>
          <Category>Beer</Category>
          <Category>Wine</Category>
        </div>
        <Section label="Populer"/>
          <div className={styles.products}>
            {products.map(({brand, image, skus, id}) => (
              <Link key={brand} href={`${id}-${brand}`}>
                <Beer brand={brand} image={image} price={getPrice(skus)} />
              </Link>
            ))}
          </div>
        <Navigation />
      </div>
    </Layout>
  );
}
