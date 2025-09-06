import Image from 'next/image';

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  favorites: number;
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('/api/products', {
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error('Failed to load products');
  return res.json();
}

export async function ProductGrid() {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((p) => (
        <article key={p.id} className="rounded-xl2 overflow-hidden bg-lilac-50">
          <div className="relative aspect-[4/3]">
            <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 420px) 50vw, 210px" />
          </div>
          <div className="p-3">
            <div className="text-sm font-medium line-clamp-1">{p.title}</div>
            <div className="mt-1 flex items-center justify-between text-xs text-gray-600">
              <div>⭐ {p.rating.toFixed(1)}</div>
              <div>❤ {p.favorites}</div>
              <div className="font-semibold text-gray-900">${p.price}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

