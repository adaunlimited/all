export function SearchBar() {
  return (
    <form action="/" className="relative">
      <input
        name="q"
        placeholder="Search for products"
        className="w-full bg-lilac-50 placeholder:text-gray-400 rounded-xl2 py-3 pl-10 pr-4 outline-none ring-1 ring-lilac-200 focus:ring-lilac-400 transition"
        autoComplete="off"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</div>
    </form>
  );
}

