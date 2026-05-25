import { createClient } from '@/lib/supabase/server';
import { SettingsForm } from './SettingsForm';

export default async function SettingsPage() {
  const supabase = await createClient();

  const { data: rows } = await supabase
    .from('site_settings')
    .select('key, value')
    .in('key', ['announcement_banner', 'office_hours']);

  const settings = Object.fromEntries((rows ?? []).map((r) => [r.key, r.value]));

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-primary-900)]">Site Settings</h1>
        <p className="text-[var(--color-neutral-500)] text-sm mt-1">
          Changes go live on the public site immediately.
        </p>
      </div>
      <SettingsForm initial={settings} />
    </div>
  );
}
