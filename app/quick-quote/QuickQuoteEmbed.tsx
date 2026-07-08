'use client';

import { useEffect, useRef } from 'react';

const QUOTE_ORIGIN = 'https://ftec.federaltitle.com';
const QUOTE_SRC = `${QUOTE_ORIGIN}/public/guaranteed-quote`;

export default function QuickQuoteEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== QUOTE_ORIGIN) return;

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
      src={QUOTE_SRC}
      title="Federal Title Quick Quote"
      scrolling="no"
      style={{ width: '100%', minHeight: 900, border: 0, display: 'block' }}
    />
  );
}
