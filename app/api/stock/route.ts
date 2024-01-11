import { NextResponse } from 'next/server';
import Products, { Product } from './products';

type ResponseData = {
    products: Product[];
};

export async function GET(){
    const data: ResponseData = {
        products: Products,
    };
    return NextResponse.json(data);
}
