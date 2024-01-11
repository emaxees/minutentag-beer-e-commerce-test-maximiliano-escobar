import { NextRequest, NextResponse } from "next/server";
import Stock, {Product} from '../stock';

type ResponseData = {
    product: Product;
};

export async function GET(req: NextRequest, context: any) {
    const data: ResponseData = {
        product: Stock[context.params.code],
    };
    return NextResponse.json(data);
}
