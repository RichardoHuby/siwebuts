'use client';

import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Produk 1', price: 10000 },
    { id: 2, name: 'Produk 2', price: 20000 },
    { id: 3, name: 'Produk 3', price: 30000 },
  ]);

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
    toast.success('Produk berhasil dihapus!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>
      <button
        onClick={() => toast.success('Menambahkan produk baru (fungsionalitas opsional)!')}
        className="bg-blue-600 text-white py-2 px-4 rounded mb-6"
      >
        Tambah Produk
      </button>
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">Nama Produk</th>
            <th className="p-4">Harga</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">
                <button
                  onClick={() => toast.success('Edit produk (fungsionalitas opsional)!')}
                  className="text-yellow-500 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
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
