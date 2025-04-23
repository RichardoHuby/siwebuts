'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

export default function DashboardPage() {
  const router = useRouter();
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    // Simulasi pengambilan data total produk dan transaksi
    setTotalProducts(20); // Misal ada 20 produk
    setTotalTransactions(50); // Misal ada 50 transaksi
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Produk</h2>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Transaksi</h2>
          <p className="text-3xl font-bold">{totalTransactions}</p>
        </div>
      </div>
    </div>
  );
}
