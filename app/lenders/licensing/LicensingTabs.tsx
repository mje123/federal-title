'use client';

import { useState } from 'react';

const attorneys = [
  {
    name: 'Stephanie Dudley Caster',
    national: '8757405',
    licenses: [
      { state: 'District of Columbia', number: '3023580', renewal: '08/31/2026' },
      { state: 'Maryland', number: '99949711', renewal: '08/31/2026' },
      { state: 'Virginia', number: '848255', renewal: '08/31/2027' },
    ],
    notary: [
      { state: 'District of Columbia', renewal: '10/31/2029' },
      { state: 'Maryland', renewal: '08/28/2026' },
    ],
  },
  {
    name: 'Luke Bacigalupo',
    national: '19000593',
    licenses: [
      { state: 'District of Columbia', number: '3000721411', renewal: '08/31/2026' },
      { state: 'Maryland', number: '3000452200', renewal: '08/31/2025' },
      { state: 'Virginia', number: '1209808', renewal: '08/31/2027' },
    ],
    notary: [
      { state: 'Virginia', renewal: '08/31/2025' },
    ],
  },
  {
    name: 'Daniel Cox',
    national: null,
    licenses: [
      { state: 'District of Columbia', number: '3001726122', renewal: '11/30/2027' },
      { state: 'Maryland', number: '3001533442', renewal: '11/30/2027' },
    ],
    notary: [],
  },
  {
    name: 'Jessica Youngs',
    national: null,
    licenses: [
      { state: 'Virginia', number: '952539', renewal: '12/31/2026' },
    ],
    notary: [
      { state: 'Virginia', renewal: '12/31/2026' },
    ],
  },
  {
    name: 'Dedra Roberts',
    national: '8772570',
    licenses: [
      { state: 'Maryland', number: '99950726', renewal: '02/29/2024' },
    ],
    notary: [],
  },
  {
    name: 'Todd Ewing',
    national: '3107819',
    licenses: [],
    notary: [],
  },
];

export function LicensingTabs() {
  const [active, setActive] = useState(0);
  const person = attorneys[active];

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {attorneys.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === i
                ? 'bg-[var(--color-primary-900)] text-white'
                : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-200)]'
            }`}
          >
            {a.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="space-y-6">
        {person.national && (
          <div className="bg-[var(--color-neutral-50)] rounded-xl p-4 border border-[var(--color-neutral-200)]">
            <span className="text-xs font-semibold text-[var(--color-neutral-500)] uppercase tracking-widest">National Producer Number</span>
            <p className="text-[var(--color-primary-900)] font-semibold mt-1">{person.national}</p>
          </div>
        )}

        {person.licenses.length > 0 && (
          <div>
            <h3 className="text-base font-semibold text-[var(--color-primary-900)] mb-3">Title Producer Licenses</h3>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)]">
              <table className="w-full text-sm">
                <thead className="bg-[var(--color-primary-900)] text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">State</th>
                    <th className="text-left p-3 font-semibold">License #</th>
                    <th className="text-left p-3 font-semibold">Renewal Date</th>
                  </tr>
                </thead>
                <tbody>
                  {person.licenses.map((lic, i) => (
                    <tr key={lic.state} className={`border-b border-[var(--color-neutral-200)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-neutral-50)]'}`}>
                      <td className="p-3 font-medium text-[var(--color-primary-900)]">{lic.state}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{lic.number}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{lic.renewal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {person.notary.length > 0 && (
          <div>
            <h3 className="text-base font-semibold text-[var(--color-primary-900)] mb-3">Notary Commissions</h3>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-neutral-200)]">
              <table className="w-full text-sm">
                <thead className="bg-[var(--color-primary-900)] text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">State</th>
                    <th className="text-left p-3 font-semibold">Expiration</th>
                  </tr>
                </thead>
                <tbody>
                  {person.notary.map((n, i) => (
                    <tr key={n.state} className={`border-b border-[var(--color-neutral-200)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-neutral-50)]'}`}>
                      <td className="p-3 font-medium text-[var(--color-primary-900)]">{n.state}</td>
                      <td className="p-3 text-[var(--color-neutral-700)]">{n.renewal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {person.licenses.length === 0 && person.notary.length === 0 && !person.national && (
          <p className="text-[var(--color-neutral-500)] text-sm">No individual licenses on file.</p>
        )}
      </div>
    </div>
  );
}
