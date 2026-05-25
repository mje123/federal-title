'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, FileText, Newspaper, Settings, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';

const nav = [
  { label: 'Dashboard', href: '/portal', icon: LayoutDashboard, exact: true },
  { label: 'Blog Posts', href: '/portal/blog', icon: FileText },
  { label: 'Industry News', href: '/portal/news', icon: Newspaper },
  { label: 'Site Settings', href: '/portal/settings', icon: Settings },
];

export function PortalSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/portal/login');
  }

  return (
    <aside className="w-56 shrink-0 bg-[var(--color-primary-900)] min-h-screen flex flex-col">
      <div className="px-5 pt-6 pb-5">
        <Image
          src="/images/brand/federaltitleescrow_white-56939da1.png"
          alt="Federal Title & Escrow Company"
          width={160}
          height={44}
          className="h-9 w-auto"
        />
        <p className="text-white/35 text-[10px] mt-2 tracking-widest uppercase font-semibold">Staff Portal</p>
      </div>

      <div className="mx-3 mb-4 h-px bg-white/10" />

      <nav className="flex-1 px-3 space-y-0.5">
        {nav.map(({ label, href, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all',
                active
                  ? 'bg-white/12 text-white shadow-inner'
                  : 'text-white/50 hover:text-white/90 hover:bg-white/8'
              )}
            >
              <Icon className={cn('h-4 w-4 shrink-0', active ? 'text-white' : 'text-white/40')} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-6 mt-4">
        <div className="mx-0 mb-4 h-px bg-white/10" />
        <button
          onClick={signOut}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-[13px] font-medium text-white/40 hover:text-white/80 hover:bg-white/8 transition-all"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
