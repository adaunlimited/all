import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 'women', name: 'Women', image: 'https://i.pravatar.cc/100?img=65' },
  { id: 'men', name: 'Men', image: 'https://i.pravatar.cc/100?img=12' },
  { id: 'kids', name: 'Kids', image: 'https://i.pravatar.cc/100?img=32' },
  { id: 'shoes', name: 'Footwear', image: 'https://picsum.photos/seed/shoes/100' },
];

export function CategoryChips() {
  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar">
      {categories.map((cat) => (
        <Link key={cat.id} href={`/?category=${cat.id}`} className="shrink-0 text-center">
          <div className="relative size-14 rounded-full overflow-hidden ring-2 ring-lilac-300">
            <Image src={cat.image} alt={cat.name} fill className="object-cover" sizes="56px" />
          </div>
          <div className="mt-1 text-xs text-gray-600">{cat.name}</div>
        </Link>
      ))}
    </div>
  );
}

