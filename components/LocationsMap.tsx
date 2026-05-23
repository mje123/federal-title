'use client';

import { useEffect, useRef } from 'react';

const locations = [
  {
    name: 'Friendship Heights / Chevy Chase',
    note: 'Main Office',
    address: '5481 Wisconsin Ave, Suite D, Chevy Chase, MD 20815',
    href: '/locations/friendship-heights',
    lat: 38.9663,
    lng: -77.0826,
  },
  {
    name: 'U Street / Logan Circle',
    address: '1803 14th Street NW, Washington, DC 20009',
    href: '/locations/14th-street',
    lat: 38.9172,
    lng: -77.0320,
  },
  {
    name: 'Rockville, MD',
    address: '1 Research Court, Suite 450, Rockville, MD 20850',
    href: '/locations/rockville-md',
    lat: 39.0840,
    lng: -77.1528,
  },
  {
    name: 'Clarendon / Arlington, VA',
    address: '3101 Wilson Blvd, Suite 500, Arlington, VA 22201',
    href: '/locations/arlington-va',
    lat: 38.8830,
    lng: -77.0956,
  },
  {
    name: 'Potomac, MD',
    address: '10000 Falls Road, Suite 101, Potomac, MD 20854',
    href: '/locations/potomac-md',
    lat: 39.0176,
    lng: -77.1930,
  },
  {
    name: 'Fairfax, VA',
    note: 'New!',
    address: '3975 Fair Ridge Drive, Fairfax, VA 22033',
    href: '/locations/fairfax-va',
    lat: 38.8462,
    lng: -77.3064,
  },
];

export function LocationsMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Dynamically import Leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      // Fix default marker icon path issue with webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapRef.current!).setView([38.95, -77.12], 10);
      mapInstance.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom brick-red marker
      const customIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 28px; height: 28px;
          background: #781f1c;
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -30],
      });

      locations.forEach((loc) => {
        const popup = `
          <div style="font-family: sans-serif; min-width: 180px;">
            <p style="font-weight: 700; font-size: 14px; margin: 0 0 2px; color: #0f2044;">
              ${loc.name}
            </p>
            ${loc.note ? `<p style="font-size: 11px; color: #781f1c; font-weight: 600; margin: 0 0 4px;">${loc.note}</p>` : ''}
            <p style="font-size: 12px; color: #555; margin: 0 0 8px;">${loc.address}</p>
            <a href="${loc.href}" style="font-size: 12px; color: #781f1c; font-weight: 600; text-decoration: none;">
              Office details →
            </a>
          </div>
        `;
        L.marker([loc.lat, loc.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(popup);
      });
    });

    return () => {
      if (mapInstance.current) {
        (mapInstance.current as { remove: () => void }).remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={mapRef} className="w-full h-full" />
    </>
  );
}
