'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/shop', label: 'Shop' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              src="/dvd.png"
              alt="DVD Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold">CND Store</span>
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-yellow-400 ${
                  pathname === item.href
                    ? 'underline underline-offset-4 font-light text-yellow-500'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
