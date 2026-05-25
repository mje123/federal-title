'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Save, CheckCircle2, Megaphone, Clock } from 'lucide-react';

type BannerSettings = { enabled: boolean; message: string; type: 'info' | 'warning' | 'success' };
type HoursSettings = { monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string; notes: string };

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

const BANNER_TYPES = [
  { value: 'info', label: 'Blue — Info', color: 'bg-blue-600' },
  { value: 'warning', label: 'Amber — Warning', color: 'bg-amber-500' },
  { value: 'success', label: 'Green — Announcement', color: 'bg-green-600' },
] as const;

export function SettingsForm({ initial }: { initial: Record<string, unknown> }) {
  const banner = (initial.announcement_banner ?? { enabled: false, message: '', type: 'info' }) as BannerSettings;
  const hours = (initial.office_hours ?? {
    monday: '9:00 AM – 5:00 PM', tuesday: '9:00 AM – 5:00 PM', wednesday: '9:00 AM – 5:00 PM',
    thursday: '9:00 AM – 5:00 PM', friday: '9:00 AM – 5:00 PM', saturday: 'Closed', sunday: 'Closed', notes: '',
  }) as HoursSettings;

  const [bannerEnabled, setBannerEnabled] = useState(banner.enabled);
  const [bannerMessage, setBannerMessage] = useState(banner.message);
  const [bannerType, setBannerType] = useState<'info' | 'warning' | 'success'>(banner.type);
  const [hoursData, setHoursData] = useState<HoursSettings>(hours);

  const [savingBanner, setSavingBanner] = useState(false);
  const [savedBanner, setSavedBanner] = useState(false);
  const [savingHours, setSavingHours] = useState(false);
  const [savedHours, setSavedHours] = useState(false);

  async function saveBanner() {
    setSavingBanner(true);
    setSavedBanner(false);
    const supabase = createClient();
    await supabase.from('site_settings').upsert({
      key: 'announcement_banner',
      value: { enabled: bannerEnabled, message: bannerMessage, type: bannerType },
      updated_at: new Date().toISOString(),
    });
    setSavingBanner(false);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 3000);
  }

  async function saveHours() {
    setSavingHours(true);
    setSavedHours(false);
    const supabase = createClient();
    await supabase.from('site_settings').upsert({
      key: 'office_hours',
      value: hoursData,
      updated_at: new Date().toISOString(),
    });
    setSavingHours(false);
    setSavedHours(true);
    setTimeout(() => setSavedHours(false), 3000);
  }

  return (
    <div className="space-y-6">

      {/* Announcement Banner */}
      <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-neutral-100)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Megaphone className="h-4 w-4 text-[var(--color-primary-600)]" />
            <h2 className="font-semibold text-[var(--color-primary-900)]">Announcement Banner</h2>
          </div>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <span className="text-sm text-[var(--color-neutral-500)]">{bannerEnabled ? 'Live' : 'Off'}</span>
            <div
              onClick={() => setBannerEnabled(!bannerEnabled)}
              className={`w-10 h-6 rounded-full transition-colors relative cursor-pointer ${bannerEnabled ? 'bg-green-500' : 'bg-neutral-200'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${bannerEnabled ? 'translate-x-5' : 'translate-x-1'}`} />
            </div>
          </label>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-500)] mb-2">Message</label>
            <input
              type="text"
              value={bannerMessage}
              onChange={(e) => setBannerMessage(e.target.value)}
              placeholder="e.g. Our offices will be closed December 25–26 for the holidays."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-sm text-[var(--color-neutral-800)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent placeholder:text-[var(--color-neutral-300)]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-500)] mb-2">Style</label>
            <div className="flex gap-2">
              {BANNER_TYPES.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setBannerType(t.value)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${bannerType === t.value ? 'border-[var(--color-primary-400)] bg-[var(--color-primary-50)] text-[var(--color-primary-700)]' : 'border-[var(--color-neutral-200)] text-[var(--color-neutral-600)] hover:border-[var(--color-neutral-300)]'}`}
                >
                  <div className={`w-3 h-3 rounded-full ${t.color}`} />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {bannerEnabled && bannerMessage && (
            <div className={`rounded-lg px-4 py-2.5 text-sm text-white font-medium ${bannerType === 'info' ? 'bg-blue-600' : bannerType === 'warning' ? 'bg-amber-500' : 'bg-green-600'}`}>
              {bannerMessage}
            </div>
          )}

          <div className="flex justify-end pt-1">
            <button
              onClick={saveBanner}
              disabled={savingBanner}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-medium hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-50"
            >
              {savedBanner ? <><CheckCircle2 className="h-4 w-4" />Saved</> : <><Save className="h-4 w-4" />{savingBanner ? 'Saving…' : 'Save Banner'}</>}
            </button>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white rounded-xl border border-[var(--color-neutral-200)] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--color-neutral-100)] flex items-center gap-2.5">
          <Clock className="h-4 w-4 text-[var(--color-primary-600)]" />
          <h2 className="font-semibold text-[var(--color-primary-900)]">Office Hours</h2>
          <span className="text-xs text-[var(--color-neutral-400)] ml-1">Shown on the Contact page</span>
        </div>

        <div className="px-6 py-5 space-y-3">
          {DAYS.map((day) => (
            <div key={day} className="flex items-center gap-4">
              <span className="text-sm font-medium text-[var(--color-neutral-700)] w-24 capitalize shrink-0">{day}</span>
              <input
                type="text"
                value={hoursData[day]}
                onChange={(e) => setHoursData({ ...hoursData, [day]: e.target.value })}
                placeholder="Closed"
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--color-neutral-200)] text-sm text-[var(--color-neutral-800)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent placeholder:text-[var(--color-neutral-300)]"
              />
            </div>
          ))}

          <div className="pt-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-500)] mb-2">Notes</label>
            <input
              type="text"
              value={hoursData.notes}
              onChange={(e) => setHoursData({ ...hoursData, notes: e.target.value })}
              placeholder="e.g. Hours may vary on federal holidays."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--color-neutral-300)] text-sm text-[var(--color-neutral-800)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-400)] focus:border-transparent placeholder:text-[var(--color-neutral-300)]"
            />
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={saveHours}
              disabled={savingHours}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-primary-700)] text-white text-sm font-medium hover:bg-[var(--color-primary-900)] transition-colors disabled:opacity-50"
            >
              {savedHours ? <><CheckCircle2 className="h-4 w-4" />Saved</> : <><Save className="h-4 w-4" />{savingHours ? 'Saving…' : 'Save Hours'}</>}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
