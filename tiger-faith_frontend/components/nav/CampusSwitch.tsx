'use client';

import { useState } from 'react';

export default function CampusSwitch() {
  const [campus, setCampus] = useState<'grambling' | 'lancaster'>('grambling');

  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
      <button
        onClick={() => setCampus('grambling')}
        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
          campus === 'grambling'
            ? 'bg-primary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Grambling
      </button>
      <button
        onClick={() => setCampus('lancaster')}
        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
          campus === 'lancaster'
            ? 'bg-primary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Lancaster
      </button>
    </div>
  );
}
