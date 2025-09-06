import { NextResponse } from 'next/server';

const products = [
  {
    id: '1',
    title: 'Berrylush Dress',
    price: 120,
    rating: 4.8,
    favorites: 41,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Twinkle Midi',
    price: 150,
    rating: 4.7,
    favorites: 35,
    image: 'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Satin Top',
    price: 110,
    rating: 4.6,
    favorites: 29,
    image: 'https://images.unsplash.com/photo-1520975823332-7a6a7d9a3c5b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Blazers',
    price: 170,
    rating: 4.9,
    favorites: 51,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop'
  }
];

export const revalidate = 30; // ISR for build-time and runtime caching

export async function GET() {
  // Simulate edge-cachable response
  return NextResponse.json(products, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
    }
  });
}

