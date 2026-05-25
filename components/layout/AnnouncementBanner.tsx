import { createClient } from '@/lib/supabase/server';
import { AnnouncementBannerClient } from './AnnouncementBannerClient';

export async function AnnouncementBanner() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'announcement_banner')
      .single();

    const setting = data?.value as { enabled: boolean; message: string; type: string } | null;
    if (!setting?.enabled || !setting?.message) return null;

    return <AnnouncementBannerClient message={setting.message} type={setting.type as 'info' | 'warning' | 'success'} />;
  } catch {
    return null;
  }
}
