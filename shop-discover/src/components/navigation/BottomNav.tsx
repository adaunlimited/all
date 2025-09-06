export function BottomNav() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-4 w-[calc(100%-2rem)] max-w-[420px]">
      <div className="glass rounded-[22px] px-8 py-3 flex items-center justify-between shadow-glass safe-area-bottom">
        <button aria-label="home" className="text-lilac-600">●</button>
        <button aria-label="search" className="text-gray-500">○</button>
        <button aria-label="cart" className="text-gray-500">○</button>
        <button aria-label="profile" className="text-gray-500">○</button>
      </div>
    </nav>
  );
}

