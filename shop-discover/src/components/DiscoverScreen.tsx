import { CategoryChips } from '@/components/CategoryChips';
import { ProductGrid } from '@/components/ProductGrid';
import { BottomNav } from '@/components/navigation/BottomNav';
import { SortDropdown } from '@/components/SortDropdown';
import { SearchBar } from '@/components/SearchBar';

export async function DiscoverScreen() {
  return (
    <div className="relative bg-white rounded-[28px] shadow-glass overflow-hidden">
      <header className="px-5 pt-5 pb-3 flex items-center justify-between">
        <button aria-label="menu" className="size-8 rounded-full grid place-items-center glass">
          <span className="sr-only">Menu</span>
          <div className="w-4 h-[2px] bg-gray-800 rounded" />
        </button>
        <div className="text-right">
          <p className="text-xl font-semibold">Discover</p>
          <p className="text-xs text-gray-500">Explore New Collections</p>
        </div>
        <button aria-label="activity" className="size-8 rounded-full grid place-items-center glass">
          <span className="sr-only">Activity</span>
          <div className="size-2 rounded-full bg-lilac-500" />
        </button>
      </header>

      <div className="px-5 flex items-center justify-between">
        <div className="text-sm text-gray-500">Sort By</div>
        <SortDropdown />
      </div>

      <div className="px-5 mt-4">
        <CategoryChips />
      </div>

      <div className="px-5 mt-4">
        <SearchBar />
      </div>

      <div className="px-5 mt-4 pb-24">
        {/* Data fetched in ProductGrid */}
        <ProductGrid />
      </div>

      <BottomNav />
    </div>
  );
}

