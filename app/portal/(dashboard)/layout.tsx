import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { PortalSidebar } from './PortalSidebar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/portal/login');

  return (
    <div className="min-h-screen flex bg-[#f4f5f7]">
      <PortalSidebar />
      <main className="flex-1 p-8 lg:p-10 min-w-0">{children}</main>
    </div>
  );
}
