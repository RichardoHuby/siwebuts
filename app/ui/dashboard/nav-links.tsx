'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Product', href: '/dashboard/product', icon: DocumentDuplicateIcon },
  { name: 'Transaction', href: '/dashboard/transaction', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        const active = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-4 rounded-md p-3 transition-all duration-200',
              {
                'bg-white text-blue-700 shadow-md': active,
                'hover:bg-blue-800': !active,
              }
            )}
          >
            <div className={clsx(
              'p-2 rounded-md',
              {
                'bg-blue-100 text-blue-700': active,
                'bg-blue-600': !active,
              }
            )}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
