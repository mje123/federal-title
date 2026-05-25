'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function LayoutShell({ children, banner }: { children: React.ReactNode; banner: React.ReactNode }) {
  const pathname = usePathname();
  const isPortal = pathname.startsWith('/portal');

  if (isPortal) return <>{children}</>;

  return (
    <>
      {banner}
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
