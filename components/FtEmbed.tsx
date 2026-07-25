'use client';

import { useEffect, useRef } from 'react';

// Single source of truth for the app's origin. Update here if it ever moves.
const FT_APP_ORIGIN = 'https://ftec.federaltitle.com';

export default function FtEmbed({ path, title }: { path: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // SECURITY: only the Federal Title app may control this frame.
      if (event.origin !== FT_APP_ORIGIN) return;

      const frame = frameRef.current;
      if (!frame) return;
      const data = event.data ?? {};

      if (data.type === 'ft-quote:height' && typeof data.height === 'number') {
        frame.style.height = `${data.height}px`;
      } else if (data.type === 'ft-quote:scrollToTop') {
        frame.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      src={`${FT_APP_ORIGIN}${path}`}
      title={title}
      scrolling="no"
      // min-height is the fallback before the first height message arrives;
      // the listener overrides it with the real height. Do NOT set a fixed height.
      style={{ width: '100%', minHeight: 900, border: 0, display: 'block' }}
    />
  );
}
