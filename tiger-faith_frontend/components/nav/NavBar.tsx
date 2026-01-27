'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Publications', path: '/publications' },
  { name: 'Newsletters', path: '/newsletters' },
  { name: 'Give', path: '/give' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-28 flex items-center justify-between">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image 
              src="/TF_logo.png" 
              alt="Tiger Faith Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none uppercase text-black">Tiger Faith</h1>
            <span className="text-[10px] font-bold text-amber-500 tracking-[0.2em] uppercase">Grambling & Lancaster</span>
          </div>
        </Link>

        {/* Menu Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-tight text-black hover:text-amber-500 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
            <span className="hidden md:inline">Menu</span>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-tight transition-colors ${
                    isActive(link.path) 
                      ? 'text-amber-500 bg-amber-50 border-l-4 border-amber-500' 
                      : 'text-gray-800 hover:text-amber-500 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
