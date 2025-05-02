import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
    try {
        // Path to the JSON file
        const filePath = path.join(process.cwd(), '/data/product.json');
        const data = await fs.readFile(filePath, 'utf8');
        const products = JSON.parse(data);

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error reading products.json:', error);
        return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
    }
}