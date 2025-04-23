'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([
    { id: 1, product: 'Produk 1', buyer: 'User 1', total: 10000 },
    { id: 2, product: 'Produk 2', buyer: 'User 2', total: 20000 },
    { id: 3, product: 'Produk 3', buyer: 'User 3', total: 30000 },
  ]);

  const handleDelete = (id: number) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    toast.success('Transaksi berhasil dihapus!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Daftar Transaksi</h1>
      <button
        onClick={() => toast.success('Menambahkan transaksi baru (fungsionalitas opsional)!')}
        className="bg-blue-600 text-white py-2 px-4 rounded mb-6"
      >
        Tambah Transaksi
      </button>
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">Nama Produk</th>
            <th className="p-4">Pembeli</th>
            <th className="p-4">Total</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="p-4">{transaction.product}</td>
              <td className="p-4">{transaction.buyer}</td>
              <td className="p-4">{transaction.total}</td>
              <td className="p-4">
                <button
                  onClick={() => toast.success('Edit transaksi (fungsionalitas opsional)!')}
                  className="text-yellow-500 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="text-red-500"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
