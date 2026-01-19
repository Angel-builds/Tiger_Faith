'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CampusSwitch from './CampusSwitch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Publications', path: '/publications' },
    { name: 'Newsletters', path: '/newsletters' },
    { name: 'Give', path: '/give' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px2 md:px2 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 -ml-2">
          <div className="relative size-30">
            <Image 
              src="/TF_logo.png" 
              alt="Tiger Faith Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none uppercase text-accent-black">Tiger Faith</h1>
            <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Grambling & Lancaster</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-bold uppercase tracking-tight transition-colors ${
                isActive(link.path) ? 'text-primary' : 'text-accent-black hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <CampusSwitch />
          <Link 
            href="/connect" 
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-wider hover:bg-accent-black transition-all"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-accent-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold uppercase transition-colors ${
                isActive(link.path) ? 'text-primary' : 'text-accent-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/connect" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-primary/20"
          >
            Get Involved
          </Link>
        </div>
      )}
    </header>
  );
}
