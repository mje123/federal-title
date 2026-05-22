import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settlement Fee Schedule | Federal Title & Escrow Company',
  description: 'Exact settlement fees for homebuyers in DC, Maryland, and Virginia. Federal Title\'s all-inclusive settlement fee is $1,275 in DC, Montgomery County MD, Arlington and Fairfax VA.',
};

export default function FeesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
