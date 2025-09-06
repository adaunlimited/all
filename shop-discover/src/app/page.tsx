import { Suspense } from 'react';
import { DiscoverScreen } from '@/components/DiscoverScreen';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-start justify-center p-4">
      <div className="w-full max-w-[420px]">
        <Suspense fallback={<div className="h-[812px] rounded-[28px] glass shadow-glass" />}> 
          <DiscoverScreen />
        </Suspense>
      </div>
    </main>
  );
}

