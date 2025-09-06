export function SortDropdown() {
  return (
    <select
      aria-label="Sort By"
      className="bg-lilac-50 text-sm rounded-lg px-3 py-1 ring-1 ring-lilac-200 focus:ring-lilac-400"
      defaultValue="popular"
    >
      <option value="popular">Popular</option>
      <option value="price_low">Price: Low to High</option>
      <option value="price_high">Price: High to Low</option>
      <option value="new">Newest</option>
    </select>
  );
}

