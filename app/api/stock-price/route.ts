import { NextResponse } from 'next/server';
import Stock, {StockData} from './stock';

type ResponseData = {
  stock: StockData;
};

export async function GET(){
  const data: ResponseData = {
    stock: Stock,
  };
  return NextResponse.json(data);
}
