'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/solid';
import Cookies from 'js-cookie';

export default function SideNav() {
  const handleSignOut = () => {
    Cookies.remove('role');
    window.location.href = '/login';
  };

  return (
    <aside className="h-full w-full bg-gradient-to-b from-blue-300 to-blue-900 text-white shadow-xl flex flex-col p-4">
      <div className="mb-6 flex items-center justify-center h-16">
        <AcmeLogo />
      </div>
      <nav className="flex-1 space-y-2">
        <NavLinks />
      </nav>
      <button
        onClick={handleSignOut}
        className="mt-auto flex items-center gap-3 rounded-lg outline p-3 text-white hover:bg-red-700 transition-colors"
      >
        <PowerIcon className="h-5 w-5" />
        <span>Sign Out</span>
      </button>
    </aside>
  );
}
